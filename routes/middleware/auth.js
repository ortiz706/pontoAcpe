/**
 * Authentication Middleware
 */

module.exports = {
  isAuthenticated: (req, res, next) => {
    const { user } = req.session;
    if (user) {
      next();
    }
    else {
      req.flash('danger', 'É necessário fazer login antes de acessar essa página.');
      res.redirect('/restrict');
    }
  },
  isAdmin: (req, res, next) => {
    const { role } = req.session.user;
    if (role === 'Diretor(a) de Gestão de Pessoas' || role === 'Assessor(a) de Gestão de Pessoas' || role === 'Assistente Cpe') {
      next();
    }
    else {
      req.flash('danger', 'Você não tem permissão para acessar essa área.');
      res.redirect('/index');
    }
  }
};
