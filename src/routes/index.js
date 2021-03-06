const express= require('express');
const router = express.Router();
const passport=require('passport');
const control=require('../controllers/control');
const googlesign=require('../controllers/passport-setup');
router.get('/google',passport.authenticate('google',{
    scope:['profile']

}));
router.get('/',function(req,res)
{
    res.render('index',{
        errors:res.locals.errors,
        errors_msg:res.locals.errors_msg,
        isAuthenticated:false
    });
});
router.get('/index',function(req,res)
{
    res.render('index',{
        errors:res.locals.errors,
        errors_msg:res.locals.errors_msg,
        isAuthenticated:false
    });
});
router.get('/login',function(req,res)
{  
    res.render('login',{
        errors:res.locals.errors,
        errors_msg:res.locals.errors_msg,
        isAuthenticated:false
    });
});
  router.get('/google/redirect',passport.authenticate('google',{
      successRedirect:'/home'
  }));
router.get('/home',function(req,res)
{  
    res.render('home',{
        errors:res.locals.errors,
        errors_msg:res.locals.errors_msg,
        isAuthenticated:true
    });
    
});
router.get('/register',function(req,res)
{  res.render('register',{
    errors:res.locals.errors,
    errors_msg:res.locals.errors_msg,
    isAuthenticated:false
});
});

router.get('/logout',function(req,res)
{ 
    req.logout();
    res.redirect('login');
});


router.post('/register',control.postregister);

router.post('/login',control.postlogin);




module.exports = router;