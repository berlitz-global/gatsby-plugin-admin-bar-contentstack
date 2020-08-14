/* eslint-disable react/display-name */
const React = require("react");
const ContentstackAdminBar = require("./src/ContentstackAdminBar").default;

exports.wrapPageElement = ({ element, props }, pluginOptions) => {
  const { CONTENTSTACK_API_KEY } = pluginOptions;
  const { uid, locale, contentType } = props.pageContext;
  const cookieValue = '; ' + document.cookie
  const cookieParts = cookieValue.split('; optly_berlitz_test=')
  const displayBar = uid && locale && contentType && CONTENTSTACK_API_KEY && cookieParts.length == 2;
  const editEntryUrl = `https://app.contentstack.com/#!/stack/${CONTENTSTACK_API_KEY}/content-type/${contentType}/${locale}/entry/${uid}/edit`;

  return (
    <>
      {element}
      {displayBar && <ContentstackAdminBar editEntryUrl={editEntryUrl} />}
    </>
  );
};
