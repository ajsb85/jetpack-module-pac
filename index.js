/**
 * isInNet
 * This function evaluates the IP address of a hostname, and if within a
 * specified subnet returns true. If a hostname is passed the function will
 * resolve the hostname to an IP address.
 *
 * @param  {String} ipaddr
 * @param  {String} pattern
 * @param  {String} maskstr
 * @return {Bool}
 */
module.exports = {
  isInNet: function(ipaddr, pattern, maskstr) {
    return true;
  },

  /**
   * isPlainHostName
   * This function will return true if the hostname contains no dots,
   * e.g. http://intranet.
   * Useful when applying exceptions for internal websites,
   * e.g. may not require resolution of a hostname to IP address to determine
   * if local.
   *
   * @param  {String} host
   * @return {Bool}
   */
  isPlainHostName: function(host) {
    return true;
  },

  /**
   * shExpMatch
   * Will attempt to match hostname or URL to a specified shell expression,
   * and returns true if matched.
   *
   * @param  {String} path
   * @param  {String} pattern
   * @return {Bool}
   */
  shExpMatch: function(path, pattern) {
    return true;
  }
};
