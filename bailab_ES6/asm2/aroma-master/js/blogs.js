async function getPosts() {
    let url = 'https://jsonplaceholder.typicode.com/posts';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}
async function getComments() {
    let url = 'https://jsonplaceholder.typicode.com/comments';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}
async function renderPosts(y) {
    var numberEnds = 8;
    let data = await getPosts();
    
    var showPosts = "";   
        for(var i=(numberEnds*y)-8; i<numberEnds*y; i++){  
            showPosts +=`
            <div class="media post_item">
                <img src="img/blog/popular-post/post1.jpg" alt="post">
                <div class="media-body">
                    <a onclick="showPost(${data[i].id})">
                        <h3 class ="lists">${data[i].title}</h3>
                    </a>
                    <p>02 Hours ago</p>
                </div>
            </div>`
        };
        
        document.getElementById('showposts').innerHTML = showPosts;

        // $(document).ready(function () {
        //     var show_per_page = 5;
        //     var number_of_items = $('#showposts').children().size();
        //     var number_of_pages = Math.ceil(number_of_items / show_per_page);
        //     $('#current_page').val(0);
        //     $('#show_per_page').val(show_per_page);
        //     var navigation_html = '<a class="previous_link" href="javascript:previous();">«</a>';
        //     var current_link = 0;
        //     while (number_of_pages > current_link) {
        //         navigation_html += '<a class="page_link" href="javascript:go_to_page(' + current_link + ')" longdesc="' + current_link + '">' + (current_link + 1) + '</a>';
        //         current_link++;
        //     }
        //     navigation_html += '<a class="next_link" href="javascript:next();">»</a>';
        //     $('#perpages').html(navigation_html);
        //     $('#perpages .page_link:first').addClass('active_page');
        //     $('#showposts').children().css('display', 'none');
        //     $('#showposts').children().slice(0, show_per_page).css('display', 'block');
        // });


        // in ra phân trang jquery

        // $(document).ready(function () {

        //     var show_per_page = 5;
        //     var number_of_items = $('#detailsPost').children().size();
        //     var number_of_pages = Math.ceil(number_of_items / show_per_page);

        //     $('#current_page').val(0);
        //     $('#show_per_page').val(show_per_page);

        //     var navigation_html = '<a class="previous_link" href="javascript:previous();">«</a>';

        //     var current_link = 0;
        //     while (number_of_pages > current_link) {
        //         navigation_html += '<a class="page_link" href="javascript:go_to_page(' + current_link + ')" longdesc="' + current_link + '">' + (current_link + 1) + '</a>';
        //         current_link++;
        //     }

        //     navigation_html += '<a class="next_link" href="javascript:next();">»</a>';

        //     $('#perpages').html(navigation_html);

        //     $('#perpages .page_link:first').addClass('active_page');

        //     $('#detailsPost').children().css('display', 'none');

        //     $('#detailsPost').children().slice(0, show_per_page).css('display', 'block');

        // });

        // function previous() {

        //     new_page = parseInt($('#current_page').val()) - 1;
        //     if ($('.active_page').prev('.page_link').length == true) {
        //         go_to_page(new_page);
        //     }

        // }

        // function next() {
        //     new_page = parseInt($('#current_page').val()) + 1;
        //     //if there is an item after the current active link run the function
        //     if ($('.active_page').next('.page_link').length == true) {
        //         go_to_page(new_page);
        //     }

        // }
        // function go_to_page(page_num) {
        //     var show_per_page = parseInt($('#show_per_page').val());

        //     start_from = page_num * show_per_page;

        //     end_on = start_from + show_per_page;

        //     $('#condetailsPosttent').children().css('display', 'none').slice(start_from, end_on).css('display', 'block');

        //     $('.page_link[longdesc=' + page_num + ']').addClass('active_page').siblings('.active_page').removeClass('active_page');

        //     $('#current_page').val(page_num);
        // }

        // in ra phân trang 
        // in ra phân traNG mặc định
        
        let perPagesNumber = data.length /8 ;
        var perPages = Math.ceil(perPagesNumber);
        var textPages = "";
        textPages +=`
            <li class="page-item">
                <a href="#" class="page-link"><</a>
            </li>
            `;
        for(let i = 1; i <= 3; i++){
                textPages +=`
                <li class="page-item">
                    <a onclick="renderPosts(${i})" class="page-link">${i}</a>
                </li>`;
            };
        textPages +=`
            <li class="page-item">
                <a href="#" class="page-link">...</a>
            </li>
            `;
        for(let z = perPages; z <= perPages; z++){
                textPages +=`
                    <li class="page-item">
                        <a href="#" class="page-link">${z}</a>
                    </li>`;
                };
        
        textPages +=`
            <li class="page-item">
                <a href="#" class="page-link">></a>
            </li>
            `;
        document.getElementById('perpages').innerHTML = textPages;
        console.log(perPages);
    
}   
renderPosts(1);

async function showPost(x) {
    let data = await getPosts();
    let postItem = data.filter((element) => {
        return element.id == x;
    });
    let detailsPost = "";
    let idPost = "";
    // detailsPost = `
    //     <div class="single-post row">
    //                 <!-- <div class="col-lg-12">
    //                     <div class="feature-img">
    //                         <img class="img-fluid" src="img/blog/feature-img1.jpg" alt="">
    //                     </div>
    //                 </div> -->
    //                 <div class="col-lg-3  col-md-3">
    //                     <div class="blog_info text-right">
    //                         <div class="post_tag">
    //                             <a href="#">Food,</a>
    //                             <a class="active" href="#">Technology,</a>
    //                             <a href="#">Politics,</a>
    //                             <a href="#">Lifestyle</a>
    //                         </div>
    //                         <ul class="blog_meta list">
    //                             <li>
    //                                 <a href="#">Mark wiens
    //                                     <i class="lnr lnr-user"></i>
    //                                 </a>
    //                             </li>
    //                             <li>
    //                                 <a href="#">12 Dec, 2017
    //                                     <i class="lnr lnr-calendar-full"></i>
    //                                 </a>
    //                             </li>
    //                             <li>
    //                                 <a href="#">1.2M Views
    //                                     <i class="lnr lnr-eye"></i>
    //                                 </a>
    //                             </li>
    //                             <li>
    //                                 <a href="#">06 Comments
    //                                     <i class="lnr lnr-bubble"></i>
    //                                 </a>
    //                             </li>
    //                         </ul>
    //                         <ul class="social-links">
    //                             <li>
    //                                 <a href="#">
    //                                     <i class="fab fa-facebook-f"></i>
    //                                 </a>
    //                             </li>
    //                             <li>
    //                                 <a href="#">
    //                                     <i class="fab fa-twitter"></i>
    //                                 </a>
    //                             </li>
    //                             <li>
    //                                 <a href="#">
    //                                     <i class="fab fa-github"></i>
    //                                 </a>
    //                             </li>
    //                             <li>
    //                                 <a href="#">
    //                                     <i class="fab fa-behance"></i>
    //                                 </a>
    //                             </li>
    //                         </ul>
    //                     </div>
    //                 </div>
    //                 <div class="col-lg-9 col-md-9 blog_details">
    //                     <h2>${data[0]["title"]}</h2>
    //                     <p class="excert">${data[0]["body"]}</p>
    //                 </div>						
    //             </div>					
    //             <div class="comments-area">
    //                 <h4 id"numberCm">5 Bình luận</h4>
    //                 <div id="showComments">
                        
    //                 </div>						
    //             <div class="comment-form">
    //                 <h4>Leave a Reply</h4>
    //                 <form>
                        
    //                     <div class="form-group">
    //                         <textarea class="form-control mb-10" rows="5" name="message" placeholder="Messege"
    //                             onfocus="this.placeholder = ''" onblur="this.placeholder = 'Messege'"
    //                             required=""></textarea>
    //                     </div>
    //                     <a href="#" class="button button-postComment button--active">Post Comment</a>
    //                 </form>
    //             </div>
    // `;
    postItem.forEach(post => {
        idPost = post.id;
        let htmlSegment = `<div class="single-post row">
        <div class="col-lg-3  col-md-3">
            <div class="blog_info text-right">
                <div class="post_tag">
                    <a href="#">Food,</a>
                    <a class="active" href="#">Technology,</a>
                    <a href="#">Politics,</a>
                    <a href="#">Lifestyle</a>
                </div>
                <ul class="blog_meta list">
                    <li>
                        <a href="#">Mark wiens
                            <i class="lnr lnr-user"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">12 Dec, 2017
                            <i class="lnr lnr-calendar-full"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">1.2M Views
                            <i class="lnr lnr-eye"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">06 Comments
                            <i class="lnr lnr-bubble"></i>
                        </a>
                    </li>
                </ul>
                <ul class="social-links">
                    <li>
                        <a href="#">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="fab fa-twitter"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="fab fa-github"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="fab fa-behance"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="col-lg-9 col-md-9 blog_details">
            <h2>${post.title}</h2>
            <p class="excert">${post.body}</p>
        </div>						
    </div>					
    <div class="comments-area">
        <h4 id"numberCm">5 Bình luận</h4>
        <div id="showComments">
            
        </div>						
    <div class="comment-form">
        <h4>Leave a Reply</h4>
        <form>
            
            <div class="form-group">
                <textarea class="form-control mb-10" rows="5" name="message" placeholder="Messege"
                    onfocus="this.placeholder = ''" onblur="this.placeholder = 'Messege'"
                    required=""></textarea>
            </div>
            <a href="#" class="button button-postComment button--active">Post Comment</a>
        </form>
    </div>`;
        detailsPost += htmlSegment;

    });
    document.getElementById('detailsPost').innerHTML = detailsPost;
    // async function renderComments() {
        let dataComments = await getComments();
        var filteredComment = dataComments.filter(function (item) {
            return item.postId == idPost;
        });
        // let numberComment = "9";
        // document.getElementById('numberCm').innerHTML === numberComment;
        // console.log(filteredComment.length);
        var listComments = "";
        listComments = filteredComment.map(itemComment =>  {
            return `
            <div class="comment-list">
                <div class="single-comment justify-content-between d-flex">
                    <div class="user justify-content-between d-flex">
                        <div class="thumb">
                            <img src="img/blog/c1.jpg" alt="">
                        </div>
                        <div class="desc">
                            <h5>
                                <a href="#">${itemComment.name}</a>
                            </h5>
                            <p class="date">December 4, 2017 at 3:12 pm </p>
                            <p class="comment">${itemComment.body}</p>
                        </div>
                    </div>
                    <div class="reply-btn">
                        <a href="#" class="btn-reply text-uppercase">reply</a>
                    </div>
                </div>
            </div>`;
    
        });
        document.getElementById('showComments').innerHTML = listComments.join("");     
    }
    showPost(1);
// renderComments();
// }


// async function renderComments() {
//     let dataComments = await getComments();
//     var filteredComment = dataComments.filter(function (item) {
//         return item.postId == 1;
//     });
//     // let numberComment = "9";
//     // document.getElementById('numberCm').innerHTML === numberComment;
//     // console.log(filteredComment.length);
//     var listComments = "";
//     listComments = filteredComment.map(itemComment =>  {
//         return `
//         <div class="comment-list">
//             <div class="single-comment justify-content-between d-flex">
//                 <div class="user justify-content-between d-flex">
//                     <div class="thumb">
//                         <img src="img/blog/c1.jpg" alt="">
//                     </div>
//                     <div class="desc">
//                         <h5>
//                             <a href="#">${itemComment.name}</a>
//                         </h5>
//                         <p class="date">December 4, 2017 at 3:12 pm </p>
//                         <p class="comment">${itemComment.body}</p>
//                     </div>
//                 </div>
//                 <div class="reply-btn">
//                     <a href="#" class="btn-reply text-uppercase">reply</a>
//                 </div>
//             </div>
//         </div>`;

//     });
//     document.getElementById('showComments').innerHTML = listComments.join("");
    
// }

    // let file = "https://jsonplaceholder.typicode.com/comments"
    // fetch(file)
    //     .then(res => res.json())
    //     .then(dataComment => {
    //         var filteredComment = dataComment.filter(function (item) {
    //             return item.postId == 1;
    //         });
    //         // let numberComment = "9";
    //         // document.getElementById('numberCm').innerHTML === numberComment;
    //         console.log(filteredComment.length);
    //         var listComments = "";
    //         listComments = filteredComment.map(itemComment =>  {
    //             return `
    //             <div class="comment-list">
    //                 <div class="single-comment justify-content-between d-flex">
    //                     <div class="user justify-content-between d-flex">
    //                         <div class="thumb">
    //                             <img src="img/blog/c1.jpg" alt="">
    //                         </div>
    //                         <div class="desc">
    //                             <h5>
    //                                 <a href="#">${itemComment.name}</a>
    //                             </h5>
    //                             <p class="date">December 4, 2017 at 3:12 pm </p>
    //                             <p class="comment">${itemComment.body}</p>
    //                         </div>
    //                     </div>
    //                     <div class="reply-btn">
    //                         <a href="#" class="btn-reply text-uppercase">reply</a>
    //                     </div>
    //                 </div>
    //             </div>`;

    //         });
    //         document.getElementById('showComments').innerHTML = listComments.join("");
            
    //     });
    
//     giới hạn kí tự jquery
//     $(function(){
//         $.fn.limit = function($n){
//             this.each(function(){
//                 var allText   = $(this).html();
//                 var tLength   = $(this).html().length;
//                 var startText = allText.slice(0,$n);
//                 if(tLength >= $n){
//                     $(this).html(startText+'...');
//                 }else {
//                     $(this).html(startText);
//                 };
//             });
            
//             return this;
//         }
//         $('.lists').limit(20);
//     });
// .then(x => x.text())
// .then(y => document.getElementById("demo").innerHTML = y);
