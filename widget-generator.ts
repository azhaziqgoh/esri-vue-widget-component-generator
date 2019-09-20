import { extSchemaInterface } from "./interfaces";

function generateEsriWidgetElement(componentSchema: any, extSchema?: extSchemaInterface){
      //Wrapper Element
      let esriWidget = document.createElement("div");
      esriWidget.className = "esri-widget";
  
      let componentElem = document.createElement(componentSchema.name);
      
      for(let prop in componentSchema.props){
        
        let propValue = prop;
  
        if(extSchema && extSchema.props){
          propValue = extSchema.props[prop] ? extSchema.props[prop] : prop;
        }
        
        //Detect CameCase
        let propsStrArr = prop.split(/([A-Z0-9][a-z0-9]*)/);
        
        propsStrArr.length > 1 && propsStrArr.pop();
  
        componentElem.setAttribute(`v-bind:${propsStrArr.join('-')}`,propValue);
      }
      
      if(extSchema){
        for(let event in extSchema.events){
          //Use the full notation instead of shorthand notation due to setAttribute will not work with @
          componentElem.setAttribute(`v-on:${event}`,'event');
        }
    
        for(let style in extSchema.styles){
          componentElem.style[style] = extSchema.styles[style];
        }

        extSchema.classes && componentElem.classList.add(...extSchema.classes);
      }

  
      esriWidget.appendChild(componentElem);
  
      return esriWidget;
}