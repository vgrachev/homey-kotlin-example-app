@file:JsModule("homey")
@file:JsNonModule
package com.vgrachev.homey.kotlin.app

open external class App {
    open fun onInit()
    fun log(msg: String)
}

