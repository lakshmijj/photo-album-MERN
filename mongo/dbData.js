// Mongo shell commands here to seed MongoDB database
// ...
db.photoAlbum.drop();
db.photoAlbum.insert([
    {
        "id": "1",
        "title": "On the Beach",
        "caption": "On the beach on the labour day weekend.  September 2005",
        "source": "100_1245.jpg",
        "comments": [
        {
        "comment": "And another comment added!",
        "author": "Sean Morrow"
        },
        {
        "comment": "For testing purposes of course ;)",
        "author": "This is a new comment added here!"
        }
        ]
        },
        {
        "id": "2",
        "title": "My Little nephew",
        "caption": "Clowning around at my cousin's wedding reception",
        "source": "IMG_0258.jpg",
        "comments": [
        {
        "comment": "Josh was here!",
        "author": "Some guy"
        }
        ]
        },
        {
        "id": "3",
        "title": "Bugs bugs bugs",
        "caption": "Befriending bugs",
        "source": "IMG_6085.jpg",
        "comments": [
        {
        "comment": "and another comment here",
        "author": "another guy"
        },
        {
        "comment": "Some comments added to this picture :P",
        "author": "Some Guy"
        }
        ]
        },
        {
        "id": "4",
        "title": "Portage it!",
        "caption": "Portaging in algonquin park, Ontario, July 2004",
        "source": "IMG_6087.jpg",
        "comments": []
        },
        {
        "id": "5",
        "title": "Dance Moves",
        "caption": "Showing off the skills from the latest hip hop dance lesson",
        "source": "HPIM0259.jpg",
        "comments": [
        {
        "comment": "Take this picture down now!",
        "author": "Annonymous"
        }
        ]
        },
        {
        "id": "6",
        "title": "The Cat",
        "caption": "Get off my damn chair!",
        "source": "cat.jpg",
        "comments": []
        },
        {
        "id": "7",
        "title": "De-weeding the barn",
        "caption": "Removing the decorative ivy from our newly purchased barn.",
        "source": "image6.jpg",
        "comments": []
        },
        {
        "id": "10",
        "title": "Darcy in the weeds",
        "caption": "Darcy at age 2",
        "source": "image7.jpg",
        "comments": []
        },
        {
        "id": "11",
        "title": "Lego Star Destroyer",
        "caption": "Best. Gift. Ever.",
        "source": "starDestroyer.jpg",
        "comments": []
        },
        {
        "id": "14",
        "title": "Darcy at the beach",
        "caption": "Darcy at the beach",
        "source": "image8.jpg",
        "comments": []
        },
        {
        "id": "15",
        "title": "Web Student Wellness!",
        "caption": "Web student wellness in 2009",
        "source": "wellness01.jpg",
        "comments": [
        {
        "comment": "first posting!",
        "author": "testing dude"
        }
        ]
        }
])
