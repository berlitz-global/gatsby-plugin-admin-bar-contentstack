/* eslint-disable react/display-name */
const React = require("react");
const ContentstackAdminBar = require("./src/ContentstackAdminBar").default;

exports.wrapPageElement = ({ element, props }, pluginOptions) => {
  const { CONTENTSTACK_API_KEY } = pluginOptions;
  const { uid, locale, contentType } = props.pageContext;
  function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
  }
  const cookieProduction = getCookie('optly_berlitz_test')
  const cookieStaging = getCookie('optly_brrlitz_test')
  const displayBar = uid && locale && contentType && CONTENTSTACK_API_KEY && (cookieProduction || cookieStaging);
  const editEntryUrl = `https://app.contentstack.com/#!/stack/${CONTENTSTACK_API_KEY}/content-type/${contentType}/${locale}/entry/${uid}/edit`;

  return (
    <>
      {element}
      {displayBar && <ContentstackAdminBar editEntryUrl={editEntryUrl} />}
    </>
  );
};
