import PostSummaryList from "../PostSummaryList/index.js";

const HomeScreenComponent = () => {
    return(`
            <input type="search" class="rounded-pill col-10 border-light " placeholder="Search Twitter" >
            <i class="col-1 text-center fa-solid fa-gear"></i>
            <ul class="nav nav-tabs mt-2 ">
                <li class="nav-item">
                    <a class="nav-link active" href="#">For you</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" >Sports</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link d-sm-none d-md-block" href="#">Entertainment</a>
                </li>
            </ul>


            <div class="card col-12 mt-2 " style="height: 50%">
                <img class="card-img-top rounded-0"  src="../../images/starship.jpg" height="100%" alt="Card image cap">

<!--                    https://stackoverflow.com/questions/45836381/how-do-i-position-text-on-the-bottom-of-an-image-overlay-in-a-card-in-bootstrap-->
                    <h1 class="card-img-overlay h-100 d-flex flex-column justify-content-end text-white fw-bolder  ">SpaceX's Starship</h1>
        </div>


         
    `);
}
export default HomeScreenComponent;
