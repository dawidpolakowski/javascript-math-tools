function validateForm(form) {
    var x = document.forms["contact_form"]["goldenbrown"].value;
    if ( x == "" || x == null ){ 
      form.action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8";
    }
    else{ 
      form.action="https://www.fitronics.com/thank-you/" 
      return false;
      }
  }