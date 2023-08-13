# copy react dist files into spring backend static dir
REACTUI="frontends/react/zeroth"
SPRINGBE="backends/spring/zeroth"
BESTATIC=$SPRINGBE/src/main/resources/static
UIDIST=$REACTUI/dist

pushd $REACTUI
npm run build
popd

echo "deploying $UIDIST into $BESTATIC ..."
cp -v $UIDIST/*.* $BESTATIC

