// console.log("log");

const body = document.querySelector("body");

function lunchModal(e) {
  //   console.log(body);
  let createModal = document.createElement("modal");

  createModalFunc(modal());
  function createModalFunc(passInModal) {
    createModal.innerHTML = passInModal;
    body.appendChild(createModal);
  }
}

// create modal

const modal = () => `
<div class="modal">
        <div class="modal-container">
          <div class="modal-content">
            <div class="modal-header">
              Control Panel <span class="btn btn-close" id="Close" onclick="removeModal()">X</span>
            </div>
            <div class="modal-body">
                <label class="labs">Name: </label>
                <input type="text" id="Name"><br>
                <label class="labs">Temp: </label>
                <input type="text" id="temprature"><br>
                <label class="labs">Humidity: </label>
                <input type="text" id="hum"><br>
                <label class="labs">Soil Moisture: </label>
                <input type="text" id="soil"><br>
            </div>
            <div class="modal-footer">
              <button onclick="AddNew()">Add New</button>
              <button onclick="Update()">Update</button>
              <button onclick="Delete()">Delete</button>
              </div>
          </div>
        </div>
      </div>

`;

// close modal function

const removeModal = (e) => {
  //   console.log(e.parentElement);
  //   const closeBtn = document.querySelector("#Close");
  //   console.log(closeBtn);

  //   const modal = e.parentElement.parentElement.parentElement.parentElement;
  //   modal.remove();
  const modal = document.querySelector("modal");
  //   console.log(modal);
  modal.remove();
};
