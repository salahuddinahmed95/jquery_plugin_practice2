(function(root, $) {

	'use strict';

	function Dropdown($elem, opts) {
		this.element = $elem;

		this.status = {
			isOpen: false,
			inProgress: false
		};

		this.prefixes = {
			button: 'button',
			panel: 'panel'
		};

		this.$elements = {
			buttons: null,
			panel: null
		};

		this.options = {
			animateSpeed: 150,
			animate: false
		};

		this.activateClass = 'active';

		this.initialize(opts);
	}

	Dropdown.prototype = {
		initialize: function(opts) {
			// Set options
			this.setOptions(opts);

			// Set elements
			this.setElements();

			// Bind event
			this.bindEvents();
		},

		setOptions: function(opts) {
			this.options = $.extend({}, this.options, opts || {});
		},

		setElements: function() {
			var self = this,
				prefixes = self.prefixes;

			var $elem = self.element,
				$elems = self.$elements;

			$elems.buttons = $elem.findDataElements(prefixes.button);
			$elems.panel = $elem.findDataElements(prefixes.panel);
		},

		bindEvents: function() {
			// Toggle event
			this.$elements.buttons.on('click', this.toggle.bind(this));

			$(document).on('click', this.noneTargetClose.bind(this));
		},

		toggle: function() {
			var inProgress = this.status.inProgress === true,
				isOpen = this.status.isOpen === true;

			if (!inProgress) {
				!isOpen ? this.activate() : this.deactivate();
			}
		},

		noneTargetClose: function(e) {
			var inProgress = this.status.inProgress === true,
				hasActivate = this.element.hasClass(this.activateClass),
				hasTargetNone = this.element.has(e.target).length === 0,
				isNoneTarget = hasActivate && hasTargetNone;

			if (!inProgress && isNoneTarget) {
				this.deactivate();
			}
		},

		activate: function() {
			this.element.addClass(this.activateClass);
			this.options.animate === 'fade' && this.fadeActivate();
			this.options.animate === 'slide' && this.slideActivate();

			this.status.isOpen = true;
		},

		deactivate: function() {
			this.element.removeClass(this.activateClass);
			this.options.animate === 'fade' && this.fadeDeactivate();
			this.options.animate === 'slide' && this.slideDeactivate();

			this.status.isOpen = false;
		},

		fadeActivate: function() {
			var self = this,
				$panel = self.$elements.panel;

			self.status.inProgress = true;

			$panel.css({
				display: 'block',
				opacity: 0
			}).animate({
				opacity: 1
			}, self.options.animateSpeed, function() {
				self.status.inProgress = false;
			});
		},

		fadeDeactivate: function() {
			var self = this,
				$panel = self.$elements.panel;

			self.status.inProgress = true;

			$panel.animate({
				opacity: 0
			}, self.options.animateSpeed, function() {
				$panel.removeAttr('style');
				self.status.inProgress = false;
			});
		},

		slideActivate: function() {
			var self = this,
				$panel = self.$elements.panel,
				panelHeight = $panel.outerHeight();

			self.status.inProgress = true;

			$panel.css({
				display: 'block',
				height: 0
			}).animate({
				height: panelHeight
			}, self.options.animateSpeed, function() {
				self.status.inProgress = false;
			});
		},

		slideDeactivate: function() {
			var self = this,
				$panel = self.$elements.panel;

			self.status.inProgress = true;

			$panel.animate({
				height: 0
			}, self.options.animateSpeed, function() {
				$panel.removeAttr('style');
				self.status.inProgress = false;
			});
		}
	};

	$.fn.extend({
		findDataElements: function(key) {
			return $(this).find('[data-dropdown=' + key + ']');
		},

		dropdown: function(opts) {
			return this.each(function() {
				var $this = $(this),
					instanceKey = 'dropdown';

				var instance = new Dropdown($this, opts);
				$this.data(instanceKey, instance);
			});
		}
	});
}(window, jQuery));