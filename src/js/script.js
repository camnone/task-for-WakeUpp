
$(window).on("load", function () {
    $(".preloader").delay(200).fadeOut("slow");
});
window.addEventListener('load', () => {

    const showMenu = () => {
        const humburger = document.querySelector('.hamburger'),
            humburgreMenu = document.querySelector('.menu'),
            humburgerClose = document.querySelector('.menu__close'),
            humburgerActiveItem = document.querySelectorAll('.menu__link');
        humburgerActiveItem.forEach(item => {
            item.addEventListener('click', () => {
                humburgreMenu.classList.remove('active');
            });
        });

        humburger.addEventListener('click', () => {
            humburgreMenu.classList.add('active');
        });
        humburgerClose.addEventListener('click', (e) => {
            humburgreMenu.classList.remove('active');
        });
    };
    showMenu();

    const forms = () => {
        const ModalBtnSignIn = document.querySelectorAll('#signIn'),
            ModalBtnlognIn = document.querySelectorAll('#lognIn'),
            ModalSignIn = document.querySelector('#PopUp'),
            form = document.querySelectorAll('form'),
            overlay = document.querySelector('.overlay'),
            thanksModal = document.querySelector('#thanks'),
            modalLogin = document.querySelector('.modalLogin'),
            modalContent = document.querySelector('.modal__content');  

        function showModal(modal) {
            modal.classList.add('show');
            modal.classList.remove('hide');
        }

        function hideModal(modal) {
            modal.classList.add('hide');
            modal.classList.remove('show');
        }


        function modal (btnOpen,close,selector,modal,modalClose){
            btnOpen.forEach((item,i) => {
                item.addEventListener('click', (e) => {
                    showModal(modal);
                    hideModal(modalClose);
                });

            });

            close.addEventListener('click', (e) => {
                if ((e.target.classList.value == selector)) {
                    hideModal(modal);
                }
            });
        }
        modal(ModalBtnlognIn,ModalSignIn, 'modal show',ModalSignIn,modalLogin);
        modal(ModalBtnSignIn,modalLogin,'modal modalLogin show', modalLogin,ModalSignIn);

    };

    forms();
    const cookie = () => {

        const cookieBtn = document.querySelector('#button');
        const cookieModal = document.querySelector('#modal-cookie');

        if( cookieModal.classList.contains('accepted')){
            console.log(123);
            return 0;
        }else{
            if(localStorage.getItem("story")){
                cookieModal.classList.add('accepted');
            }else{
                cookieModal.classList.remove('accepted');
            }
        }
        
        cookieBtn.addEventListener('click',() => {
            console.log(1);
            localStorage.setItem("story","true");
            cookieModal.classList.add('accepted');
        });

    };
    cookie();
    const passsword = () => {
        const formPassword = document.querySelector('#password');
        console.log(123);
        formPassword.addEventListener('submit',(e) => {
            e.preventDefault();
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Wrong password or email!',
              })
            
        });
    }
    passsword();

});
