import React from 'react'
import { Card } from 'react-bootstrap';


const BrowseHelper = (props) => {

    let selectedGenre = Number(props.userSelectedGenre);
    let mediaTitle = "CODE";
    let mediaMotto = "Enter the Matrix!";
    let mediaImageSource = "/assets/code.jpg";

    switch (selectedGenre) {

        case 28:
            mediaTitle = "Action";
            mediaMotto = "Start your viewing session off with a bang.";
            mediaImageSource = "/assets/action.jpg";
            break;

        case 12:
            mediaTitle = "Adventure";
            mediaMotto = "Life is either a daring adventure or nothing.";
            mediaImageSource = "/assets/adventure.jpg";
            break;

        case 16:
            mediaTitle = "Animation";
            mediaMotto = "More Than A Fairy Tale!!";
            mediaImageSource = "/assets/animation.jpg";
            break;

        case 35:
            mediaTitle = "Comedy";
            mediaMotto = "Have a laugh at our expense";
            mediaImageSource = "/assets/comedy.jpg";
            break;

        case 80:
            mediaTitle = "Crime";
            mediaMotto = "Most people respect the badge. Everyone respects the gun.";
            mediaImageSource = "/assets/crime.jpg";
            break;


        case 99:
            mediaTitle = "Documentary";
            mediaMotto = "Pick a title so you can learn a bit more about the increbile world we live in";
            mediaImageSource = "/assets/documentary.jpg";
            break;

        case 18:
            mediaTitle = "Drama";
            mediaMotto = "All the world's a stage and most of us are desperately unrehearsed";
            mediaImageSource = "/assets/drama.jpg";
            break;

        case 10751:
            mediaTitle = "Family";
            mediaMotto = "Entertainment for all ages.";
            mediaImageSource = "/assets/family.jpg";
            break;


        case 14:
            mediaTitle = "Fantasy";
            mediaMotto = "Immerse yourself in a world far more magnificent than you could ever imagine.";
            mediaImageSource = "/assets/fantasy.jpg";
            break;


        case 36:
            mediaTitle = "History";
            mediaMotto = "History repeats itself, first as tragedy, second as farce.";
            mediaImageSource = "/assets/history.jpg";
            break;


        case 27:
            mediaTitle = "Horror";
            mediaMotto = "I See Dead People";
            mediaImageSource = "/assets/horror.jpg";
            break;


        case 10402:
            mediaTitle = "Music";
            mediaMotto = "Without music, life would be a mistake.";
            mediaImageSource = "/assets/music.jpg";
            break;


        case 9648:
            mediaTitle = "Mystery";
            mediaMotto = "Mystery creates wonder and wonder is the basis of man's desire to understand.";
            mediaImageSource = "/assets/mystery.jpg";
            break;


        case 10749:
            mediaTitle = "Romance";
            mediaMotto = "I promise. I will never let go, Jack. I’ll never let go.";
            mediaImageSource = "/assets/romance.jpg";
            break;


        case 878:
            mediaTitle = "Science Fiction";
            mediaMotto = "Never tell me the odds!";
            mediaImageSource = "/assets/scifi.jpg";
            break;


        case 10770:
            mediaTitle = "TV Movie";
            mediaMotto = "Some things were just meant to be enjoyed in the comfort of your own home";
            mediaImageSource = "/assets/tvmovie.jpg";
            break;


        case 53:
            mediaTitle = "Thriller";
            mediaMotto = "The sweetest smiles hold the darkest secrets...";
            mediaImageSource = "/assets/thriller.jpg";
            break;


        case 10752:
            mediaTitle = "War";
            mediaMotto = "To know your Enemy, you must become your Enemy.";
            mediaImageSource = "/assets/war.jpg";
            break;

        case 37:
            mediaTitle = "Western";
            mediaMotto = "Dyin' ain't much of a living, boy.";
            mediaImageSource = "/assets/western.jpg";
            break;

        default:
            break;
    }

    return (
        <div className="Browse">
            <>
                <Card className="bg-dark text-white">
                    <Card.Img id="BrowseHelperImage" src={mediaImageSource} width="600" height="250" alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title style={{ fontSize: 50 }}>{mediaTitle}</Card.Title>
                        <Card.Text>{mediaMotto}</Card.Text>
                    </Card.ImgOverlay>
                </Card>
            </>
        </div>
    );
}

export default BrowseHelper 