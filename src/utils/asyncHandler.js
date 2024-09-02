const asyncHandler = (cb) => {
    return (req, res, next) => {
        console.log('Inside asyncHandler');
        
        cb(req, res, next).catch(next)
    }
}

module.exports = asyncHandler;