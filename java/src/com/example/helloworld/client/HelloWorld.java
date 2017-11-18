package com.example.helloworld.client;

import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.core.client.GWT;
import com.google.gwt.user.client.ui.HTML;
import com.google.gwt.user.client.DOM;
import com.google.gwt.user.client.Element;
import com.google.gwt.xml.client.Document;

/**
 * Entry point classes define <code>onModuleLoad()</code>.
 */
public class HelloWorld implements EntryPoint {

  /**
   * This is the entry point method.
   */
  public void onModuleLoad() {
    Element body= DOM.getElementById("app");
    body.setInnerHTML("Hello World");
  }
}
