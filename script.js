// small utility script for demo UX
document.getElementById('year')?.textContent = new Date().getFullYear();
document.getElementById('newsletter')?.addEventListener('submit', (e) => {
e.preventDefault();
const email = e.target.email?.value || 'your email';
alert(`Thanks! ${email} has been added to the demo newsletter. Hook up a real list
(ConvertKit/Mailchimp).`);
});
// simple mobile nav toggle (if you want)
const toggle = document.querySelector('.nav-toggle');
toggle?.addEventListener('click', ()=> {
const nav = document.querySelector('.main-nav');
if(!nav) return;
nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
});
