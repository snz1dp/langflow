from langchain_community.chat_models import ChatMaritalk

from langflow.base.constants import STREAM_INFO_TEXT
from langflow.base.models.model import LCModelComponent
from langflow.field_typing import LanguageModel
from langflow.field_typing.range_spec import RangeSpec
from langflow.inputs import BoolInput, DropdownInput, FloatInput, IntInput, MessageInput, SecretStrInput, StrInput


class MaritalkModelComponent(LCModelComponent):
    display_name = "Maritalk"
    description = "Generates text using Maritalk LLMs."
    icon = "Maritalk"
    name = "Maritalk"
    inputs = [
        MessageInput(name="input_value", display_name="Input"),
        IntInput(
            name="max_tokens",
            display_name="Max Tokens",
            advanced=True,
            value=512,
            info="The maximum number of tokens to generate. Set to 0 for unlimited tokens.",
        ),
        DropdownInput(
            name="model_name",
            display_name="Model Name",
            advanced=False,
            options=["sabia-2-small", "sabia-2-medium"],
            value=["sabia-2-small"],
        ),
        SecretStrInput(
            name="api_key",
            display_name="Maritalk API Key",
            info="The Maritalk API Key to use for the OpenAI model.",
            advanced=False,
        ),
        FloatInput(name="temperature", display_name="Temperature", value=0.1, range_spec=RangeSpec(min=0, max=1)),
        BoolInput(name="stream", display_name="Stream", info=STREAM_INFO_TEXT, value=False, advanced=True),
        StrInput(
            name="system_message",
            display_name="System Message",
            info="System message to pass to the model.",
            advanced=True,
        ),
    ]

    def build_model(self) -> LanguageModel:  # type: ignore[type-var]
        # self.output_schea is a list of dictionarie s
        # let's convert it to a dictionary
        api_key = self.api_key
        temperature = self.temperature
        model_name: str = self.model_name
        max_tokens = self.max_tokens

        output = ChatMaritalk(
            max_tokens=max_tokens,
            model=model_name,
            api_key=api_key,
            temperature=temperature or 0.1,
        )
        return output  # type: ignore
