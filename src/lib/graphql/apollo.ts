import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

/** Input to change a bot status. */
export type AdminBotChangeStatusInput = {
  /** The ID of the bot. */
  id: Scalars['ID']['input'];
  /** The reason for the status change. */
  reason?: InputMaybe<Scalars['String']['input']>;
  /** The new status. */
  status: BotStatus;
};

/** Input to set the permissions for a user. */
export type AdminUserPermissionsInput = {
  /** The ID of the user. */
  id: Scalars['ID']['input'];
  /** The new permissions to be set for the user. */
  permissions: Array<UserPermissionsFlags>;
};

/** Information related to a user session. */
export type AuthSessionObject = {
  __typename?: 'AuthSessionObject';
  /** The access token provided by Discord. */
  access_token: Scalars['String']['output'];
  /** The expiration time of the access token in seconds. */
  expires_in: Scalars['Float']['output'];
  /** The refresh token provided by Discord. */
  refresh_token: Scalars['String']['output'];
};

/** The authenticated user object */
export type AuthUserObject = {
  __typename?: 'AuthUserObject';
  /** The avatar URL of the user */
  avatar?: Maybe<Scalars['String']['output']>;
  /** The banner URL of the user */
  banner?: Maybe<Scalars['String']['output']>;
  /** The biography of the user */
  bio?: Maybe<Scalars['String']['output']>;
  /** The creation date of the user */
  createdAt: Scalars['String']['output'];
  /** The unique identifier of the user */
  id: Scalars['ID']['output'];
  /** The permissions of the user */
  permissions: Scalars['Int']['output'];
  /** Fetches the sessions of the authenticated user */
  sessions: Array<AuthUserSessionObject>;
  /** The last update date of the user */
  updatedAt: Scalars['String']['output'];
  /** The username of the user */
  username: Scalars['String']['output'];
};

/** The authentication session object */
export type AuthUserSessionObject = {
  __typename?: 'AuthUserSessionObject';
  /** Hashed access token */
  accessToken: Scalars['String']['output'];
  /** Created at timestamp */
  createdAt: Scalars['String']['output'];
  /** Hashed refresh token */
  refreshToken: Scalars['String']['output'];
  /** Updated at timestamp */
  updatedAt: Scalars['String']['output'];
};

/** The input of the user update mutation */
export type AuthUserUpdateInput = {
  /** The banner of the user. */
  banner?: InputMaybe<Scalars['String']['input']>;
  /** The user bio */
  bio?: InputMaybe<Scalars['String']['input']>;
};

/** A canVote object for a bot */
export type BotCanVoteObject = {
  __typename?: 'BotCanVoteObject';
  /** The bot ID of the vote */
  canVote: Scalars['Boolean']['output'];
  /** The expiration date of the vote */
  expires?: Maybe<Scalars['Float']['output']>;
};

/** A bot object. */
export type BotObject = {
  __typename?: 'BotObject';
  /** The avatar image URL of the bot. */
  avatar?: Maybe<Scalars['String']['output']>;
  /** The banner image URL of the bot. */
  banner?: Maybe<Scalars['String']['output']>;
  /** Indicates whether the bot is certified. */
  certified: Scalars['Boolean']['output'];
  /** The creation date of the bot. */
  createdAt: Scalars['String']['output'];
  /** The detailed description of the bot. */
  description: Scalars['String']['output'];
  /** The GitHub repository URL of the bot. */
  github?: Maybe<Scalars['String']['output']>;
  /** The number of guilds (servers) the bot is currently in. */
  guildCount: Scalars['Int']['output'];
  /** The unique identifier of the bot. */
  id: Scalars['ID']['output'];
  /** The source from which the bot was imported. */
  importedFrom?: Maybe<Scalars['String']['output']>;
  /** The invite link for adding the bot to a server. */
  inviteLink?: Maybe<Scalars['String']['output']>;
  /** The username of the bot. */
  name: Scalars['String']['output'];
  /** Gets a list of permissions that the bot owners have. */
  ownerPermissions: Array<BotOwnerPermissionsObject>;
  /** The owners of the bot. */
  owners: Array<BotOwnerObject>;
  /** The command prefix used by the bot. */
  prefix?: Maybe<Scalars['String']['output']>;
  /** The short description of the bot. */
  shortDescription: Scalars['String']['output'];
  /** The current status of the bot. */
  status: BotStatus;
  /** The support server or community for the bot. */
  supportServer?: Maybe<Scalars['String']['output']>;
  /** The tags associated with the bot. */
  tags: Array<BotTagObject>;
  /** The last update date of the bot. */
  updatedAt: Scalars['String']['output'];
  /** The votes for the bot. */
  votes: BotVoteObjectConnection;
  /** The webhook for the bot. */
  webhook: WebhookObject;
  /** The official website of the bot. */
  website?: Maybe<Scalars['String']['output']>;
};


/** A bot object. */
export type BotObjectVotesArgs = {
  pagination?: InputMaybe<PaginationInput>;
};

/** Represents the badges of the owner. */
export type BotOwnerBadgeObject = {
  __typename?: 'BotOwnerBadgeObject';
  /** The creation date of the badge. */
  createdAt: Scalars['String']['output'];
  /** The description of the badge. */
  description: Scalars['String']['output'];
  /** The display name of the badge. */
  displayName: Scalars['String']['output'];
  /** The icon of the badge. */
  icon: Scalars['String']['output'];
  /** The name of the badge. */
  name: Scalars['String']['output'];
  /** The last update date of the badge. */
  updatedAt: Scalars['String']['output'];
};

/** The bot owner object */
export type BotOwnerObject = {
  __typename?: 'BotOwnerObject';
  /** The avatar URL of the user */
  avatar?: Maybe<Scalars['String']['output']>;
  /** The badges that the owner has. */
  badges: Array<BotOwnerBadgeObject>;
  /** The banner URL of the user */
  banner?: Maybe<Scalars['String']['output']>;
  /** The biography of the user */
  bio?: Maybe<Scalars['String']['output']>;
  /** The bots that the owner owns. */
  bots: Array<BotObject>;
  /** The unique identifier of the user */
  id: Scalars['ID']['output'];
  /** The username of the user */
  username: Scalars['String']['output'];
};

/** The permissions of the bot owner. */
export type BotOwnerPermissionsObject = {
  __typename?: 'BotOwnerPermissionsObject';
  /** The unique identifier of the owner. */
  id: Scalars['ID']['output'];
  /** The permissions of the owner. */
  permissions: Scalars['Int']['output'];
};

/** The status of a bot on the platform. */
export enum BotStatus {
  /** The bot has been successfully approved. */
  Approved = 'APPROVED',
  /** The bot has been rejected by the platform. */
  Denied = 'DENIED',
  /** The bot is awaiting approval from the platform. */
  Pending = 'PENDING'
}

/** A tag object. */
export type BotTagObject = {
  __typename?: 'BotTagObject';
  /** The bots that have this tag. */
  bots: BotsConnection;
  /** The date the tag was created. */
  createdAt: Scalars['String']['output'];
  /** The display name of the tag. */
  displayName: Scalars['String']['output'];
  /** The name of the tag. */
  id: Scalars['ID']['output'];
};


/** A tag object. */
export type BotTagObjectBotsArgs = {
  pagination?: InputMaybe<PaginationInput>;
};

/** A connection of tags. */
export type BotTagsConnection = {
  __typename?: 'BotTagsConnection';
  /** The paginated items. */
  nodes?: Maybe<Array<BotTagObject>>;
  /** The page information. */
  pageInfo: PageInfo;
  /** The total count of items. */
  totalCount: Scalars['Int']['output'];
  /** The total amount of pages. */
  totalPages: Scalars['Int']['output'];
};

/** The input type for creating a vote */
export type BotVoteCreateInput = {
  /** The bot ID of the vote */
  id: Scalars['String']['input'];
};

/** A vote object for a bot */
export type BotVoteObject = {
  __typename?: 'BotVoteObject';
  /** The bot ID of the vote */
  botId: Scalars['String']['output'];
  /** The expiration date of the vote */
  expires: Scalars['Float']['output'];
  /** The ID of the vote */
  id: Scalars['ID']['output'];
  /** The user ID of the vote */
  userId: Scalars['String']['output'];
};

/** A paginated list of vote objects */
export type BotVoteObjectConnection = {
  __typename?: 'BotVoteObjectConnection';
  /** The paginated items. */
  nodes?: Maybe<Array<BotVoteObject>>;
  /** The page information. */
  pageInfo: PageInfo;
  /** The total count of items. */
  totalCount: Scalars['Int']['output'];
  /** The total amount of pages. */
  totalPages: Scalars['Int']['output'];
};

/** A paginated list of bot objects. */
export type BotsConnection = {
  __typename?: 'BotsConnection';
  /** The paginated items. */
  nodes?: Maybe<Array<BotObject>>;
  /** The page information. */
  pageInfo: PageInfo;
  /** The total count of items. */
  totalCount: Scalars['Int']['output'];
  /** The total amount of pages. */
  totalPages: Scalars['Int']['output'];
};

/** The input type for the createBot mutation. */
export type CreateBotInput = {
  /** The description of the bot, supports Markdown. */
  description: Scalars['String']['input'];
  /** The GitHub link for the bot. */
  github?: InputMaybe<Scalars['String']['input']>;
  /** The ID of the bot to create. */
  id: Scalars['ID']['input'];
  /** The custom invite link for the bot. */
  inviteLink?: InputMaybe<Scalars['String']['input']>;
  /** The list of owners that can manage the bot. */
  owners?: InputMaybe<Array<Scalars['String']['input']>>;
  /** The prefix of the bot, if not provided slash commands will be the prefix. */
  prefix?: InputMaybe<Scalars['String']['input']>;
  /** The short description of the bot. */
  shortDescription: Scalars['String']['input'];
  /** The support server link for the bot. */
  supportServer?: InputMaybe<Scalars['String']['input']>;
  /** The bot tags, up to 7. */
  tags: Array<Scalars['String']['input']>;
  /** The website link for the bot. */
  website?: InputMaybe<Scalars['String']['input']>;
};

/** The input type for creating a bot tag. */
export type CreateBotTagInput = {
  /** The name of the tag. */
  id: Scalars['ID']['input'];
};

/** Input for creating a new session. */
export type CreateSessionInput = {
  /** The code provided by Discord. */
  code: Scalars['String']['input'];
};

/** The input type for creating a vanity URL. */
export type CreateVanityInput = {
  /** The ID of the vanity URL. */
  id: Scalars['ID']['input'];
  /** The ID of the target for the vanity URL. */
  targetId: Scalars['String']['input'];
  /** The type of vanity URL. */
  type: VanityType;
};

/** The input to create a webhook */
export type CreateWebhookInput = {
  /** The events to listen to for the webhook */
  events: Array<WebhookEvent>;
  /** The bot ID */
  id: Scalars['ID']['input'];
  /** Custom payload fields to be sent with the webhook */
  payloadFields?: InputMaybe<Array<WebhookPayloadField>>;
  /** The webhook secret */
  secret: Scalars['String']['input'];
  /** The webhook URL */
  url: Scalars['String']['input'];
};

/** The input type for the deleteBot mutation. */
export type DeleteBotInput = {
  /** The ID of the bot to retrieve. */
  id: Scalars['ID']['input'];
};

/** The input type any query that requires filtering. */
export type FiltersBotInput = {
  /** The bots query. */
  query?: InputMaybe<Scalars['String']['input']>;
  /** The bots status. */
  status?: InputMaybe<BotStatus>;
};

/** The input type for filtering bot tags. */
export type FiltersBotTagInput = {
  /** The name of the tag. */
  query?: InputMaybe<Scalars['ID']['input']>;
};

/** The input type for the getBot query. */
export type GetBotInput = {
  /** The ID of the bot to retrieve. */
  id: Scalars['ID']['input'];
};

/** Required input to retrieve a bot owner. */
export type GetBotOwnerInput = {
  /** The ID of the bot owner to retrieve. */
  id: Scalars['ID']['input'];
};

/** The input type for fetching a tag */
export type GetBotTagInput = {
  /** The name of the tag. */
  id: Scalars['ID']['input'];
};

/** The input used to get a user. */
export type GetUserInput = {
  /** The ID of the user to retrieve. */
  id: Scalars['ID']['input'];
};

/** The input type for getting a vanity URL. */
export type GetVanityInput = {
  /** The ID of the vanity URL. */
  id: Scalars['ID']['input'];
};

/** The input to get the webhook */
export type GetWebhookInput = {
  /** The bot ID */
  id: Scalars['ID']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Creates a new bot. */
  createBot: BotObject;
  /** Creates a new session for a user. */
  createSession: AuthSessionObject;
  /** Creates a new tag. */
  createTag: BotTagObject;
  /** Create a vanity URL. */
  createVanity: VanityObject;
  createVote: BotVoteObject;
  /** Create a webhook for the bot */
  createWebhook: WebhookObject;
  deleteBot: BotObject;
  /** Delete a vanity URL. */
  deleteVanity: VanityObject;
  /** Delete the webhook of the bot */
  deleteWebhook: WebhookObject;
  /** Logs out the user session. */
  logOut: Scalars['Boolean']['output'];
  /** Refreshes a user session. */
  refreshSession: AuthSessionObject;
  /** Reset and return a new API key */
  resetApiKey: Scalars['String']['output'];
  /** Updates an existing bot. */
  updateBot: BotObject;
  /** Updates the status of a bot. */
  updateBotStatus: BotObject;
  /** Updates the owner permissions of a bot. */
  updateOwnerPermissions: Scalars['Boolean']['output'];
  /** Updates the authenticated user */
  updateUser: AuthUserObject;
  /** Sets the permissions for a user. */
  updateUserPermissions: AuthUserObject;
  /** Update the webhook of the bot */
  updateWebhook: WebhookObject;
};


export type MutationCreateBotArgs = {
  input: CreateBotInput;
};


export type MutationCreateSessionArgs = {
  input: CreateSessionInput;
};


export type MutationCreateTagArgs = {
  input: CreateBotTagInput;
};


export type MutationCreateVanityArgs = {
  input: CreateVanityInput;
};


export type MutationCreateVoteArgs = {
  input: BotVoteCreateInput;
};


export type MutationCreateWebhookArgs = {
  input: CreateWebhookInput;
};


export type MutationDeleteBotArgs = {
  input: DeleteBotInput;
};


export type MutationDeleteVanityArgs = {
  input: GetVanityInput;
};


export type MutationDeleteWebhookArgs = {
  input: GetWebhookInput;
};


export type MutationResetApiKeyArgs = {
  input: GetBotInput;
};


export type MutationUpdateBotArgs = {
  input: CreateBotInput;
};


export type MutationUpdateBotStatusArgs = {
  input: AdminBotChangeStatusInput;
};


export type MutationUpdateOwnerPermissionsArgs = {
  input: UpdateBotOwnerPermisisionsInput;
};


export type MutationUpdateUserArgs = {
  input: AuthUserUpdateInput;
};


export type MutationUpdateUserPermissionsArgs = {
  input: AdminUserPermissionsInput;
};


export type MutationUpdateWebhookArgs = {
  input: UpdateWebhookInput;
};

/** The page information. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** Indicates if there is a next page. */
  hasNextPage: Scalars['Boolean']['output'];
  /** Indicates if there is a previous page. */
  hasPreviousPage: Scalars['Boolean']['output'];
};

/** The input type for pagination. */
export type PaginationInput = {
  /** The page number to retrieve. */
  page?: InputMaybe<Scalars['Int']['input']>;
  /** The amount of items to retrieve per page. */
  size?: InputMaybe<Scalars['Int']['input']>;
  /** The field to sort the items by. */
  sortBy?: InputMaybe<Scalars['String']['input']>;
  /** The order to sort the items by. */
  sortOrder?: InputMaybe<SortOrder>;
};

export type Query = {
  __typename?: 'Query';
  /** Gives a list of bots */
  bots: BotsConnection;
  canVote: BotCanVoteObject;
  /** Gives the information about a bot. */
  getBot: BotObject;
  /** Gives the information about a bot owner. */
  getOwner: BotOwnerObject;
  /** Fetches a tag by name. */
  getTag: BotTagObject;
  /** Fetches a user by their ID */
  getUser: BotOwnerObject;
  /** Get a vanity URL by ID. */
  getVanity: VanityObject;
  /** Get the webhook of the bot */
  getWebhook: WebhookObject;
  /** Fetches the authenticated user */
  me: AuthUserObject;
  /** Gives a list of bots for the panel */
  panelBots: BotsConnection;
  /** Fetches a list of tags. */
  tags: BotTagsConnection;
};


export type QueryBotsArgs = {
  input?: InputMaybe<SafeFiltersInput>;
  pagination?: InputMaybe<PaginationInput>;
};


export type QueryCanVoteArgs = {
  input: BotVoteCreateInput;
};


export type QueryGetBotArgs = {
  input: GetBotInput;
};


export type QueryGetOwnerArgs = {
  input: GetBotOwnerInput;
};


export type QueryGetTagArgs = {
  input: GetBotTagInput;
};


export type QueryGetUserArgs = {
  input: GetUserInput;
};


export type QueryGetVanityArgs = {
  input: GetVanityInput;
};


export type QueryGetWebhookArgs = {
  input: GetWebhookInput;
};


export type QueryPanelBotsArgs = {
  input?: InputMaybe<FiltersBotInput>;
  pagination?: InputMaybe<PaginationInput>;
};


export type QueryTagsArgs = {
  input?: InputMaybe<FiltersBotTagInput>;
  pagination?: InputMaybe<PaginationInput>;
};

/** FiltersBotInput but skipping certain fields who users simply can't access. */
export type SafeFiltersInput = {
  /** The bots query. */
  query?: InputMaybe<Scalars['String']['input']>;
};

/** The order in which to sort the items. */
export enum SortOrder {
  /** Sort the items in ascending order. */
  Asc = 'ASC',
  /** Sort the items in descending order. */
  Desc = 'DESC'
}

/** Update the permissions of a bot owner. */
export type UpdateBotOwnerPermisisionsInput = {
  /** The ID of the bot. */
  botId: Scalars['String']['input'];
  /** The ID of the bot owner. */
  id: Scalars['String']['input'];
  /** The new permissions of the bot owner. */
  permissions: Scalars['Int']['input'];
};

/** The input to update a webhook */
export type UpdateWebhookInput = {
  /** The events to listen to for the webhook */
  events: Array<WebhookEvent>;
  /** The bot ID */
  id: Scalars['ID']['input'];
  /** Custom payload fields to be sent with the webhook */
  payloadFields?: InputMaybe<Array<WebhookPayloadField>>;
  /** The webhook secret */
  secret?: InputMaybe<Scalars['String']['input']>;
  /** The webhook URL */
  url: Scalars['String']['input'];
};

/** The permissions that a user has. */
export enum UserPermissionsFlags {
  /** The user is an admin. */
  Admin = 'Admin',
  /** The user can manage badges. */
  ManageBadges = 'ManageBadges',
  /** The user can manage bots. */
  ManageBots = 'ManageBots',
  /** The user can manage permissions. */
  ManagePermissions = 'ManagePermissions',
  /** The user can manage reviews. */
  ManageReviews = 'ManageReviews',
  /** The user can manage tags. */
  ManageTags = 'ManageTags',
  /** The user can manage users. */
  ManageUsers = 'ManageUsers'
}

/** The object representing a vanity URL. */
export type VanityObject = {
  __typename?: 'VanityObject';
  /** The ID of the vanity URL. */
  id: Scalars['ID']['output'];
  /** The ID of the target for the vanity URL. */
  targetId: Scalars['String']['output'];
  /** The type of vanity URL. */
  type: VanityType;
  /** The ID of the user who created the vanity URL. */
  userId: Scalars['String']['output'];
};

/** The type of vanity URL. */
export enum VanityType {
  /** The vanity URL is for a bot. */
  Bot = 'BOT',
  /** The vanity URL is for a user. */
  User = 'USER'
}

/** The type of webhook event. */
export enum WebhookEvent {
  /** All events. */
  AllEvents = 'ALL_EVENTS',
  /** A new review has been created. */
  NewReview = 'NEW_REVIEW',
  /** A new vote has been created. */
  NewVote = 'NEW_VOTE',
  /** The status of a bot has changed. */
  StatusChange = 'STATUS_CHANGE'
}

/** The webhook object */
export type WebhookObject = {
  __typename?: 'WebhookObject';
  /** The events to listen to for the webhook */
  events: Array<WebhookEvent>;
  /** The bot ID */
  id: Scalars['ID']['output'];
  /** Custom payload fields to be sent with the webhook */
  payloadFields?: Maybe<Array<WebhookPayloadField>>;
  /** The webhook secret */
  secret: Scalars['String']['output'];
  /** The webhook URL */
  url: Scalars['String']['output'];
};

/** The field in the webhook payload. */
export enum WebhookPayloadField {
  /** Discord ID of the bot that the webhook is for. */
  Bot = 'BOT',
  /** Query string parameters found on the URL. */
  Query = 'QUERY',
  /** Discord ID of the user who triggered the webhook. */
  User = 'USER'
}

export type FrontBotsQueryVariables = Exact<{
  pagination?: InputMaybe<PaginationInput>;
}>;


export type FrontBotsQuery = { __typename?: 'Query', bots: { __typename?: 'BotsConnection', nodes?: Array<{ __typename?: 'BotObject', avatar?: string | null, certified: boolean, guildCount: number, shortDescription: string, name: string, id: string, tags: Array<{ __typename?: 'BotTagObject', displayName: string }>, votes: { __typename?: 'BotVoteObjectConnection', totalCount: number } }> | null } };


export const FrontBotsDocument = gql`
    query FrontBots($pagination: PaginationInput) {
  bots(pagination: $pagination) {
    nodes {
      avatar
      certified
      guildCount
      shortDescription
      name
      id
      tags {
        displayName
      }
      votes {
        totalCount
      }
    }
  }
}
    `;

/**
 * __useFrontBotsQuery__
 *
 * To run a query within a React component, call `useFrontBotsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFrontBotsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFrontBotsQuery({
 *   variables: {
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function useFrontBotsQuery(baseOptions?: Apollo.QueryHookOptions<FrontBotsQuery, FrontBotsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FrontBotsQuery, FrontBotsQueryVariables>(FrontBotsDocument, options);
      }
export function useFrontBotsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FrontBotsQuery, FrontBotsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FrontBotsQuery, FrontBotsQueryVariables>(FrontBotsDocument, options);
        }
export function useFrontBotsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FrontBotsQuery, FrontBotsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FrontBotsQuery, FrontBotsQueryVariables>(FrontBotsDocument, options);
        }
export type FrontBotsQueryHookResult = ReturnType<typeof useFrontBotsQuery>;
export type FrontBotsLazyQueryHookResult = ReturnType<typeof useFrontBotsLazyQuery>;
export type FrontBotsSuspenseQueryHookResult = ReturnType<typeof useFrontBotsSuspenseQuery>;
export type FrontBotsQueryResult = Apollo.QueryResult<FrontBotsQuery, FrontBotsQueryVariables>;