const PseudoWindow = (() => {
  this.keywords = [
      {
        name: "method",
        style: {
          color: "whitesmoke",
          border: "1px solid lightgreen",
          fontWeight: "bold",
          background: "#3db73d",
          borderRadius: "8px",
          width: "60px",
          textAlign: 'center'
        }
      },
      {
        name: "params",
        style: {
          color: "whitesmoke",
          border: "1px solid lightgreen",
          fontWeight: "bold",
          background: "#72d772 ",
          borderRadius: "8px",
          width: "60px",
          textAlign: 'center'
        }
      },
      {
        name: "_check?",
        style: {
          color: "#f5f",
          // border: "1px solid green",
          fontWeight: "bold",
          // textDecoration: "underline",
          // background: "green",
          // borderRadius: "8px",
          // width: "60px",
          textAlign: 'center'
        }
      },
      {
        name: "If ?",
        style: {
          color: "#f5f",
          // border: "1px solid green",
          fontWeight: "bold",
          // textDecoration: "underline",
          // background: "green",
          // borderRadius: "8px",
          // width: "60px",
          textAlign: 'center'
        }
      },
      {
        name: "_create",
        style: {
          color: "green",
          // border: "1px solid green",
          fontWeight: "bold",
          // textDecoration: "underline",
          // background: "green",
          // borderRadius: "8px",
          width: "60px",
          textAlign: 'center'
        }
      },
      {
        name: "?true:",
        style: {
          color: "green",
          // border: "1px solid green",
          fontWeight: "bold",
          // textDecoration: "underline",
          // background: "green",
          // borderRadius: "8px",
          width: "60px",
          textAlign: 'center'
        }
      },
      {
        name: "?false:",
        style: {
          color: "grey",
          // border: "1px solid green",
          fontWeight: "bold",
          // textDecoration: "underline",
          // background: "green",
          // borderRadius: "8px",
          // width: "60px",
          textAlign: 'center'
        }
      },
      {
        name: "about",
        style: {
          color: "#f5f5",
          // border: "1px solid green",
          fontWeight: "bold",
          // textDecoration: "underline",
          // background: "green",
          // borderRadius: "8px",
          // width: "60px",
          textAlign: 'center'
        }
      },
      {
        name: "_run",
        style: {
          color: "red",
          // border: "1px solid green",
          fontWeight: "bold",
          // textDecoration: "underline",
          // background: "green",
          // borderRadius: "8px",
          // width: "60px",
          textAlign: 'center'
        }
      },
      {
        name: "note:",
        style: {
          color: "red",
          // border: "1px solid green",
          fontWeight: "bold",
          // textDecoration: "underline",
          // background: "green",
          // borderRadius: "8px",
          // width: "60px",
          textAlign: 'center'
        }
      },
      {
        name: "idea:",
        style: {
          color: "blue",
          // border: "1px solid green",
          fontWeight: "bold",
          // textDecoration: "underline",
          // background: "green",
          // borderRadius: "8px",
          // width: "60px",
          textAlign: 'center'
        }
      },
      {
        name: "object",
        style: {
          color: "orange",
          // border: "1px solid green",
          fontWeight: "bold",
          // textDecoration: "underline",
          // background: "green",
          // borderRadius: "8px",
          // width: "60px",
          textAlign: 'center'
        }
      },
      {
        name: "_includes",
        style: {
          color: "rgb(236, 69, 178)",
          // border: "1px solid green",
          fontWeight: "bold",
          // textDecoration: "underline",
          // background: "green",
          // borderRadius: "8px",
          // width: "60px",
          textAlign: 'center'
        }
      },
      {
        name: "comment",
        style: {
          color: "#548889",
          // border: "1px solid green",
          fontWeight: "bold",
          // textDecoration: "underline",
          // background: "green",
          // borderRadius: "8px",
          // width: "60px",
          textAlign: 'center'
        }
      },
  ];
  
  // # Selectors
  this.methodSelector = false;
  this.methodParamsSelector = false;
  this.includesSelector = false;
  this.createSelector = false;
  this.objectSelector = false;
  
  // # Matrieces of `pseudo-code`
  this.methods = new Array();
  this.MethodsParams = new Array();
  this.methodsObjects = new Array();
  this.methodsMethods = new Array();
  
  this.newPseudoCode = "";
  this.currentCodeLine = "";
  // --------------------------------------
  const addPseudoCode = () => {
    // // # Get new `pseudo-code`
    // this.newPseudoCode = PseudoWindowHelpers
    const CODE_TYPE = defineCodeType();
    
    // console.log(CODE_TYPE)
    // Handle code-style
    let PSEUDO_CODE = STYLED_CODE(CODE_TYPE);
    console.log(PSEUDO_CODE);
    // # Render
    renderPseudoCode({
      pseudoCode: PSEUDO_CODE,
      behaviour: LAST_LINE_STATE_BEHAVIOUR()
    });
    
    // +++++++++++++++++++++++++++++++++++++++
    // # Handle methods .>> [ _includes = false ]
    if (this.methodSelector && !this.includesSelector) {
      this.methods.push(this.newPseudoCode);
      this.methodSelector = false;
      // console.log("method has been saved...");
      // console.log(this.methods);
    };
    
    // .>> [ _includes = true ] && [ methodSelector = true ]
    if (this.methodSelector && this.includesSelector) { 
      // .>> Insert method in `last-created-method`
      console.log("includes method");
      this.methodsMethods.push({
        methodIndex: this.methods.length - 1,
        method: this.newPseudoCode
      });
      PseudoWindowHelpers.NEW_PSEUDO_CODE_INPT().value = "_includes another";
      console.log(this.methodsMethods);
      this.methodSelector = false;
      return this.includesSelector = false;
    };
    
    // # Handle parameters
    if (this.methodParamsSelector) {
      this.MethodsParams.push({
        methodIndex: this.methods.length-1,
        params: this.newPseudoCode
      });
      this.methodParamsSelector = false;
      // console.log(this.MethodsParams);
      // console.log(this.methods)
    };
    
    // # Handle `objects`
    
    
    // +++++++++++++++++++++++++++++++++++++++
    // +++++++++++++++++++++++++++++++++++++++
    // # Handle `create`
    this.createSelector = PseudoWindowHelpers.checkCreate(this.newPseudoCode);
    if (this.createSelector) { 
      return PseudoWindowHelpers.NEW_PSEUDO_CODE_INPT().value = "method, Object, Component";
    };
    
    // # Handle `methods`
    this.methodSelector = PseudoWindowHelpers.checkMethod(this.newPseudoCode);
    if (this.methodSelector) { 
      return PseudoWindowHelpers.NEW_PSEUDO_CODE_INPT().value = "methodName";
    };
    
    // # Handle `objects`
    this.objectSelector = PseudoWindowHelpers.checkObject(this.newPseudoCode);
    if (this.objectSelector) {
      return PseudoWindowHelpers.NEW_PSEUDO_CODE_INPT().value = "objectName";
    };
    
    // # Handle `methods-parameters`
    this.methodParamsSelector = PseudoWindowHelpers.checkMethodParams(this.newPseudoCode);
    if (this.methodParamsSelector) { 
      return PseudoWindowHelpers.NEW_PSEUDO_CODE_INPT().value = "(parameters)";
    };
    
    // # Handle `_includes`
    this.includesSelector = PseudoWindowHelpers.checkIncludes(this.newPseudoCode);
    if (this.includesSelector) { 
      return PseudoWindowHelpers.NEW_PSEUDO_CODE_INPT().value = "object, method";
    };
    // +++++++++++++++++++++++++++++++++++++++
    
    
    
    // # .>> else
    PseudoWindowHelpers.NEW_PSEUDO_CODE_INPT().value = "";
  }; // End addPseudoCode()
  // --------------------------------------
  // # Define the type of value
  const defineCodeType = () => {
    const DEFAULT_CODE_TYPE = "normal";
    // # Get new `pseudo-code`
    let new_code = PseudoWindowHelpers.NEW_PSEUDO_CODE();
    this.newPseudoCode = new_code;
    // # Check keyword
    let keywordCheck = isKeyword(new_code);
    return keywordCheck.isKeyword ? {
      type: "keyword",
      style: keywordCheck.style
    } : {
      type: "normal"
    };
    // : isEnd(new_code, DEFAULT_CODE_TYPE);
  };
  // --------------------------------------
  const isKeyword = (new_code) => {
    const KEYWORDs = this.keywords;
    for (let i in KEYWORDs) { 
      if (new_code === KEYWORDs[i].name) {
        return {
          isKeyword: true,
          style: KEYWORDs[i].style
        };
      };
    };
    return {
      isKeyword: false
    };
  };
  // --------------------------------------
  const isEnd = (new_code, DEFAULT_CODE_TYPE) => { 
    return new_code.charAt(new_code.length - 1) === "." ? {
      type: "end"
    } : {
      type: DEFAULT_CODE_TYPE
    };
  };
  // --------------------------------------
  const LAST_LINE_STATE_BEHAVIOUR = () => {
    // # Get `lines` of `pseudo-code`
    const ALL_CODE_LISTs = PseudoWindowHelpers.PSEUDO_CODE_LISTs();
    // # Get `last-line`
    const LAST_LINE = ALL_CODE_LISTs[ALL_CODE_LISTs.length - 1];
    // # Check `last-line`
    if (!LAST_LINE) // The `pseudo-code-container` is empty
      return { 
        order: "create_new_line",
        reason: "it's_empty"
      }; // .>> & append it
    // .>> There is a line exists
    // .>> Needs to define the state of line `end` or `not-end`
    // # Get `line-text`
    const LAST_LINE_TEXT = LAST_LINE.textContent.trim();
    // # Check is `line` `end` or `not-end`?
    if (LAST_LINE_TEXT.charAt(LAST_LINE_TEXT.length - 1) === ".") { 
      // .>> Needs to create a new line
      return {
        order: "create_new_line", // .>> & append it
        reason: "the_last_line_ends"
      }
    } else {
      console.log("current line...");
      return {
        order: "current_line",
        reason: "current_line_doesn't_end",
        line: LAST_LINE
      };
    };
  };
  // --------------------------------------
  const STYLED_CODE = (codeType) => {
    if (codeType.type === "keyword") { 
      return createKeywordCodeContainer(codeType.style);
    };
    return createNormalCodeContainer();
  };
  // --------------------------------------
  const createNormalCodeContainer = () => {
    let span = document.createElement("span");
    span.textContent = this.newPseudoCode;
    return span;
  };
  // --------------------------------------
  const createKeywordCodeContainer = (codeStyle) => { 
    let span = document.createElement("span");
    span.textContent = this.newPseudoCode;
    // # Handle `code-style`
    span.style.color = codeStyle.color;
    span.style.border = codeStyle.border;
    span.style.background = codeStyle.background;
    span.style.fontWeight = codeStyle.fontWeight;
    span.style.borderRadius = codeStyle.borderRadius;
    span.style.textAlign = codeStyle.textAlign;
    span.style.width = codeStyle.width;
    span.style.textDecoration = codeStyle.textDecoration;
    return span;
  };
  // --------------------------------------
  const renderPseudoCode = ({
    pseudoCode,
    behaviour
  }) => { 
    // # Define `line` to insert `pseudo-code`
    let pseudoLine = "";
    switch (behaviour.order) { 
      case "create_new_line":
        let li = document.createElement("li");
        li.append(pseudoCode); // .>> Add `pseudo-code` to `li`
        // pseudoLine = li;
        // .>> `new li` > `not exists`
        // # Insert `pseudo-code` in `pseudo-lists`
        PseudoWindowHelpers.PSEUDO_CODE_LISTs_CNTR().append(li);
        break;
      case "current_line":
        // console.log("add to current line...")
        // console.log(pseudoCode)
        // pseudoLine = behaviour.line;
        // pseudoLine += pseudoCode; // .>> Add `pseudo-code` to `li`
        behaviour.line.append(pseudoCode); // .>> Add `pseudo-code` to `li`
        break;
      default:
        return alert("I can not understand!");
    };   
  };
  // --------------------------------------
  return {
    addPseudoCode: addPseudoCode,
    methodSelector: methodSelector,
    methods: methods
  };
})();
// End!