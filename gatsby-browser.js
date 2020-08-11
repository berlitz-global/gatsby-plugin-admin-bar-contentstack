/* eslint-disable react/display-name */
const React = require("react");
const ContentstackAdminBar = require("./src/ContentstackAdminBar").default;

exports.wrapPageElement = ({ element, props }, pluginOptions) => {
  const { CONTENTSTACK_API_KEY } = pluginOptions;
  const { uid, locale, contentType } = props.pageContext;
  const cookieValue = '; ' + document.cookie
  const cookieParts = cookieValue.split('; optimizely_signed_in=')
    if (cookieParts.length == 2)
      return cookieParts.pop().split(';').shift()
  const displayBar = uid && locale && contentType && CONTENTSTACK_API_KEY && cookieParts;
  const editEntryUrl = `https://app.contentstack.com/#!/stack/${CONTENTSTACK_API_KEY}/content-type/${contentType}/${locale}/entry/${uid}/edit`;

  return (
    <>
      {element}
      {displayBar && <ContentstackAdminBar editEntryUrl={editEntryUrl} />}
    </>
  );
};
