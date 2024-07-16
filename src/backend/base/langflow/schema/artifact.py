from enum import Enum
from typing import Generator

from fastapi.encoders import jsonable_encoder
from pydantic import BaseModel

from langflow.schema import Data
from langflow.schema.message import Message


class ArtifactType(str, Enum):
    TEXT = "text"
    DATA = "data"
    OBJECT = "object"
    ARRAY = "array"
    STREAM = "stream"
    UNKNOWN = "unknown"
    MESSAGE = "message"


def get_artifact_type(value, build_result=None) -> str:
    result = ArtifactType.UNKNOWN
    match value:
        case Message():
            if not isinstance(value.text, str):
                enum_value = get_artifact_type(value.text)
                result = ArtifactType(enum_value)
            else:
                result = ArtifactType.MESSAGE
        case Data():
            enum_value = get_artifact_type(value.data)
            result = ArtifactType(enum_value)

        case str():
            result = ArtifactType.TEXT

        case dict():
            result = ArtifactType.OBJECT

        case list():
            result = ArtifactType.ARRAY

    if result == ArtifactType.UNKNOWN:
        if build_result and isinstance(build_result, Generator):
            result = ArtifactType.STREAM
        elif isinstance(value, Message) and isinstance(value.text, Generator):
            result = ArtifactType.STREAM

    return result.value


def post_process_raw(raw, artifact_type: str):
    if artifact_type == ArtifactType.STREAM.value:
        raw = ""
    elif artifact_type == ArtifactType.UNKNOWN.value and raw is not None:
        if isinstance(raw, (BaseModel, dict)):
            try:
                raw = jsonable_encoder(raw)
                artifact_type = ArtifactType.OBJECT.value
            except Exception:
                raw = "Built Successfully ✨"
        else:
            raw = "Built Successfully ✨"
    return raw, artifact_type
