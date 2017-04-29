'use strict';

define('realworld-ember/tests/adapters/application.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - adapters/application.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass ESLint.\n');
  });
});
define('realworld-ember/tests/app.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - app.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint.\n');
  });
});
define('realworld-ember/tests/authenticators/conduit.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - authenticators/conduit.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticators/conduit.js should pass ESLint.\n');
  });
});
define('realworld-ember/tests/components/feed-item.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - components/feed-item.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/feed-item.js should pass ESLint.\n');
  });
});
define('realworld-ember/tests/controllers/application.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - controllers/application.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/application.js should pass ESLint.\n');
  });
});
define('realworld-ember/tests/controllers/home.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - controllers/home.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/home.js should pass ESLint.\n');
  });
});
define('realworld-ember/tests/controllers/login.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - controllers/login.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/login.js should pass ESLint.\n');
  });
});
define('realworld-ember/tests/controllers/register.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - controllers/register.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/register.js should pass ESLint.\n');
  });
});
define('realworld-ember/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('realworld-ember/tests/helpers/destroy-app.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - helpers/destroy-app.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint.\n');
  });
});
define('realworld-ember/tests/helpers/ember-simple-auth', ['exports', 'ember-simple-auth/authenticators/test'], function (exports, _emberSimpleAuthAuthenticatorsTest) {
  exports.authenticateSession = authenticateSession;
  exports.currentSession = currentSession;
  exports.invalidateSession = invalidateSession;

  var TEST_CONTAINER_KEY = 'authenticator:test';

  function ensureAuthenticator(app, container) {
    var authenticator = container.lookup(TEST_CONTAINER_KEY);
    if (!authenticator) {
      app.register(TEST_CONTAINER_KEY, _emberSimpleAuthAuthenticatorsTest['default']);
    }
  }

  function authenticateSession(app, sessionData) {
    var container = app.__container__;

    var session = container.lookup('service:session');
    ensureAuthenticator(app, container);
    session.authenticate(TEST_CONTAINER_KEY, sessionData);
    return wait();
  }

  function currentSession(app) {
    return app.__container__.lookup('service:session');
  }

  function invalidateSession(app) {
    var session = app.__container__.lookup('service:session');
    if (session.get('isAuthenticated')) {
      session.invalidate();
    }
    return wait();
  }
});
/* global wait */
define('realworld-ember/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'realworld-ember/tests/helpers/start-app', 'realworld-ember/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _realworldEmberTestsHelpersStartApp, _realworldEmberTestsHelpersDestroyApp) {
  var Promise = _ember['default'].RSVP.Promise;

  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _realworldEmberTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _realworldEmberTestsHelpersDestroyApp['default'])(_this.application);
        });
      }
    });
  };
});
define('realworld-ember/tests/helpers/module-for-acceptance.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - helpers/module-for-acceptance.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint.\n');
  });
});
define('realworld-ember/tests/helpers/resolver', ['exports', 'realworld-ember/resolver', 'realworld-ember/config/environment'], function (exports, _realworldEmberResolver, _realworldEmberConfigEnvironment) {

  var resolver = _realworldEmberResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _realworldEmberConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _realworldEmberConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('realworld-ember/tests/helpers/resolver.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - helpers/resolver.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass ESLint.\n');
  });
});
define('realworld-ember/tests/helpers/start-app', ['exports', 'ember', 'realworld-ember/app', 'realworld-ember/config/environment'], function (exports, _ember, _realworldEmberApp, _realworldEmberConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var attributes = _ember['default'].merge({}, _realworldEmberConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    return _ember['default'].run(function () {
      var application = _realworldEmberApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define('realworld-ember/tests/helpers/start-app.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - helpers/start-app.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint.\n');
  });
});
define('realworld-ember/tests/integration/components/feed-item-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('feed-item', 'Integration | Component | feed item', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': '+UFzHjZg',
      'block': '{"statements":[["append",["unknown",["feed-item"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');
  });
});
define('realworld-ember/tests/integration/components/feed-item-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - integration/components/feed-item-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/feed-item-test.js should pass ESLint.\n');
  });
});
define('realworld-ember/tests/models/article.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - models/article.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/article.js should pass ESLint.\n');
  });
});
define('realworld-ember/tests/models/user.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - models/user.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/user.js should pass ESLint.\n');
  });
});
define('realworld-ember/tests/realworld-ember/templates/application.template.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('TemplateLint - realworld-ember/templates/application.hbs');
  QUnit.test('should pass TemplateLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'realworld-ember/templates/application.hbs should pass TemplateLint.\n');
  });
});
define('realworld-ember/tests/realworld-ember/templates/article.template.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('TemplateLint - realworld-ember/templates/article.hbs');
  QUnit.test('should pass TemplateLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'realworld-ember/templates/article.hbs should pass TemplateLint.\n');
  });
});
define('realworld-ember/tests/realworld-ember/templates/components/feed-item.template.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('TemplateLint - realworld-ember/templates/components/feed-item.hbs');
  QUnit.test('should pass TemplateLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'realworld-ember/templates/components/feed-item.hbs should pass TemplateLint.\n');
  });
});
define('realworld-ember/tests/realworld-ember/templates/editor.template.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('TemplateLint - realworld-ember/templates/editor.hbs');
  QUnit.test('should pass TemplateLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'realworld-ember/templates/editor.hbs should pass TemplateLint.\n');
  });
});
define('realworld-ember/tests/realworld-ember/templates/editor/article.template.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('TemplateLint - realworld-ember/templates/editor/article.hbs');
  QUnit.test('should pass TemplateLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'realworld-ember/templates/editor/article.hbs should pass TemplateLint.\n');
  });
});
define('realworld-ember/tests/realworld-ember/templates/editor/new.template.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('TemplateLint - realworld-ember/templates/editor/new.hbs');
  QUnit.test('should pass TemplateLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'realworld-ember/templates/editor/new.hbs should pass TemplateLint.\n');
  });
});
define('realworld-ember/tests/realworld-ember/templates/home.template.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('TemplateLint - realworld-ember/templates/home.hbs');
  QUnit.test('should pass TemplateLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'realworld-ember/templates/home.hbs should pass TemplateLint.\n');
  });
});
define('realworld-ember/tests/realworld-ember/templates/login.template.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('TemplateLint - realworld-ember/templates/login.hbs');
  QUnit.test('should pass TemplateLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'realworld-ember/templates/login.hbs should pass TemplateLint.\n');
  });
});
define('realworld-ember/tests/realworld-ember/templates/profile.template.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('TemplateLint - realworld-ember/templates/profile.hbs');
  QUnit.test('should pass TemplateLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'realworld-ember/templates/profile.hbs should pass TemplateLint.\n');
  });
});
define('realworld-ember/tests/realworld-ember/templates/register.template.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('TemplateLint - realworld-ember/templates/register.hbs');
  QUnit.test('should pass TemplateLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'realworld-ember/templates/register.hbs should pass TemplateLint.\n');
  });
});
define('realworld-ember/tests/realworld-ember/templates/settings.template.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('TemplateLint - realworld-ember/templates/settings.hbs');
  QUnit.test('should pass TemplateLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'realworld-ember/templates/settings.hbs should pass TemplateLint.\n');
  });
});
define('realworld-ember/tests/resolver.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - resolver.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint.\n');
  });
});
define('realworld-ember/tests/router.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - router.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint.\n');
  });
});
define('realworld-ember/tests/routes/article.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - routes/article.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/article.js should pass ESLint.\n');
  });
});
define('realworld-ember/tests/routes/editor.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - routes/editor.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/editor.js should pass ESLint.\n');
  });
});
define('realworld-ember/tests/routes/editor/article.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - routes/editor/article.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/editor/article.js should pass ESLint.\n');
  });
});
define('realworld-ember/tests/routes/editor/new.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - routes/editor/new.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/editor/new.js should pass ESLint.\n');
  });
});
define('realworld-ember/tests/routes/home.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - routes/home.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/home.js should pass ESLint.\n');
  });
});
define('realworld-ember/tests/routes/login.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - routes/login.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/login.js should pass ESLint.\n');
  });
});
define('realworld-ember/tests/routes/profile.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - routes/profile.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/profile.js should pass ESLint.\n');
  });
});
define('realworld-ember/tests/routes/register.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - routes/register.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/register.js should pass ESLint.\n');
  });
});
define('realworld-ember/tests/routes/settings.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - routes/settings.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/settings.js should pass ESLint.\n');
  });
});
define('realworld-ember/tests/serializers/article.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - serializers/article.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/article.js should pass ESLint.\n');
  });
});
define('realworld-ember/tests/serializers/user.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - serializers/user.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/user.js should pass ESLint.\n');
  });
});
define('realworld-ember/tests/session-stores/application.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - session-stores/application.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'session-stores/application.js should pass ESLint.\n');
  });
});
define('realworld-ember/tests/test-helper', ['exports', 'realworld-ember/tests/helpers/resolver', 'ember-qunit'], function (exports, _realworldEmberTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_realworldEmberTestsHelpersResolver['default']);
});
define('realworld-ember/tests/test-helper.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - test-helper.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint.\n');
  });
});
define('realworld-ember/tests/unit/adapters/application-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('adapter:application', 'Unit | Adapter | application', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var adapter = this.subject();
    assert.ok(adapter);
  });
});
define('realworld-ember/tests/unit/adapters/application-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/adapters/application-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/application-test.js should pass ESLint.\n');
  });
});
define('realworld-ember/tests/unit/controllers/application-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:application', 'Unit | Controller | application', {
    needs: ['service:session']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('realworld-ember/tests/unit/controllers/application-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/controllers/application-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/application-test.js should pass ESLint.\n');
  });
});
define('realworld-ember/tests/unit/controllers/home-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:home', 'Unit | Controller | home', {
    needs: ['service:session']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('realworld-ember/tests/unit/controllers/home-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/controllers/home-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/home-test.js should pass ESLint.\n');
  });
});
define('realworld-ember/tests/unit/controllers/login-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:login', 'Unit | Controller | login', {
    needs: ['service:session']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('realworld-ember/tests/unit/controllers/login-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/controllers/login-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/login-test.js should pass ESLint.\n');
  });
});
define('realworld-ember/tests/unit/controllers/register-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:register', 'Unit | Controller | register', {
    needs: ['service:session']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('realworld-ember/tests/unit/controllers/register-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/controllers/register-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/register-test.js should pass ESLint.\n');
  });
});
define('realworld-ember/tests/unit/models/article-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('article', 'Unit | Model | article', {
    needs: ['model:user']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('realworld-ember/tests/unit/models/article-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/models/article-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/article-test.js should pass ESLint.\n');
  });
});
define('realworld-ember/tests/unit/models/user-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('user', 'Unit | Model | user', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('realworld-ember/tests/unit/models/user-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/models/user-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/user-test.js should pass ESLint.\n');
  });
});
define('realworld-ember/tests/unit/routes/article-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:article', 'Unit | Route | article', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('realworld-ember/tests/unit/routes/article-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/routes/article-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/article-test.js should pass ESLint.\n');
  });
});
define('realworld-ember/tests/unit/routes/editor-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:editor', 'Unit | Route | editor', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('realworld-ember/tests/unit/routes/editor-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/routes/editor-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/editor-test.js should pass ESLint.\n');
  });
});
define('realworld-ember/tests/unit/routes/editor/article-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:editor/article', 'Unit | Route | editor/article', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('realworld-ember/tests/unit/routes/editor/article-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/routes/editor/article-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/editor/article-test.js should pass ESLint.\n');
  });
});
define('realworld-ember/tests/unit/routes/editor/new-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:editor/new', 'Unit | Route | editor/new', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('realworld-ember/tests/unit/routes/editor/new-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/routes/editor/new-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/editor/new-test.js should pass ESLint.\n');
  });
});
define('realworld-ember/tests/unit/routes/home-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:home', 'Unit | Route | home', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('realworld-ember/tests/unit/routes/home-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/routes/home-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/home-test.js should pass ESLint.\n');
  });
});
define('realworld-ember/tests/unit/routes/login-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:login', 'Unit | Route | login', {
    needs: ['service:session']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('realworld-ember/tests/unit/routes/login-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/routes/login-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/login-test.js should pass ESLint.\n');
  });
});
define('realworld-ember/tests/unit/routes/profile-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:profile', 'Unit | Route | profile', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('realworld-ember/tests/unit/routes/profile-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/routes/profile-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/profile-test.js should pass ESLint.\n');
  });
});
define('realworld-ember/tests/unit/routes/register-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:register', 'Unit | Route | register', {
    needs: ['service:session']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('realworld-ember/tests/unit/routes/register-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/routes/register-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/register-test.js should pass ESLint.\n');
  });
});
define('realworld-ember/tests/unit/routes/settings-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:settings', 'Unit | Route | settings', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('realworld-ember/tests/unit/routes/settings-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/routes/settings-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/settings-test.js should pass ESLint.\n');
  });
});
define('realworld-ember/tests/unit/serializers/article-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('article', 'Unit | Serializer | article', {
    needs: ['serializer:article', 'model:user']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('realworld-ember/tests/unit/serializers/article-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/serializers/article-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/article-test.js should pass ESLint.\n');
  });
});
define('realworld-ember/tests/unit/serializers/user-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('user', 'Unit | Serializer | user', {
    // Specify the other units that are required for this test.
    needs: ['serializer:user']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('realworld-ember/tests/unit/serializers/user-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/serializers/user-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/user-test.js should pass ESLint.\n');
  });
});
require('realworld-ember/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
