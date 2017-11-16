(ns clojurescript.core
    (:require ))

(. (.-body js/document) appendChild (new js/Text))