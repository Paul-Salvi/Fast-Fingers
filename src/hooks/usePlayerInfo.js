import { useState, useEffect } from "react";
function useName(val) {
    const [name, setName] = useState(val);
    const [isFirstEntry,setIsFirstEntry] = useState(true);
    const [emptyError, setEmptyShowError] =useState(false);
    useEffect(()=>{
        if(!isFirstEntry)
        setEmptyShowError(!name);
        else if (!!name)
        setIsFirstEntry(false)
    },[name,isFirstEntry])
    return {
        name, 
        setName, 
        emptyError,
        setEmptyShowError
    }
}
export default useName;