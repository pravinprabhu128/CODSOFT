document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault()
     
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const ticketType = document.getElementById('ticket-type').value
  
    const confirmationMessage = `Thank you, ${name}, for registering for the Tech Conference 2024! You will receive a confirmation email at ${email}.`
    
    document.getElementById('confirmation').innerText = confirmationMessage
    document.getElementById('registration-form').reset()
  })
  