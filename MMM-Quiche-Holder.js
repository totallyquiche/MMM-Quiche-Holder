Module.register('MMM-Quiche-Holder', {
    defaults: {
        height: 150,
        width: 150,
        rounded: false,
        borderRadius: 25
    },
    getDom: function () {
        var wrapper = document.createElement('div');

        wrapper.innerHTML =
            '<img ' +
                'src="https://quiche-holder.briandady.com/' + this.config.height + '/' + this.config.width + '" ' +
                (this.config.rounded ? 'style="border-radius: ' + this.config.borderRadius + 'px" ' : ' ') +
            '>';

        return wrapper;
    }
});