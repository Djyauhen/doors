//Массив галерей

const gallery = [
    {
        name: 'first-door',
        images: [
            {
                src: "./images/doors-gallery/first-door/1.png",
                width: 50,
                height: 50,
                caption: "Description 3"
            },
            {
                src: "./images/doors-gallery/first-door/2.png",
                width: 50,
                height: 50,
                caption: "Description 3"
            },
            {
                src: "./images/doors-gallery/first-door/3.png",
                width: 50,
                height: 50,
                caption: "Description 3"
            }
        ]
    },
    {
        name: 'second-door',
        images: [
            {
                src: "./images/doors-gallery/second-door/1.png",
                width: 50,
                height: 50,
                caption: "Description 3"
            },
            {
                src: "./images/doors-gallery/second-door/2.png",
                width: 50,
                height: 50,
                caption: "Description 3"
            },
            {
                src: "./images/doors-gallery/second-door/3.png",
                width: 50,
                height: 50,
                caption: "Description 3"
            }
        ]
    },
    {
        name: 'third-door',
        images: [
            {
                src: "./images/doors-gallery/third-door/1.png",
                width: 50,
                height: 50,
                caption: "Description 3"
            },
            {
                src: "./images/doors-gallery/third-door/2.png",
                width: 50,
                height: 50,
                caption: "Description 3"
            },
            {
                src: "./images/doors-gallery/third-door/3.png",
                width: 50,
                height: 50,
                caption: "Description 3"
            }
        ]
    },
    {
        name: 'four-door',
        images: [
            {
                src: "./images/doors-gallery/four-door/1.png",
                width: 50,
                height: 50,
                caption: "Description 3"
            },
            {
                src: "./images/doors-gallery/four-door/2.png",
                width: 50,
                height: 50,
                caption: "Description 3"
            },
            {
                src: "./images/doors-gallery/four-door/3.png",
                width: 50,
                height: 50,
                caption: "Description 3"
            }
        ]
    },
    {
        name: 'fifth-door',
        images: [
            {
                src: "./images/doors-gallery/fifth-door/1.png",
                width: 50,
                height: 50,
                caption: "Description 3"
            },
            {
                src: "./images/doors-gallery/fifth-door/2.png",
                width: 50,
                height: 50,
                caption: "Description 3"
            },
            {
                src: "./images/doors-gallery/fifth-door/3.png",
                width: 50,
                height: 50,
                caption: "Description 3"
            }
        ]
    },
    {
        name: 'six-door',
        images: [
            {
                src: "./images/doors-gallery/six-door/1.png",
                width: 50,
                height: 50,
                caption: "Description 3"
            },
            {
                src: "./images/doors-gallery/six-door/2.png",
                width: 50,
                height: 50,
                caption: "Description 3"
            },
            {
                src: "./images/doors-gallery/six-door/3.png",
                width: 50,
                height: 50,
                caption: "Description 3"
            }
        ]
    },
    {
        name: 'seven-door',
        images: [
            {
                src: "./images/doors-gallery/seven-door/1.png",
                width: 50,
                height: 50,
                caption: "Description 3"
            },
            {
                src: "./images/doors-gallery/seven-door/2.png",
                width: 50,
                height: 50,
                caption: "Description 3"
            },
            {
                src: "./images/doors-gallery/seven-door/3.png",
                width: 50,
                height: 50,
                caption: "Description 3"
            }
        ]
    },
    {
        name: 'eight-door',
        images: [
            {
                src: "./images/doors-gallery/eight-door/1.png",
                width: 50,
                height: 50,
                caption: "Description 3"
            },
            {
                src: "./images/doors-gallery/eight-door/2.png",
                width: 50,
                height: 50,
                caption: "Description 3"
            },
            {
                src: "./images/doors-gallery/eight-door/3.png",
                width: 50,
                height: 50,
                caption: "Description 3"
            }
        ]
    },
]

//Получаем нужную галерею

let doorPhotosButtons = document.querySelectorAll('.door-all-photos');
let doorMainImages = document.querySelectorAll('.door-main-image');


if (window.innerWidth < 1170) {
    openGallery(doorMainImages);
} else {
    openGallery(doorPhotosButtons);
}

function openGallery(buttons) {
    buttons.forEach(btn => {
        btn.onclick = () => {
            let btnName = btn.getAttribute('data-name');
            let galleryItem = gallery.find(item => item.name === btnName);
            const doorGallery = new Bizon(galleryItem);
            doorGallery.show();
        }
    })
}