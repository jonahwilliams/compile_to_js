package tutorial.webapp

import org.scalajs.dom
import dom.document

object HelloWorldApp {
  def main(args: Array[String]): Unit = {
    document.body.appendChild(document.createTextNode("Hello, World"))
  }
}