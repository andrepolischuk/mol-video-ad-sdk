import parseMacro from './parseMacro';

/**
 * Creates a tracking image with the passed URL macro.
 *
 * @ignore
 * @type tracker
 * @param {string} URLMacro - URL Macro that need to be tracked.
 * @param {Object} data - Data Object with the macros's variables.
 * @returns {HTMLImageElement} - Image element whose source is the parsed URL Macro.
 * @static
 */
const pixelTracker = (URLMacro, data) => {
  const img = new Image();

  img.src = parseMacro(URLMacro, data);

  return img;
};

export default pixelTracker;

