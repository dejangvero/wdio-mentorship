import { setWorldConstructor, World, When } from '@cucumber/cucumber'

class CustomWorld extends World {  
  userId = "";
  sessionId = "";
  
  constructor(options) {
    super(options)
  } 
}

setWorldConstructor(CustomWorld)

