    function validatemail(inputEmail)
{
    let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(inputEmail.value.match(mailformat))
{
    alert("korrekt email!");
    return true;
}
    else
{
    alert("forkert email den skal indeholde . og @ som minimum!");
    document.forms.Email.focus();
    
    return false;
    }
}