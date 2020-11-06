import styled from 'styled-components'

const PostPageStyles = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Playfair Display', Georgia, 'Times New Roman', serif;
  }

  .display-4 {
    font-size: 2.5rem;
  }
  @media (min-width: 768px) {
    .display-4 {
      font-size: 3rem;
    }
  }

  .nav-scroller {
    position: relative;
    z-index: 2;
    height: 2.75rem;
    overflow-y: hidden;
  }

  .nav-scroller .nav {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    padding-bottom: 1rem;
    margin-top: -1px;
    overflow-x: auto;
    text-align: center;
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;
  }

  .nav-scroller .nav-link {
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    font-size: 0.875rem;
  }

  .card-img-right {
    height: 100%;
    border-radius: 0 3px 3px 0;
  }

  .flex-auto {
    -ms-flex: 0 0 auto;
    -webkit-box-flex: 0;
    flex: 0 0 auto;
  }

  .h-250 {
    height: 250px;
  }
  @media (min-width: 768px) {
    .h-md-250 {
      height: 250px;
    }
  }

  .border-top {
    border-top: 1px solid #e5e5e5;
  }
  .border-bottom {
    border-bottom: 1px solid #e5e5e5;
  }

  .box-shadow {
    box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.05);
  }

  /*
 * Blog name and description
 */
  .blog-title {
    margin-bottom: 0;
    font-size: 2rem;
    font-weight: 400;
  }
  .blog-description {
    font-size: 1.1rem;
    color: #999;
  }

  @media (min-width: 40em) {
    .blog-title {
      font-size: 3.5rem;
    }
  }

  /* Pagination */
  .blog-pagination {
    margin-bottom: 4rem;
  }
  .blog-pagination > .btn {
    border-radius: 2rem;
  }

  /*
 * Blog posts
 */
  .blog-post {
    margin-bottom: 4rem;
  }
  .blog-post-title {
    margin-bottom: 0.25rem;
    font-size: 2.5rem;
  }
  .blog-post-meta {
    margin-bottom: 1.25rem;
    color: #999;
  }

  /*
 * Footer
 */
  .blog-footer {
    padding: 2.5rem 0;
    color: #999;
    text-align: center;
    background-color: #f9f9f9;
    border-top: 0.05rem solid #e5e5e5;
  }
  .blog-footer p:last-child {
    margin-bottom: 0;
  }
`
export default PostPageStyles