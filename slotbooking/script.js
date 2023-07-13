let form = document.getElementById('slot-form');
form.addEventListener('submit', submitForm);

function submitForm(event) {
  event.preventDefault();
  let date = document.getElementById('date').value;
  let startTime = document.getElementById('start-time').value;
  let endTime = document.getElementById('end-time').value;

  let data = {
    date: date,
    startTime: startTime,
    endTime: endTime
  };
console.log('data' , data)
  localStorage.setItem('slot', JSON.stringify(data));

  axios.post('http://localhost:4000/user/slot', data)
    .then(response => {
      console.log(response.data.data);
      alert(response.data.message)
    })
    .catch(error => {
      console.log(error);
      alert(error.message)
    });
}


const slotItems = document.getElementById('slot-list-items');

window.addEventListener('DOMContentLoaded', () => {
  axios.get('http://localhost:4000/user/slotGet')
    .then((response) => {
      console.log(response);

      if (Array.isArray(response.data.response)) {
        response.data.response.forEach((result) => {
          let li = document.createElement('li');
          li.textContent = `Slot Date: ${result.date} - Slot Start Time: ${result.startTime} - Slot End Time: ${result.endTime}`;
          slotItems.appendChild(li);
        });
      } else {
        console.log('Response data is not an array:', response.data);
      }
    })
    .catch((err) => {
      console.log(err);
    });
});