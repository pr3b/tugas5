let data = []
let done = []

function formSubmit(event) {
    event.preventDefault()
    let input = document.getElementById("input-field").value
    data.push(input)
    let list = document.getElementById("shop-list")
    list.innerHTML = ""
    for (let i = 0; i < data.length; i++) {
        list.innerHTML += `<li>
                            <p>
                                <span>${data[i]}</span>
                                <button onClick="doneList(event,${i})">Sudah Beli</button> 
                            </p>
                            </li>
        `
    }
}

function doneList(event, idx) {
    event.preventDefault()
    done.push(data[idx])
    data.splice(idx, 1)
    let list = document.getElementById("done-list")
    list.innerHTML = ""
    for (let i = 0; i < done.length; i++) {
        list.innerHTML += `<li>
                            <p>
                                <span>${done[i]}</span>
                                <button onClick="hapusItem(event, ${i})">Hapus</button>
                            </p>
                            </li>
        `
    }

    list = document.getElementById("shop-list")
    list.innerHTML = ""
    for (let i = 0; i < data.length; i++) {
        list.innerHTML += `<li>
                            <p>
                                ${data[i]}
                                <button onClick="doneList(event,${i})">Sudah Beli</button>
                            </p>
                            </li>
        `
    }
}

function hapusItem(event, idx) {
    // let x = document.getElementById("done-list");
    event.preventDefault()
    done.splice(idx, 1)
    let list = document.getElementById("done-list")
    list.innerHTML = ""
    for (let i = 0; i < done.length; i++) {
        list.innerHTML += `<li>
                                <p>
                                ${done[i]}
                                <button onClick="hapusItem(event, ${i})">Hapus</button>
                                </p>
                            </li>
        `
    }
    // list("done-list").remove();
    // 
  }


  var nav = document.querySelector('nav');

      window.addEventListener('scroll', function() {
        if (window.pageYOffset > 30) {
          nav.classList.add('bg-light', 'shadow');
        } else {
          nav.classList.remove('bg-dark', 'shadow');
        }
      });