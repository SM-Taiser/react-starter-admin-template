import Swal from 'sweetalert';
export var rootUrl = 'https://10.100.17.238/FairEx/api/v1/';

export var authUser = JSON.parse(localStorage.getItem('user'));

export function alertMessage(type,message) {
    // const Toast = Swal.mixin({
    //     toast: true,
    //     position: 'top-end',
    //     showConfirmButton: false,
    //     timer: 3000,
    //     timerProgressBar: true,
    //     onOpen: (toast) => {
    //       toast.addEventListener('mouseenter', Swal.stopTimer)
    //       toast.addEventListener('mouseleave', Swal.resumeTimer)
    //     }
    //   })
      
    //   Toast.fire({
    //     icon: type,
    //     title: message
    //   })
      if(type == 'success') {
        Swal({
          title: "Good job!",
          text: message,
          icon: type,
        });
      }else if(type == 'error'){
        Swal({
          title: "Fail!",
          text: message,
          icon: type,
        });
      }
      
}

export function deleteMessage(message){
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.value) {
          Swal.fire(
            'Deleted!' , 
             message,
            'success'
          )
        }
      })
      
}

export function errorMessage(message){
  // Swal.fire({
  //     title: 'Are you sure?',
  //     text: "You won't be able to revert this!",
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonColor: '#3085d6',
  //     cancelButtonColor: '#d33',
  //     confirmButtonText: 'Yes, delete it!'
  //   }).then((result) => {
  //     if (result.value) {
  //       Swal.fire(
  //         'Deleted!' , 
  //          message,
  //         'success'
  //       )
  //     }
  //   })
  Swal({
    title: "Fail!",
    text: message,
    icon: "error",
  });
    
}

export function tableSearch() {
  var input, filter, found, table, tr, td, i, j;
  input = document.getElementById("searchInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 1; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td");
      for (j = 0; j < td.length; j++) {
          if (td[j].innerHTML.toUpperCase().indexOf(filter) > -1) {
              found = true;
          }
      }
      if (found) {
          tr[i].style.display = "";
          found = false;
      } else {
          tr[i].style.display = "none";
      }
  }
}

    



