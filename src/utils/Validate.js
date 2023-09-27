export const checkValidData = (email, password,FullName) => {
    
    const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    const isFullNameValid =/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(FullName);  
 

    if (!isEmailValid) return "Email Id is not valid";
    if (!isPasswordValid) return "password is not valid";
    if (!isFullNameValid) return "FullName is not valid";

    return null;
    
    
};