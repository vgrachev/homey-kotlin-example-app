package com.vgrachev.homey.kotlin.app

class MyApp: App {
    constructor() {}
    override fun onInit() {
        this.log("MyApp is running...");
    }
}