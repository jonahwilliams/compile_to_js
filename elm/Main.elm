import Html exposing (..)

main =
  Html.beginnerProgram { model = model, view = view, update = update }

type alias Model = {}

model : Model
model = {}

type Msg = Nothing

update : Msg -> Model ->  Model
update msg model = model

view : Model -> Html Msg
view model = text "Hello, World"