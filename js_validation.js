function getvalidate()
{
	const msg1=document.querySelector('.alert1');
	const msg2=document.querySelector('.alert2');
	const msg3=document.querySelector('.alert3');
	const msg4=document.querySelector('.alert4');
	const msg5=document.querySelector('.alert5');
	const msg6=document.querySelector('.alert6');

	var fname=document.formcheck.fname.value;
	var lname=document.formcheck.lname.value;
	var email=document.formcheck.email.value;
	var age=document.formcheck.age.value;
	var gender=document.formcheck.gender;
	var lang=document.formcheck.lang;
	//var coorrect=/^[A-Za-z]+$/;

	// console.log(fname);
	// console.log(lname);
	// console.log(email);
	// console.log(age);
	
	if(fname.trim().length<3)
	{
		msg1.textContent='*Required';
		msg2.textContent='';
		msg3.textContent='';
		msg4.textContent='';
		msg5.textContent='';
		msg6.textContent='';
		return false;
	}
	else if (lname.trim().length<4) {
		
		msg2.textContent="*Required";
		msg1.textContent='';
		msg3.textContent='';
		msg4.textContent='';
		msg5.textContent='';
		msg6.textContent='';
		return false;
	}
	else if (email.trim().length<8) {
		
		msg3.textContent="*Required";
		msg1.textContent='';
		msg2.textContent='';
		msg4.textContent='';
		msg5.textContent='';
		msg6.textContent='';
		return false;
	}
	else if (age<10) {
		
		msg4.textContent="*Required";
		msg1.textContent='';
		msg2.textContent='';
		msg3.textContent='';
		msg5.textContent='';
		msg6.textContent='';
		return false;
	}
	if(3>2){

		for(j=0;j<gender.length;j++)
		{
		if (gender[j].checked==true) {
			//console.log(gender[j].value);
			var yes=true;
		}}
			msg4.textContent="";
			msg1.textContent='';
			msg2.textContent='';
			msg3.textContent='';
			msg6.textContent='';
			if(yes!=true){
			msg5.textContent='*Required';
			return false;}
	}

	if(2<3){
		//console.log('i am inside..');
		for(i=0;i<lang.length;i++)
		{
		if (lang[i].checked==true) {
			//console.log(lang[i].value);
			var no=true;
		}}
			msg4.textContent="";
			msg1.textContent='';
			msg2.textContent='';
			msg3.textContent='';
			msg5.textContent="";
			if (no!=true) {
			msg6.textContent="*Required";
			return false;}
	}
	alert('Thanks For Your Interest '+fname+' '+lname);
	return true;
	
}