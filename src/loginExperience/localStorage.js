const getStoreEmail = ()=>{
    const storeEmailString= localStorage.getItem('Email');
    if(storeEmailString){
       const storeEmail = JSON.parse(storeEmailString);
       return storeEmail;
    }
    return [];
 }
 const saveEmailToLS = Email =>{
     const EmailStringified = JSON.stringify(Email);
     localStorage.setItem('Email',EmailStringified); 
 }
 
 const addToLS = id =>{
     const Email = getStoreEmail();
     const x=  Email.find(x => x==id);
     if(x==undefined)
     Email.push(id);
     // save to local storage
     saveEmailToLS(Email);
     
 }

 export {addToLS}