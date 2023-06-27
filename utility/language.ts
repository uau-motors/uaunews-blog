export interface StringKeyObjectMap {
  [key: string]: string;
}

export interface KeyObjectMap {
  [key: string]: StringKeyObjectMap;
}

export const lang: KeyObjectMap = {
  en: {
    A_COLLECTION_OF: `A collection of`,
    BY: `by`,
    BY_THIS_AUTHOR: `by this author`,
    GOTO_FRONT_PAGE: `Go to the front page`,
    LATEST_POSTS: `Latest Posts`,
    IS_REQUIRED: `is required`,
    MIN_READ: `min read`,
    MORE_IN: `More in`,
    MORE_POSTS: `More posts`,
    MORE_POSTS_SM: `more posts`,
    NEXT: `Next`,
    NO_POSTS: `No posts`,
    PAGE_NOT_FOUND: `Page not found`,
    POST: `post`,
    POSTS: `posts`,
    PREVIOUS: `Previous`,
    READ: `Read`,
    SEE_ALL: `See all`,
    SUBSCRIBED_TO: `You've successfully subscribed to`,
    WEBSITE: `Website`,
    MULTIPLE_AUTHORS: `Multiple authors`,
    DARK_MODE: `DarkMode`,
    CHECK_YOUR_INBOX: `Check your inbox and click the link to confirm your subscription`,
    EMAIL: `Email`,
    ENTER_VALID_EMAIL: `Please enter a valid email address`,
    GREAT: `Great`,
    SUBSCRIBE: `Subscribe`,
    SUBSCRIBE_OVERLAY: `Stay up to date! Get all the latest & greatest posts delivered straight to your inbox`,
    SUBSCRIBE_SECTION: `Get the latest posts delivered right to your inbox`,
    SUBSCRIBE_TO: `Subscribe to`,
    SUBSCRIBED_FAILED: `Could not sign up! Invalid sign up link.`,
    YOUR_EMAIL: `youremail@example.com`,
    AT_LEAST: `at least`,
    CHARACTERS_LONG: `characters long`,
    CHARACTERS_OR_LESS: `characters or less`,
    EMAIL_ADDRESS: `Email Address`,
    EMAIL_IS_REQUIRED: `Email is required`,
    FULL_NAME: `Full Name`,
    FULL_NAME_REQUIRED: `Full Name is required`,
    FULL_NAME_MUST_BE: `Full Name must be`,
    INVALID_EMAIL_ADDRESS: `Invalid email address`,
    MESSAGE_MUST_BE: `Your message must be`,
    MESSAGE_SENT: `Thank you, your message has been sent!`,
    MESSAGE_TEXT_IS_REQUIRED: `A message text is required`,
    ONE_SECOND: `One second please...`,
    SENDING_FAILED: `Oops :-( sending failed. Error`,
    PLEASE_SELECT: `Please select...`,
    PLEASE_SELECT_SUBJECT: `Please select one subject`,
    SUBMIT: `Submit`,
    YOUR_MESSAGE: `Your message`,
    TABLE_OF_CONTENTS: `Table of Contents`
  }
};
