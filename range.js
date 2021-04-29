module.exports = (req, res, next) => {
    // set content range header value
    res.header('Content-Range', 'posts 0-20/20')
    next();
}