const PseudoWindowHelpers = (() => {


  // this.newPseudoCode = "none";
  // # Get new `pseudo-code`
  const NEW_PSEUDO_CODE = () => document.getElementById("pseudoCodeInput").value;
  const NEW_PSEUDO_CODE_INPT = () => document.getElementById("pseudoCodeInput");
  const PSEUDO_CODE_LISTs = () => document.getElementById("pseudoCodeList").querySelectorAll("li");
  const PSEUDO_CODE_LISTs_CNTR = () => document.getElementById("pseudoCodeList");
  
  const createArrowFn = (fnName) => { 
    return `const ${fnName} = () => { };`;
  };
  
  const checkMethod = (vl) => { 
    return (vl === "method") ? true : false;
  };
  
  const checkMethodParams = (vl) => { 
    return (vl === "params") ? true : false;
  };
  
  const checkIncludes = (vl) => { 
    return (vl === "_includes");
  };
  
  const checkCreate = (vl) => { 
    return (vl === "_create"); 
  };
  
  const checkObject = (vl) => { 
    return (vl === "object");
  };
    
  return {
    NEW_PSEUDO_CODE: NEW_PSEUDO_CODE,
    PSEUDO_CODE_LISTs: PSEUDO_CODE_LISTs,
    PSEUDO_CODE_LISTs_CNTR: PSEUDO_CODE_LISTs_CNTR,
    NEW_PSEUDO_CODE_INPT: NEW_PSEUDO_CODE_INPT,
    createArrowFn: createArrowFn,
    checkMethod: checkMethod,
    checkMethodParams: checkMethodParams,
    checkIncludes: checkIncludes,
    checkCreate: checkCreate
  };
})();
// End!