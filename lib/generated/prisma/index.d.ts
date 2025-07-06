
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Tag
 * 
 */
export type Tag = $Result.DefaultSelection<Prisma.$TagPayload>
/**
 * Model BlogCategory
 * 
 */
export type BlogCategory = $Result.DefaultSelection<Prisma.$BlogCategoryPayload>
/**
 * Model BlogPostMeta
 * 
 */
export type BlogPostMeta = $Result.DefaultSelection<Prisma.$BlogPostMetaPayload>
/**
 * Model BlogExtraFile
 * 
 */
export type BlogExtraFile = $Result.DefaultSelection<Prisma.$BlogExtraFilePayload>
/**
 * Model BlogPostTag
 * 
 */
export type BlogPostTag = $Result.DefaultSelection<Prisma.$BlogPostTagPayload>
/**
 * Model BlogPost
 * 
 */
export type BlogPost = $Result.DefaultSelection<Prisma.$BlogPostPayload>
/**
 * Model BlogPostPublish
 * 
 */
export type BlogPostPublish = $Result.DefaultSelection<Prisma.$BlogPostPublishPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tag`: Exposes CRUD operations for the **Tag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tag.findMany()
    * ```
    */
  get tag(): Prisma.TagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.blogCategory`: Exposes CRUD operations for the **BlogCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BlogCategories
    * const blogCategories = await prisma.blogCategory.findMany()
    * ```
    */
  get blogCategory(): Prisma.BlogCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.blogPostMeta`: Exposes CRUD operations for the **BlogPostMeta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BlogPostMetas
    * const blogPostMetas = await prisma.blogPostMeta.findMany()
    * ```
    */
  get blogPostMeta(): Prisma.BlogPostMetaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.blogExtraFile`: Exposes CRUD operations for the **BlogExtraFile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BlogExtraFiles
    * const blogExtraFiles = await prisma.blogExtraFile.findMany()
    * ```
    */
  get blogExtraFile(): Prisma.BlogExtraFileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.blogPostTag`: Exposes CRUD operations for the **BlogPostTag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BlogPostTags
    * const blogPostTags = await prisma.blogPostTag.findMany()
    * ```
    */
  get blogPostTag(): Prisma.BlogPostTagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.blogPost`: Exposes CRUD operations for the **BlogPost** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BlogPosts
    * const blogPosts = await prisma.blogPost.findMany()
    * ```
    */
  get blogPost(): Prisma.BlogPostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.blogPostPublish`: Exposes CRUD operations for the **BlogPostPublish** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BlogPostPublishes
    * const blogPostPublishes = await prisma.blogPostPublish.findMany()
    * ```
    */
  get blogPostPublish(): Prisma.BlogPostPublishDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Tag: 'Tag',
    BlogCategory: 'BlogCategory',
    BlogPostMeta: 'BlogPostMeta',
    BlogExtraFile: 'BlogExtraFile',
    BlogPostTag: 'BlogPostTag',
    BlogPost: 'BlogPost',
    BlogPostPublish: 'BlogPostPublish'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "tag" | "blogCategory" | "blogPostMeta" | "blogExtraFile" | "blogPostTag" | "blogPost" | "blogPostPublish"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Tag: {
        payload: Prisma.$TagPayload<ExtArgs>
        fields: Prisma.TagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findFirst: {
            args: Prisma.TagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findMany: {
            args: Prisma.TagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          create: {
            args: Prisma.TagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          createMany: {
            args: Prisma.TagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          delete: {
            args: Prisma.TagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          update: {
            args: Prisma.TagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          deleteMany: {
            args: Prisma.TagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          upsert: {
            args: Prisma.TagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          aggregate: {
            args: Prisma.TagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTag>
          }
          groupBy: {
            args: Prisma.TagGroupByArgs<ExtArgs>
            result: $Utils.Optional<TagGroupByOutputType>[]
          }
          count: {
            args: Prisma.TagCountArgs<ExtArgs>
            result: $Utils.Optional<TagCountAggregateOutputType> | number
          }
        }
      }
      BlogCategory: {
        payload: Prisma.$BlogCategoryPayload<ExtArgs>
        fields: Prisma.BlogCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlogCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlogCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogCategoryPayload>
          }
          findFirst: {
            args: Prisma.BlogCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlogCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogCategoryPayload>
          }
          findMany: {
            args: Prisma.BlogCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogCategoryPayload>[]
          }
          create: {
            args: Prisma.BlogCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogCategoryPayload>
          }
          createMany: {
            args: Prisma.BlogCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BlogCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogCategoryPayload>[]
          }
          delete: {
            args: Prisma.BlogCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogCategoryPayload>
          }
          update: {
            args: Prisma.BlogCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogCategoryPayload>
          }
          deleteMany: {
            args: Prisma.BlogCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BlogCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BlogCategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogCategoryPayload>[]
          }
          upsert: {
            args: Prisma.BlogCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogCategoryPayload>
          }
          aggregate: {
            args: Prisma.BlogCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlogCategory>
          }
          groupBy: {
            args: Prisma.BlogCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlogCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlogCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<BlogCategoryCountAggregateOutputType> | number
          }
        }
      }
      BlogPostMeta: {
        payload: Prisma.$BlogPostMetaPayload<ExtArgs>
        fields: Prisma.BlogPostMetaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlogPostMetaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostMetaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlogPostMetaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostMetaPayload>
          }
          findFirst: {
            args: Prisma.BlogPostMetaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostMetaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlogPostMetaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostMetaPayload>
          }
          findMany: {
            args: Prisma.BlogPostMetaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostMetaPayload>[]
          }
          create: {
            args: Prisma.BlogPostMetaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostMetaPayload>
          }
          createMany: {
            args: Prisma.BlogPostMetaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BlogPostMetaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostMetaPayload>[]
          }
          delete: {
            args: Prisma.BlogPostMetaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostMetaPayload>
          }
          update: {
            args: Prisma.BlogPostMetaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostMetaPayload>
          }
          deleteMany: {
            args: Prisma.BlogPostMetaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BlogPostMetaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BlogPostMetaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostMetaPayload>[]
          }
          upsert: {
            args: Prisma.BlogPostMetaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostMetaPayload>
          }
          aggregate: {
            args: Prisma.BlogPostMetaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlogPostMeta>
          }
          groupBy: {
            args: Prisma.BlogPostMetaGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlogPostMetaGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlogPostMetaCountArgs<ExtArgs>
            result: $Utils.Optional<BlogPostMetaCountAggregateOutputType> | number
          }
        }
      }
      BlogExtraFile: {
        payload: Prisma.$BlogExtraFilePayload<ExtArgs>
        fields: Prisma.BlogExtraFileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlogExtraFileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogExtraFilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlogExtraFileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogExtraFilePayload>
          }
          findFirst: {
            args: Prisma.BlogExtraFileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogExtraFilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlogExtraFileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogExtraFilePayload>
          }
          findMany: {
            args: Prisma.BlogExtraFileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogExtraFilePayload>[]
          }
          create: {
            args: Prisma.BlogExtraFileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogExtraFilePayload>
          }
          createMany: {
            args: Prisma.BlogExtraFileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BlogExtraFileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogExtraFilePayload>[]
          }
          delete: {
            args: Prisma.BlogExtraFileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogExtraFilePayload>
          }
          update: {
            args: Prisma.BlogExtraFileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogExtraFilePayload>
          }
          deleteMany: {
            args: Prisma.BlogExtraFileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BlogExtraFileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BlogExtraFileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogExtraFilePayload>[]
          }
          upsert: {
            args: Prisma.BlogExtraFileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogExtraFilePayload>
          }
          aggregate: {
            args: Prisma.BlogExtraFileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlogExtraFile>
          }
          groupBy: {
            args: Prisma.BlogExtraFileGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlogExtraFileGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlogExtraFileCountArgs<ExtArgs>
            result: $Utils.Optional<BlogExtraFileCountAggregateOutputType> | number
          }
        }
      }
      BlogPostTag: {
        payload: Prisma.$BlogPostTagPayload<ExtArgs>
        fields: Prisma.BlogPostTagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlogPostTagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostTagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlogPostTagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostTagPayload>
          }
          findFirst: {
            args: Prisma.BlogPostTagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostTagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlogPostTagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostTagPayload>
          }
          findMany: {
            args: Prisma.BlogPostTagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostTagPayload>[]
          }
          create: {
            args: Prisma.BlogPostTagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostTagPayload>
          }
          createMany: {
            args: Prisma.BlogPostTagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BlogPostTagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostTagPayload>[]
          }
          delete: {
            args: Prisma.BlogPostTagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostTagPayload>
          }
          update: {
            args: Prisma.BlogPostTagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostTagPayload>
          }
          deleteMany: {
            args: Prisma.BlogPostTagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BlogPostTagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BlogPostTagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostTagPayload>[]
          }
          upsert: {
            args: Prisma.BlogPostTagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostTagPayload>
          }
          aggregate: {
            args: Prisma.BlogPostTagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlogPostTag>
          }
          groupBy: {
            args: Prisma.BlogPostTagGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlogPostTagGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlogPostTagCountArgs<ExtArgs>
            result: $Utils.Optional<BlogPostTagCountAggregateOutputType> | number
          }
        }
      }
      BlogPost: {
        payload: Prisma.$BlogPostPayload<ExtArgs>
        fields: Prisma.BlogPostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlogPostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlogPostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>
          }
          findFirst: {
            args: Prisma.BlogPostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlogPostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>
          }
          findMany: {
            args: Prisma.BlogPostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>[]
          }
          create: {
            args: Prisma.BlogPostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>
          }
          createMany: {
            args: Prisma.BlogPostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BlogPostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>[]
          }
          delete: {
            args: Prisma.BlogPostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>
          }
          update: {
            args: Prisma.BlogPostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>
          }
          deleteMany: {
            args: Prisma.BlogPostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BlogPostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BlogPostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>[]
          }
          upsert: {
            args: Prisma.BlogPostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>
          }
          aggregate: {
            args: Prisma.BlogPostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlogPost>
          }
          groupBy: {
            args: Prisma.BlogPostGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlogPostGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlogPostCountArgs<ExtArgs>
            result: $Utils.Optional<BlogPostCountAggregateOutputType> | number
          }
        }
      }
      BlogPostPublish: {
        payload: Prisma.$BlogPostPublishPayload<ExtArgs>
        fields: Prisma.BlogPostPublishFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlogPostPublishFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPublishPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlogPostPublishFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPublishPayload>
          }
          findFirst: {
            args: Prisma.BlogPostPublishFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPublishPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlogPostPublishFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPublishPayload>
          }
          findMany: {
            args: Prisma.BlogPostPublishFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPublishPayload>[]
          }
          create: {
            args: Prisma.BlogPostPublishCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPublishPayload>
          }
          createMany: {
            args: Prisma.BlogPostPublishCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BlogPostPublishCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPublishPayload>[]
          }
          delete: {
            args: Prisma.BlogPostPublishDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPublishPayload>
          }
          update: {
            args: Prisma.BlogPostPublishUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPublishPayload>
          }
          deleteMany: {
            args: Prisma.BlogPostPublishDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BlogPostPublishUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BlogPostPublishUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPublishPayload>[]
          }
          upsert: {
            args: Prisma.BlogPostPublishUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPublishPayload>
          }
          aggregate: {
            args: Prisma.BlogPostPublishAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlogPostPublish>
          }
          groupBy: {
            args: Prisma.BlogPostPublishGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlogPostPublishGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlogPostPublishCountArgs<ExtArgs>
            result: $Utils.Optional<BlogPostPublishCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    tag?: TagOmit
    blogCategory?: BlogCategoryOmit
    blogPostMeta?: BlogPostMetaOmit
    blogExtraFile?: BlogExtraFileOmit
    blogPostTag?: BlogPostTagOmit
    blogPost?: BlogPostOmit
    blogPostPublish?: BlogPostPublishOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    tag: number
    blogCategory: number
    blogPostMeta: number
    blogPostTag: number
    blogExtraFile: number
    blogPost: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tag?: boolean | UserCountOutputTypeCountTagArgs
    blogCategory?: boolean | UserCountOutputTypeCountBlogCategoryArgs
    blogPostMeta?: boolean | UserCountOutputTypeCountBlogPostMetaArgs
    blogPostTag?: boolean | UserCountOutputTypeCountBlogPostTagArgs
    blogExtraFile?: boolean | UserCountOutputTypeCountBlogExtraFileArgs
    blogPost?: boolean | UserCountOutputTypeCountBlogPostArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBlogCategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogCategoryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBlogPostMetaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogPostMetaWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBlogPostTagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogPostTagWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBlogExtraFileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogExtraFileWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBlogPostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogPostWhereInput
  }


  /**
   * Count Type TagCountOutputType
   */

  export type TagCountOutputType = {
    blogPostTag: number
  }

  export type TagCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blogPostTag?: boolean | TagCountOutputTypeCountBlogPostTagArgs
  }

  // Custom InputTypes
  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagCountOutputType
     */
    select?: TagCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountBlogPostTagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogPostTagWhereInput
  }


  /**
   * Count Type BlogCategoryCountOutputType
   */

  export type BlogCategoryCountOutputType = {
    lowerCategories: number
    blogPostPublish: number
  }

  export type BlogCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lowerCategories?: boolean | BlogCategoryCountOutputTypeCountLowerCategoriesArgs
    blogPostPublish?: boolean | BlogCategoryCountOutputTypeCountBlogPostPublishArgs
  }

  // Custom InputTypes
  /**
   * BlogCategoryCountOutputType without action
   */
  export type BlogCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogCategoryCountOutputType
     */
    select?: BlogCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BlogCategoryCountOutputType without action
   */
  export type BlogCategoryCountOutputTypeCountLowerCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogCategoryWhereInput
  }

  /**
   * BlogCategoryCountOutputType without action
   */
  export type BlogCategoryCountOutputTypeCountBlogPostPublishArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogPostPublishWhereInput
  }


  /**
   * Count Type BlogPostMetaCountOutputType
   */

  export type BlogPostMetaCountOutputType = {
    extraFile: number
    blogPostTag: number
    blogPost: number
  }

  export type BlogPostMetaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    extraFile?: boolean | BlogPostMetaCountOutputTypeCountExtraFileArgs
    blogPostTag?: boolean | BlogPostMetaCountOutputTypeCountBlogPostTagArgs
    blogPost?: boolean | BlogPostMetaCountOutputTypeCountBlogPostArgs
  }

  // Custom InputTypes
  /**
   * BlogPostMetaCountOutputType without action
   */
  export type BlogPostMetaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostMetaCountOutputType
     */
    select?: BlogPostMetaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BlogPostMetaCountOutputType without action
   */
  export type BlogPostMetaCountOutputTypeCountExtraFileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogExtraFileWhereInput
  }

  /**
   * BlogPostMetaCountOutputType without action
   */
  export type BlogPostMetaCountOutputTypeCountBlogPostTagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogPostTagWhereInput
  }

  /**
   * BlogPostMetaCountOutputType without action
   */
  export type BlogPostMetaCountOutputTypeCountBlogPostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogPostWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    userId: string | null
    userName: string | null
    userPassword: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    userId: string | null
    userName: string | null
    userPassword: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    userId: number
    userName: number
    userPassword: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    userId?: true
    userName?: true
    userPassword?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    userId?: true
    userName?: true
    userPassword?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    userId?: true
    userName?: true
    userPassword?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    userId: string
    userName: string
    userPassword: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    userName?: boolean
    userPassword?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tag?: boolean | User$tagArgs<ExtArgs>
    blogCategory?: boolean | User$blogCategoryArgs<ExtArgs>
    blogPostMeta?: boolean | User$blogPostMetaArgs<ExtArgs>
    blogPostTag?: boolean | User$blogPostTagArgs<ExtArgs>
    blogExtraFile?: boolean | User$blogExtraFileArgs<ExtArgs>
    blogPost?: boolean | User$blogPostArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    userName?: boolean
    userPassword?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    userName?: boolean
    userPassword?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    userId?: boolean
    userName?: boolean
    userPassword?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "userName" | "userPassword" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tag?: boolean | User$tagArgs<ExtArgs>
    blogCategory?: boolean | User$blogCategoryArgs<ExtArgs>
    blogPostMeta?: boolean | User$blogPostMetaArgs<ExtArgs>
    blogPostTag?: boolean | User$blogPostTagArgs<ExtArgs>
    blogExtraFile?: boolean | User$blogExtraFileArgs<ExtArgs>
    blogPost?: boolean | User$blogPostArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      tag: Prisma.$TagPayload<ExtArgs>[]
      blogCategory: Prisma.$BlogCategoryPayload<ExtArgs>[]
      blogPostMeta: Prisma.$BlogPostMetaPayload<ExtArgs>[]
      blogPostTag: Prisma.$BlogPostTagPayload<ExtArgs>[]
      blogExtraFile: Prisma.$BlogExtraFilePayload<ExtArgs>[]
      blogPost: Prisma.$BlogPostPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      userName: string
      userPassword: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userWithUserIdOnly = await prisma.user.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `userId`
     * const userWithUserIdOnly = await prisma.user.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `userId`
     * const userWithUserIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tag<T extends User$tagArgs<ExtArgs> = {}>(args?: Subset<T, User$tagArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    blogCategory<T extends User$blogCategoryArgs<ExtArgs> = {}>(args?: Subset<T, User$blogCategoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    blogPostMeta<T extends User$blogPostMetaArgs<ExtArgs> = {}>(args?: Subset<T, User$blogPostMetaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPostMetaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    blogPostTag<T extends User$blogPostTagArgs<ExtArgs> = {}>(args?: Subset<T, User$blogPostTagArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPostTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    blogExtraFile<T extends User$blogExtraFileArgs<ExtArgs> = {}>(args?: Subset<T, User$blogExtraFileArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogExtraFilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    blogPost<T extends User$blogPostArgs<ExtArgs> = {}>(args?: Subset<T, User$blogPostArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly userId: FieldRef<"User", 'String'>
    readonly userName: FieldRef<"User", 'String'>
    readonly userPassword: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.tag
   */
  export type User$tagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    where?: TagWhereInput
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    cursor?: TagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * User.blogCategory
   */
  export type User$blogCategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogCategory
     */
    select?: BlogCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogCategory
     */
    omit?: BlogCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogCategoryInclude<ExtArgs> | null
    where?: BlogCategoryWhereInput
    orderBy?: BlogCategoryOrderByWithRelationInput | BlogCategoryOrderByWithRelationInput[]
    cursor?: BlogCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlogCategoryScalarFieldEnum | BlogCategoryScalarFieldEnum[]
  }

  /**
   * User.blogPostMeta
   */
  export type User$blogPostMetaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostMeta
     */
    select?: BlogPostMetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPostMeta
     */
    omit?: BlogPostMetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostMetaInclude<ExtArgs> | null
    where?: BlogPostMetaWhereInput
    orderBy?: BlogPostMetaOrderByWithRelationInput | BlogPostMetaOrderByWithRelationInput[]
    cursor?: BlogPostMetaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlogPostMetaScalarFieldEnum | BlogPostMetaScalarFieldEnum[]
  }

  /**
   * User.blogPostTag
   */
  export type User$blogPostTagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostTag
     */
    select?: BlogPostTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPostTag
     */
    omit?: BlogPostTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostTagInclude<ExtArgs> | null
    where?: BlogPostTagWhereInput
    orderBy?: BlogPostTagOrderByWithRelationInput | BlogPostTagOrderByWithRelationInput[]
    cursor?: BlogPostTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlogPostTagScalarFieldEnum | BlogPostTagScalarFieldEnum[]
  }

  /**
   * User.blogExtraFile
   */
  export type User$blogExtraFileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogExtraFile
     */
    select?: BlogExtraFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogExtraFile
     */
    omit?: BlogExtraFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogExtraFileInclude<ExtArgs> | null
    where?: BlogExtraFileWhereInput
    orderBy?: BlogExtraFileOrderByWithRelationInput | BlogExtraFileOrderByWithRelationInput[]
    cursor?: BlogExtraFileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlogExtraFileScalarFieldEnum | BlogExtraFileScalarFieldEnum[]
  }

  /**
   * User.blogPost
   */
  export type User$blogPostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    where?: BlogPostWhereInput
    orderBy?: BlogPostOrderByWithRelationInput | BlogPostOrderByWithRelationInput[]
    cursor?: BlogPostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlogPostScalarFieldEnum | BlogPostScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Tag
   */

  export type AggregateTag = {
    _count: TagCountAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  export type TagMinAggregateOutputType = {
    tagName: string | null
    userId: string | null
  }

  export type TagMaxAggregateOutputType = {
    tagName: string | null
    userId: string | null
  }

  export type TagCountAggregateOutputType = {
    tagName: number
    userId: number
    _all: number
  }


  export type TagMinAggregateInputType = {
    tagName?: true
    userId?: true
  }

  export type TagMaxAggregateInputType = {
    tagName?: true
    userId?: true
  }

  export type TagCountAggregateInputType = {
    tagName?: true
    userId?: true
    _all?: true
  }

  export type TagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tag to aggregate.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tags
    **/
    _count?: true | TagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagMaxAggregateInputType
  }

  export type GetTagAggregateType<T extends TagAggregateArgs> = {
        [P in keyof T & keyof AggregateTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTag[P]>
      : GetScalarType<T[P], AggregateTag[P]>
  }




  export type TagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
    orderBy?: TagOrderByWithAggregationInput | TagOrderByWithAggregationInput[]
    by: TagScalarFieldEnum[] | TagScalarFieldEnum
    having?: TagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagCountAggregateInputType | true
    _min?: TagMinAggregateInputType
    _max?: TagMaxAggregateInputType
  }

  export type TagGroupByOutputType = {
    tagName: string
    userId: string
    _count: TagCountAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  type GetTagGroupByPayload<T extends TagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagGroupByOutputType[P]>
            : GetScalarType<T[P], TagGroupByOutputType[P]>
        }
      >
    >


  export type TagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tagName?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    blogPostTag?: boolean | Tag$blogPostTagArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tag"]>

  export type TagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tagName?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tag"]>

  export type TagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tagName?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tag"]>

  export type TagSelectScalar = {
    tagName?: boolean
    userId?: boolean
  }

  export type TagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"tagName" | "userId", ExtArgs["result"]["tag"]>
  export type TagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    blogPostTag?: boolean | Tag$blogPostTagArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tag"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      blogPostTag: Prisma.$BlogPostTagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      tagName: string
      userId: string
    }, ExtArgs["result"]["tag"]>
    composites: {}
  }

  type TagGetPayload<S extends boolean | null | undefined | TagDefaultArgs> = $Result.GetResult<Prisma.$TagPayload, S>

  type TagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TagCountAggregateInputType | true
    }

  export interface TagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tag'], meta: { name: 'Tag' } }
    /**
     * Find zero or one Tag that matches the filter.
     * @param {TagFindUniqueArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TagFindUniqueArgs>(args: SelectSubset<T, TagFindUniqueArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TagFindUniqueOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TagFindUniqueOrThrowArgs>(args: SelectSubset<T, TagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TagFindFirstArgs>(args?: SelectSubset<T, TagFindFirstArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TagFindFirstOrThrowArgs>(args?: SelectSubset<T, TagFindFirstOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tag.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tag.findMany({ take: 10 })
     * 
     * // Only select the `tagName`
     * const tagWithTagNameOnly = await prisma.tag.findMany({ select: { tagName: true } })
     * 
     */
    findMany<T extends TagFindManyArgs>(args?: SelectSubset<T, TagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tag.
     * @param {TagCreateArgs} args - Arguments to create a Tag.
     * @example
     * // Create one Tag
     * const Tag = await prisma.tag.create({
     *   data: {
     *     // ... data to create a Tag
     *   }
     * })
     * 
     */
    create<T extends TagCreateArgs>(args: SelectSubset<T, TagCreateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tags.
     * @param {TagCreateManyArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TagCreateManyArgs>(args?: SelectSubset<T, TagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tags and returns the data saved in the database.
     * @param {TagCreateManyAndReturnArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tags and only return the `tagName`
     * const tagWithTagNameOnly = await prisma.tag.createManyAndReturn({
     *   select: { tagName: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TagCreateManyAndReturnArgs>(args?: SelectSubset<T, TagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tag.
     * @param {TagDeleteArgs} args - Arguments to delete one Tag.
     * @example
     * // Delete one Tag
     * const Tag = await prisma.tag.delete({
     *   where: {
     *     // ... filter to delete one Tag
     *   }
     * })
     * 
     */
    delete<T extends TagDeleteArgs>(args: SelectSubset<T, TagDeleteArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tag.
     * @param {TagUpdateArgs} args - Arguments to update one Tag.
     * @example
     * // Update one Tag
     * const tag = await prisma.tag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TagUpdateArgs>(args: SelectSubset<T, TagUpdateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tags.
     * @param {TagDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TagDeleteManyArgs>(args?: SelectSubset<T, TagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TagUpdateManyArgs>(args: SelectSubset<T, TagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags and returns the data updated in the database.
     * @param {TagUpdateManyAndReturnArgs} args - Arguments to update many Tags.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tags and only return the `tagName`
     * const tagWithTagNameOnly = await prisma.tag.updateManyAndReturn({
     *   select: { tagName: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TagUpdateManyAndReturnArgs>(args: SelectSubset<T, TagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tag.
     * @param {TagUpsertArgs} args - Arguments to update or create a Tag.
     * @example
     * // Update or create a Tag
     * const tag = await prisma.tag.upsert({
     *   create: {
     *     // ... data to create a Tag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tag we want to update
     *   }
     * })
     */
    upsert<T extends TagUpsertArgs>(args: SelectSubset<T, TagUpsertArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tag.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends TagCountArgs>(
      args?: Subset<T, TagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TagAggregateArgs>(args: Subset<T, TagAggregateArgs>): Prisma.PrismaPromise<GetTagAggregateType<T>>

    /**
     * Group by Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TagGroupByArgs['orderBy'] }
        : { orderBy?: TagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tag model
   */
  readonly fields: TagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    blogPostTag<T extends Tag$blogPostTagArgs<ExtArgs> = {}>(args?: Subset<T, Tag$blogPostTagArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPostTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tag model
   */
  interface TagFieldRefs {
    readonly tagName: FieldRef<"Tag", 'String'>
    readonly userId: FieldRef<"Tag", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Tag findUnique
   */
  export type TagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findUniqueOrThrow
   */
  export type TagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findFirst
   */
  export type TagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findFirstOrThrow
   */
  export type TagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findMany
   */
  export type TagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag create
   */
  export type TagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to create a Tag.
     */
    data: XOR<TagCreateInput, TagUncheckedCreateInput>
  }

  /**
   * Tag createMany
   */
  export type TagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tag createManyAndReturn
   */
  export type TagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tag update
   */
  export type TagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to update a Tag.
     */
    data: XOR<TagUpdateInput, TagUncheckedUpdateInput>
    /**
     * Choose, which Tag to update.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag updateMany
   */
  export type TagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tag updateManyAndReturn
   */
  export type TagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tag upsert
   */
  export type TagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The filter to search for the Tag to update in case it exists.
     */
    where: TagWhereUniqueInput
    /**
     * In case the Tag found by the `where` argument doesn't exist, create a new Tag with this data.
     */
    create: XOR<TagCreateInput, TagUncheckedCreateInput>
    /**
     * In case the Tag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TagUpdateInput, TagUncheckedUpdateInput>
  }

  /**
   * Tag delete
   */
  export type TagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter which Tag to delete.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag deleteMany
   */
  export type TagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tags to delete
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to delete.
     */
    limit?: number
  }

  /**
   * Tag.blogPostTag
   */
  export type Tag$blogPostTagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostTag
     */
    select?: BlogPostTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPostTag
     */
    omit?: BlogPostTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostTagInclude<ExtArgs> | null
    where?: BlogPostTagWhereInput
    orderBy?: BlogPostTagOrderByWithRelationInput | BlogPostTagOrderByWithRelationInput[]
    cursor?: BlogPostTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlogPostTagScalarFieldEnum | BlogPostTagScalarFieldEnum[]
  }

  /**
   * Tag without action
   */
  export type TagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
  }


  /**
   * Model BlogCategory
   */

  export type AggregateBlogCategory = {
    _count: BlogCategoryCountAggregateOutputType | null
    _avg: BlogCategoryAvgAggregateOutputType | null
    _sum: BlogCategorySumAggregateOutputType | null
    _min: BlogCategoryMinAggregateOutputType | null
    _max: BlogCategoryMaxAggregateOutputType | null
  }

  export type BlogCategoryAvgAggregateOutputType = {
    privateCount: number | null
    publicCount: number | null
    categoryDepth: number | null
  }

  export type BlogCategorySumAggregateOutputType = {
    privateCount: bigint | null
    publicCount: bigint | null
    categoryDepth: number | null
  }

  export type BlogCategoryMinAggregateOutputType = {
    categoryName: string | null
    userId: string | null
    privateCount: bigint | null
    publicCount: bigint | null
    categoryDepth: number | null
    upperCategoryName: string | null
  }

  export type BlogCategoryMaxAggregateOutputType = {
    categoryName: string | null
    userId: string | null
    privateCount: bigint | null
    publicCount: bigint | null
    categoryDepth: number | null
    upperCategoryName: string | null
  }

  export type BlogCategoryCountAggregateOutputType = {
    categoryName: number
    userId: number
    privateCount: number
    publicCount: number
    categoryDepth: number
    upperCategoryName: number
    _all: number
  }


  export type BlogCategoryAvgAggregateInputType = {
    privateCount?: true
    publicCount?: true
    categoryDepth?: true
  }

  export type BlogCategorySumAggregateInputType = {
    privateCount?: true
    publicCount?: true
    categoryDepth?: true
  }

  export type BlogCategoryMinAggregateInputType = {
    categoryName?: true
    userId?: true
    privateCount?: true
    publicCount?: true
    categoryDepth?: true
    upperCategoryName?: true
  }

  export type BlogCategoryMaxAggregateInputType = {
    categoryName?: true
    userId?: true
    privateCount?: true
    publicCount?: true
    categoryDepth?: true
    upperCategoryName?: true
  }

  export type BlogCategoryCountAggregateInputType = {
    categoryName?: true
    userId?: true
    privateCount?: true
    publicCount?: true
    categoryDepth?: true
    upperCategoryName?: true
    _all?: true
  }

  export type BlogCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlogCategory to aggregate.
     */
    where?: BlogCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogCategories to fetch.
     */
    orderBy?: BlogCategoryOrderByWithRelationInput | BlogCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlogCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BlogCategories
    **/
    _count?: true | BlogCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BlogCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BlogCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlogCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlogCategoryMaxAggregateInputType
  }

  export type GetBlogCategoryAggregateType<T extends BlogCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateBlogCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlogCategory[P]>
      : GetScalarType<T[P], AggregateBlogCategory[P]>
  }




  export type BlogCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogCategoryWhereInput
    orderBy?: BlogCategoryOrderByWithAggregationInput | BlogCategoryOrderByWithAggregationInput[]
    by: BlogCategoryScalarFieldEnum[] | BlogCategoryScalarFieldEnum
    having?: BlogCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlogCategoryCountAggregateInputType | true
    _avg?: BlogCategoryAvgAggregateInputType
    _sum?: BlogCategorySumAggregateInputType
    _min?: BlogCategoryMinAggregateInputType
    _max?: BlogCategoryMaxAggregateInputType
  }

  export type BlogCategoryGroupByOutputType = {
    categoryName: string
    userId: string
    privateCount: bigint
    publicCount: bigint
    categoryDepth: number
    upperCategoryName: string | null
    _count: BlogCategoryCountAggregateOutputType | null
    _avg: BlogCategoryAvgAggregateOutputType | null
    _sum: BlogCategorySumAggregateOutputType | null
    _min: BlogCategoryMinAggregateOutputType | null
    _max: BlogCategoryMaxAggregateOutputType | null
  }

  type GetBlogCategoryGroupByPayload<T extends BlogCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlogCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlogCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlogCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], BlogCategoryGroupByOutputType[P]>
        }
      >
    >


  export type BlogCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    categoryName?: boolean
    userId?: boolean
    privateCount?: boolean
    publicCount?: boolean
    categoryDepth?: boolean
    upperCategoryName?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    upperCategory?: boolean | BlogCategory$upperCategoryArgs<ExtArgs>
    lowerCategories?: boolean | BlogCategory$lowerCategoriesArgs<ExtArgs>
    blogPostPublish?: boolean | BlogCategory$blogPostPublishArgs<ExtArgs>
    _count?: boolean | BlogCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blogCategory"]>

  export type BlogCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    categoryName?: boolean
    userId?: boolean
    privateCount?: boolean
    publicCount?: boolean
    categoryDepth?: boolean
    upperCategoryName?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    upperCategory?: boolean | BlogCategory$upperCategoryArgs<ExtArgs>
  }, ExtArgs["result"]["blogCategory"]>

  export type BlogCategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    categoryName?: boolean
    userId?: boolean
    privateCount?: boolean
    publicCount?: boolean
    categoryDepth?: boolean
    upperCategoryName?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    upperCategory?: boolean | BlogCategory$upperCategoryArgs<ExtArgs>
  }, ExtArgs["result"]["blogCategory"]>

  export type BlogCategorySelectScalar = {
    categoryName?: boolean
    userId?: boolean
    privateCount?: boolean
    publicCount?: boolean
    categoryDepth?: boolean
    upperCategoryName?: boolean
  }

  export type BlogCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"categoryName" | "userId" | "privateCount" | "publicCount" | "categoryDepth" | "upperCategoryName", ExtArgs["result"]["blogCategory"]>
  export type BlogCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    upperCategory?: boolean | BlogCategory$upperCategoryArgs<ExtArgs>
    lowerCategories?: boolean | BlogCategory$lowerCategoriesArgs<ExtArgs>
    blogPostPublish?: boolean | BlogCategory$blogPostPublishArgs<ExtArgs>
    _count?: boolean | BlogCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BlogCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    upperCategory?: boolean | BlogCategory$upperCategoryArgs<ExtArgs>
  }
  export type BlogCategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    upperCategory?: boolean | BlogCategory$upperCategoryArgs<ExtArgs>
  }

  export type $BlogCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BlogCategory"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      upperCategory: Prisma.$BlogCategoryPayload<ExtArgs> | null
      lowerCategories: Prisma.$BlogCategoryPayload<ExtArgs>[]
      blogPostPublish: Prisma.$BlogPostPublishPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      categoryName: string
      userId: string
      privateCount: bigint
      publicCount: bigint
      categoryDepth: number
      upperCategoryName: string | null
    }, ExtArgs["result"]["blogCategory"]>
    composites: {}
  }

  type BlogCategoryGetPayload<S extends boolean | null | undefined | BlogCategoryDefaultArgs> = $Result.GetResult<Prisma.$BlogCategoryPayload, S>

  type BlogCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BlogCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BlogCategoryCountAggregateInputType | true
    }

  export interface BlogCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BlogCategory'], meta: { name: 'BlogCategory' } }
    /**
     * Find zero or one BlogCategory that matches the filter.
     * @param {BlogCategoryFindUniqueArgs} args - Arguments to find a BlogCategory
     * @example
     * // Get one BlogCategory
     * const blogCategory = await prisma.blogCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BlogCategoryFindUniqueArgs>(args: SelectSubset<T, BlogCategoryFindUniqueArgs<ExtArgs>>): Prisma__BlogCategoryClient<$Result.GetResult<Prisma.$BlogCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BlogCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BlogCategoryFindUniqueOrThrowArgs} args - Arguments to find a BlogCategory
     * @example
     * // Get one BlogCategory
     * const blogCategory = await prisma.blogCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BlogCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, BlogCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BlogCategoryClient<$Result.GetResult<Prisma.$BlogCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlogCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogCategoryFindFirstArgs} args - Arguments to find a BlogCategory
     * @example
     * // Get one BlogCategory
     * const blogCategory = await prisma.blogCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BlogCategoryFindFirstArgs>(args?: SelectSubset<T, BlogCategoryFindFirstArgs<ExtArgs>>): Prisma__BlogCategoryClient<$Result.GetResult<Prisma.$BlogCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlogCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogCategoryFindFirstOrThrowArgs} args - Arguments to find a BlogCategory
     * @example
     * // Get one BlogCategory
     * const blogCategory = await prisma.blogCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BlogCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, BlogCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__BlogCategoryClient<$Result.GetResult<Prisma.$BlogCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BlogCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BlogCategories
     * const blogCategories = await prisma.blogCategory.findMany()
     * 
     * // Get first 10 BlogCategories
     * const blogCategories = await prisma.blogCategory.findMany({ take: 10 })
     * 
     * // Only select the `categoryName`
     * const blogCategoryWithCategoryNameOnly = await prisma.blogCategory.findMany({ select: { categoryName: true } })
     * 
     */
    findMany<T extends BlogCategoryFindManyArgs>(args?: SelectSubset<T, BlogCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BlogCategory.
     * @param {BlogCategoryCreateArgs} args - Arguments to create a BlogCategory.
     * @example
     * // Create one BlogCategory
     * const BlogCategory = await prisma.blogCategory.create({
     *   data: {
     *     // ... data to create a BlogCategory
     *   }
     * })
     * 
     */
    create<T extends BlogCategoryCreateArgs>(args: SelectSubset<T, BlogCategoryCreateArgs<ExtArgs>>): Prisma__BlogCategoryClient<$Result.GetResult<Prisma.$BlogCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BlogCategories.
     * @param {BlogCategoryCreateManyArgs} args - Arguments to create many BlogCategories.
     * @example
     * // Create many BlogCategories
     * const blogCategory = await prisma.blogCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BlogCategoryCreateManyArgs>(args?: SelectSubset<T, BlogCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BlogCategories and returns the data saved in the database.
     * @param {BlogCategoryCreateManyAndReturnArgs} args - Arguments to create many BlogCategories.
     * @example
     * // Create many BlogCategories
     * const blogCategory = await prisma.blogCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BlogCategories and only return the `categoryName`
     * const blogCategoryWithCategoryNameOnly = await prisma.blogCategory.createManyAndReturn({
     *   select: { categoryName: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BlogCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, BlogCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BlogCategory.
     * @param {BlogCategoryDeleteArgs} args - Arguments to delete one BlogCategory.
     * @example
     * // Delete one BlogCategory
     * const BlogCategory = await prisma.blogCategory.delete({
     *   where: {
     *     // ... filter to delete one BlogCategory
     *   }
     * })
     * 
     */
    delete<T extends BlogCategoryDeleteArgs>(args: SelectSubset<T, BlogCategoryDeleteArgs<ExtArgs>>): Prisma__BlogCategoryClient<$Result.GetResult<Prisma.$BlogCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BlogCategory.
     * @param {BlogCategoryUpdateArgs} args - Arguments to update one BlogCategory.
     * @example
     * // Update one BlogCategory
     * const blogCategory = await prisma.blogCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BlogCategoryUpdateArgs>(args: SelectSubset<T, BlogCategoryUpdateArgs<ExtArgs>>): Prisma__BlogCategoryClient<$Result.GetResult<Prisma.$BlogCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BlogCategories.
     * @param {BlogCategoryDeleteManyArgs} args - Arguments to filter BlogCategories to delete.
     * @example
     * // Delete a few BlogCategories
     * const { count } = await prisma.blogCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BlogCategoryDeleteManyArgs>(args?: SelectSubset<T, BlogCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlogCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BlogCategories
     * const blogCategory = await prisma.blogCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BlogCategoryUpdateManyArgs>(args: SelectSubset<T, BlogCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlogCategories and returns the data updated in the database.
     * @param {BlogCategoryUpdateManyAndReturnArgs} args - Arguments to update many BlogCategories.
     * @example
     * // Update many BlogCategories
     * const blogCategory = await prisma.blogCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BlogCategories and only return the `categoryName`
     * const blogCategoryWithCategoryNameOnly = await prisma.blogCategory.updateManyAndReturn({
     *   select: { categoryName: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BlogCategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, BlogCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BlogCategory.
     * @param {BlogCategoryUpsertArgs} args - Arguments to update or create a BlogCategory.
     * @example
     * // Update or create a BlogCategory
     * const blogCategory = await prisma.blogCategory.upsert({
     *   create: {
     *     // ... data to create a BlogCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BlogCategory we want to update
     *   }
     * })
     */
    upsert<T extends BlogCategoryUpsertArgs>(args: SelectSubset<T, BlogCategoryUpsertArgs<ExtArgs>>): Prisma__BlogCategoryClient<$Result.GetResult<Prisma.$BlogCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BlogCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogCategoryCountArgs} args - Arguments to filter BlogCategories to count.
     * @example
     * // Count the number of BlogCategories
     * const count = await prisma.blogCategory.count({
     *   where: {
     *     // ... the filter for the BlogCategories we want to count
     *   }
     * })
    **/
    count<T extends BlogCategoryCountArgs>(
      args?: Subset<T, BlogCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlogCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BlogCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BlogCategoryAggregateArgs>(args: Subset<T, BlogCategoryAggregateArgs>): Prisma.PrismaPromise<GetBlogCategoryAggregateType<T>>

    /**
     * Group by BlogCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BlogCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlogCategoryGroupByArgs['orderBy'] }
        : { orderBy?: BlogCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BlogCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlogCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BlogCategory model
   */
  readonly fields: BlogCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BlogCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlogCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    upperCategory<T extends BlogCategory$upperCategoryArgs<ExtArgs> = {}>(args?: Subset<T, BlogCategory$upperCategoryArgs<ExtArgs>>): Prisma__BlogCategoryClient<$Result.GetResult<Prisma.$BlogCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    lowerCategories<T extends BlogCategory$lowerCategoriesArgs<ExtArgs> = {}>(args?: Subset<T, BlogCategory$lowerCategoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    blogPostPublish<T extends BlogCategory$blogPostPublishArgs<ExtArgs> = {}>(args?: Subset<T, BlogCategory$blogPostPublishArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPostPublishPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BlogCategory model
   */
  interface BlogCategoryFieldRefs {
    readonly categoryName: FieldRef<"BlogCategory", 'String'>
    readonly userId: FieldRef<"BlogCategory", 'String'>
    readonly privateCount: FieldRef<"BlogCategory", 'BigInt'>
    readonly publicCount: FieldRef<"BlogCategory", 'BigInt'>
    readonly categoryDepth: FieldRef<"BlogCategory", 'Int'>
    readonly upperCategoryName: FieldRef<"BlogCategory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * BlogCategory findUnique
   */
  export type BlogCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogCategory
     */
    select?: BlogCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogCategory
     */
    omit?: BlogCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogCategoryInclude<ExtArgs> | null
    /**
     * Filter, which BlogCategory to fetch.
     */
    where: BlogCategoryWhereUniqueInput
  }

  /**
   * BlogCategory findUniqueOrThrow
   */
  export type BlogCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogCategory
     */
    select?: BlogCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogCategory
     */
    omit?: BlogCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogCategoryInclude<ExtArgs> | null
    /**
     * Filter, which BlogCategory to fetch.
     */
    where: BlogCategoryWhereUniqueInput
  }

  /**
   * BlogCategory findFirst
   */
  export type BlogCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogCategory
     */
    select?: BlogCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogCategory
     */
    omit?: BlogCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogCategoryInclude<ExtArgs> | null
    /**
     * Filter, which BlogCategory to fetch.
     */
    where?: BlogCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogCategories to fetch.
     */
    orderBy?: BlogCategoryOrderByWithRelationInput | BlogCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlogCategories.
     */
    cursor?: BlogCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlogCategories.
     */
    distinct?: BlogCategoryScalarFieldEnum | BlogCategoryScalarFieldEnum[]
  }

  /**
   * BlogCategory findFirstOrThrow
   */
  export type BlogCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogCategory
     */
    select?: BlogCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogCategory
     */
    omit?: BlogCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogCategoryInclude<ExtArgs> | null
    /**
     * Filter, which BlogCategory to fetch.
     */
    where?: BlogCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogCategories to fetch.
     */
    orderBy?: BlogCategoryOrderByWithRelationInput | BlogCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlogCategories.
     */
    cursor?: BlogCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlogCategories.
     */
    distinct?: BlogCategoryScalarFieldEnum | BlogCategoryScalarFieldEnum[]
  }

  /**
   * BlogCategory findMany
   */
  export type BlogCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogCategory
     */
    select?: BlogCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogCategory
     */
    omit?: BlogCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogCategoryInclude<ExtArgs> | null
    /**
     * Filter, which BlogCategories to fetch.
     */
    where?: BlogCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogCategories to fetch.
     */
    orderBy?: BlogCategoryOrderByWithRelationInput | BlogCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BlogCategories.
     */
    cursor?: BlogCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogCategories.
     */
    skip?: number
    distinct?: BlogCategoryScalarFieldEnum | BlogCategoryScalarFieldEnum[]
  }

  /**
   * BlogCategory create
   */
  export type BlogCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogCategory
     */
    select?: BlogCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogCategory
     */
    omit?: BlogCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a BlogCategory.
     */
    data: XOR<BlogCategoryCreateInput, BlogCategoryUncheckedCreateInput>
  }

  /**
   * BlogCategory createMany
   */
  export type BlogCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BlogCategories.
     */
    data: BlogCategoryCreateManyInput | BlogCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BlogCategory createManyAndReturn
   */
  export type BlogCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogCategory
     */
    select?: BlogCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlogCategory
     */
    omit?: BlogCategoryOmit<ExtArgs> | null
    /**
     * The data used to create many BlogCategories.
     */
    data: BlogCategoryCreateManyInput | BlogCategoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogCategoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BlogCategory update
   */
  export type BlogCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogCategory
     */
    select?: BlogCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogCategory
     */
    omit?: BlogCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a BlogCategory.
     */
    data: XOR<BlogCategoryUpdateInput, BlogCategoryUncheckedUpdateInput>
    /**
     * Choose, which BlogCategory to update.
     */
    where: BlogCategoryWhereUniqueInput
  }

  /**
   * BlogCategory updateMany
   */
  export type BlogCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BlogCategories.
     */
    data: XOR<BlogCategoryUpdateManyMutationInput, BlogCategoryUncheckedUpdateManyInput>
    /**
     * Filter which BlogCategories to update
     */
    where?: BlogCategoryWhereInput
    /**
     * Limit how many BlogCategories to update.
     */
    limit?: number
  }

  /**
   * BlogCategory updateManyAndReturn
   */
  export type BlogCategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogCategory
     */
    select?: BlogCategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlogCategory
     */
    omit?: BlogCategoryOmit<ExtArgs> | null
    /**
     * The data used to update BlogCategories.
     */
    data: XOR<BlogCategoryUpdateManyMutationInput, BlogCategoryUncheckedUpdateManyInput>
    /**
     * Filter which BlogCategories to update
     */
    where?: BlogCategoryWhereInput
    /**
     * Limit how many BlogCategories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogCategoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BlogCategory upsert
   */
  export type BlogCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogCategory
     */
    select?: BlogCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogCategory
     */
    omit?: BlogCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the BlogCategory to update in case it exists.
     */
    where: BlogCategoryWhereUniqueInput
    /**
     * In case the BlogCategory found by the `where` argument doesn't exist, create a new BlogCategory with this data.
     */
    create: XOR<BlogCategoryCreateInput, BlogCategoryUncheckedCreateInput>
    /**
     * In case the BlogCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlogCategoryUpdateInput, BlogCategoryUncheckedUpdateInput>
  }

  /**
   * BlogCategory delete
   */
  export type BlogCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogCategory
     */
    select?: BlogCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogCategory
     */
    omit?: BlogCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogCategoryInclude<ExtArgs> | null
    /**
     * Filter which BlogCategory to delete.
     */
    where: BlogCategoryWhereUniqueInput
  }

  /**
   * BlogCategory deleteMany
   */
  export type BlogCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlogCategories to delete
     */
    where?: BlogCategoryWhereInput
    /**
     * Limit how many BlogCategories to delete.
     */
    limit?: number
  }

  /**
   * BlogCategory.upperCategory
   */
  export type BlogCategory$upperCategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogCategory
     */
    select?: BlogCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogCategory
     */
    omit?: BlogCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogCategoryInclude<ExtArgs> | null
    where?: BlogCategoryWhereInput
  }

  /**
   * BlogCategory.lowerCategories
   */
  export type BlogCategory$lowerCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogCategory
     */
    select?: BlogCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogCategory
     */
    omit?: BlogCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogCategoryInclude<ExtArgs> | null
    where?: BlogCategoryWhereInput
    orderBy?: BlogCategoryOrderByWithRelationInput | BlogCategoryOrderByWithRelationInput[]
    cursor?: BlogCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlogCategoryScalarFieldEnum | BlogCategoryScalarFieldEnum[]
  }

  /**
   * BlogCategory.blogPostPublish
   */
  export type BlogCategory$blogPostPublishArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostPublish
     */
    select?: BlogPostPublishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPostPublish
     */
    omit?: BlogPostPublishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostPublishInclude<ExtArgs> | null
    where?: BlogPostPublishWhereInput
    orderBy?: BlogPostPublishOrderByWithRelationInput | BlogPostPublishOrderByWithRelationInput[]
    cursor?: BlogPostPublishWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlogPostPublishScalarFieldEnum | BlogPostPublishScalarFieldEnum[]
  }

  /**
   * BlogCategory without action
   */
  export type BlogCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogCategory
     */
    select?: BlogCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogCategory
     */
    omit?: BlogCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogCategoryInclude<ExtArgs> | null
  }


  /**
   * Model BlogPostMeta
   */

  export type AggregateBlogPostMeta = {
    _count: BlogPostMetaCountAggregateOutputType | null
    _avg: BlogPostMetaAvgAggregateOutputType | null
    _sum: BlogPostMetaSumAggregateOutputType | null
    _min: BlogPostMetaMinAggregateOutputType | null
    _max: BlogPostMetaMaxAggregateOutputType | null
  }

  export type BlogPostMetaAvgAggregateOutputType = {
    postViewCount: number | null
    postLikeCount: number | null
  }

  export type BlogPostMetaSumAggregateOutputType = {
    postViewCount: number | null
    postLikeCount: number | null
  }

  export type BlogPostMetaMinAggregateOutputType = {
    postHash: string | null
    userId: string | null
    postDelete: boolean | null
    postViewCount: number | null
    postLikeCount: number | null
    postMainImageUrl: string | null
  }

  export type BlogPostMetaMaxAggregateOutputType = {
    postHash: string | null
    userId: string | null
    postDelete: boolean | null
    postViewCount: number | null
    postLikeCount: number | null
    postMainImageUrl: string | null
  }

  export type BlogPostMetaCountAggregateOutputType = {
    postHash: number
    userId: number
    postDelete: number
    postViewCount: number
    postLikeCount: number
    postMainImageUrl: number
    _all: number
  }


  export type BlogPostMetaAvgAggregateInputType = {
    postViewCount?: true
    postLikeCount?: true
  }

  export type BlogPostMetaSumAggregateInputType = {
    postViewCount?: true
    postLikeCount?: true
  }

  export type BlogPostMetaMinAggregateInputType = {
    postHash?: true
    userId?: true
    postDelete?: true
    postViewCount?: true
    postLikeCount?: true
    postMainImageUrl?: true
  }

  export type BlogPostMetaMaxAggregateInputType = {
    postHash?: true
    userId?: true
    postDelete?: true
    postViewCount?: true
    postLikeCount?: true
    postMainImageUrl?: true
  }

  export type BlogPostMetaCountAggregateInputType = {
    postHash?: true
    userId?: true
    postDelete?: true
    postViewCount?: true
    postLikeCount?: true
    postMainImageUrl?: true
    _all?: true
  }

  export type BlogPostMetaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlogPostMeta to aggregate.
     */
    where?: BlogPostMetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogPostMetas to fetch.
     */
    orderBy?: BlogPostMetaOrderByWithRelationInput | BlogPostMetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlogPostMetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogPostMetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogPostMetas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BlogPostMetas
    **/
    _count?: true | BlogPostMetaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BlogPostMetaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BlogPostMetaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlogPostMetaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlogPostMetaMaxAggregateInputType
  }

  export type GetBlogPostMetaAggregateType<T extends BlogPostMetaAggregateArgs> = {
        [P in keyof T & keyof AggregateBlogPostMeta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlogPostMeta[P]>
      : GetScalarType<T[P], AggregateBlogPostMeta[P]>
  }




  export type BlogPostMetaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogPostMetaWhereInput
    orderBy?: BlogPostMetaOrderByWithAggregationInput | BlogPostMetaOrderByWithAggregationInput[]
    by: BlogPostMetaScalarFieldEnum[] | BlogPostMetaScalarFieldEnum
    having?: BlogPostMetaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlogPostMetaCountAggregateInputType | true
    _avg?: BlogPostMetaAvgAggregateInputType
    _sum?: BlogPostMetaSumAggregateInputType
    _min?: BlogPostMetaMinAggregateInputType
    _max?: BlogPostMetaMaxAggregateInputType
  }

  export type BlogPostMetaGroupByOutputType = {
    postHash: string
    userId: string
    postDelete: boolean
    postViewCount: number
    postLikeCount: number
    postMainImageUrl: string | null
    _count: BlogPostMetaCountAggregateOutputType | null
    _avg: BlogPostMetaAvgAggregateOutputType | null
    _sum: BlogPostMetaSumAggregateOutputType | null
    _min: BlogPostMetaMinAggregateOutputType | null
    _max: BlogPostMetaMaxAggregateOutputType | null
  }

  type GetBlogPostMetaGroupByPayload<T extends BlogPostMetaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlogPostMetaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlogPostMetaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlogPostMetaGroupByOutputType[P]>
            : GetScalarType<T[P], BlogPostMetaGroupByOutputType[P]>
        }
      >
    >


  export type BlogPostMetaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    postHash?: boolean
    userId?: boolean
    postDelete?: boolean
    postViewCount?: boolean
    postLikeCount?: boolean
    postMainImageUrl?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    extraFile?: boolean | BlogPostMeta$extraFileArgs<ExtArgs>
    blogPostTag?: boolean | BlogPostMeta$blogPostTagArgs<ExtArgs>
    blogPost?: boolean | BlogPostMeta$blogPostArgs<ExtArgs>
    _count?: boolean | BlogPostMetaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blogPostMeta"]>

  export type BlogPostMetaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    postHash?: boolean
    userId?: boolean
    postDelete?: boolean
    postViewCount?: boolean
    postLikeCount?: boolean
    postMainImageUrl?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blogPostMeta"]>

  export type BlogPostMetaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    postHash?: boolean
    userId?: boolean
    postDelete?: boolean
    postViewCount?: boolean
    postLikeCount?: boolean
    postMainImageUrl?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blogPostMeta"]>

  export type BlogPostMetaSelectScalar = {
    postHash?: boolean
    userId?: boolean
    postDelete?: boolean
    postViewCount?: boolean
    postLikeCount?: boolean
    postMainImageUrl?: boolean
  }

  export type BlogPostMetaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"postHash" | "userId" | "postDelete" | "postViewCount" | "postLikeCount" | "postMainImageUrl", ExtArgs["result"]["blogPostMeta"]>
  export type BlogPostMetaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    extraFile?: boolean | BlogPostMeta$extraFileArgs<ExtArgs>
    blogPostTag?: boolean | BlogPostMeta$blogPostTagArgs<ExtArgs>
    blogPost?: boolean | BlogPostMeta$blogPostArgs<ExtArgs>
    _count?: boolean | BlogPostMetaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BlogPostMetaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BlogPostMetaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BlogPostMetaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BlogPostMeta"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      extraFile: Prisma.$BlogExtraFilePayload<ExtArgs>[]
      blogPostTag: Prisma.$BlogPostTagPayload<ExtArgs>[]
      blogPost: Prisma.$BlogPostPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      postHash: string
      userId: string
      postDelete: boolean
      postViewCount: number
      postLikeCount: number
      postMainImageUrl: string | null
    }, ExtArgs["result"]["blogPostMeta"]>
    composites: {}
  }

  type BlogPostMetaGetPayload<S extends boolean | null | undefined | BlogPostMetaDefaultArgs> = $Result.GetResult<Prisma.$BlogPostMetaPayload, S>

  type BlogPostMetaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BlogPostMetaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BlogPostMetaCountAggregateInputType | true
    }

  export interface BlogPostMetaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BlogPostMeta'], meta: { name: 'BlogPostMeta' } }
    /**
     * Find zero or one BlogPostMeta that matches the filter.
     * @param {BlogPostMetaFindUniqueArgs} args - Arguments to find a BlogPostMeta
     * @example
     * // Get one BlogPostMeta
     * const blogPostMeta = await prisma.blogPostMeta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BlogPostMetaFindUniqueArgs>(args: SelectSubset<T, BlogPostMetaFindUniqueArgs<ExtArgs>>): Prisma__BlogPostMetaClient<$Result.GetResult<Prisma.$BlogPostMetaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BlogPostMeta that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BlogPostMetaFindUniqueOrThrowArgs} args - Arguments to find a BlogPostMeta
     * @example
     * // Get one BlogPostMeta
     * const blogPostMeta = await prisma.blogPostMeta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BlogPostMetaFindUniqueOrThrowArgs>(args: SelectSubset<T, BlogPostMetaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BlogPostMetaClient<$Result.GetResult<Prisma.$BlogPostMetaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlogPostMeta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostMetaFindFirstArgs} args - Arguments to find a BlogPostMeta
     * @example
     * // Get one BlogPostMeta
     * const blogPostMeta = await prisma.blogPostMeta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BlogPostMetaFindFirstArgs>(args?: SelectSubset<T, BlogPostMetaFindFirstArgs<ExtArgs>>): Prisma__BlogPostMetaClient<$Result.GetResult<Prisma.$BlogPostMetaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlogPostMeta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostMetaFindFirstOrThrowArgs} args - Arguments to find a BlogPostMeta
     * @example
     * // Get one BlogPostMeta
     * const blogPostMeta = await prisma.blogPostMeta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BlogPostMetaFindFirstOrThrowArgs>(args?: SelectSubset<T, BlogPostMetaFindFirstOrThrowArgs<ExtArgs>>): Prisma__BlogPostMetaClient<$Result.GetResult<Prisma.$BlogPostMetaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BlogPostMetas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostMetaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BlogPostMetas
     * const blogPostMetas = await prisma.blogPostMeta.findMany()
     * 
     * // Get first 10 BlogPostMetas
     * const blogPostMetas = await prisma.blogPostMeta.findMany({ take: 10 })
     * 
     * // Only select the `postHash`
     * const blogPostMetaWithPostHashOnly = await prisma.blogPostMeta.findMany({ select: { postHash: true } })
     * 
     */
    findMany<T extends BlogPostMetaFindManyArgs>(args?: SelectSubset<T, BlogPostMetaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPostMetaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BlogPostMeta.
     * @param {BlogPostMetaCreateArgs} args - Arguments to create a BlogPostMeta.
     * @example
     * // Create one BlogPostMeta
     * const BlogPostMeta = await prisma.blogPostMeta.create({
     *   data: {
     *     // ... data to create a BlogPostMeta
     *   }
     * })
     * 
     */
    create<T extends BlogPostMetaCreateArgs>(args: SelectSubset<T, BlogPostMetaCreateArgs<ExtArgs>>): Prisma__BlogPostMetaClient<$Result.GetResult<Prisma.$BlogPostMetaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BlogPostMetas.
     * @param {BlogPostMetaCreateManyArgs} args - Arguments to create many BlogPostMetas.
     * @example
     * // Create many BlogPostMetas
     * const blogPostMeta = await prisma.blogPostMeta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BlogPostMetaCreateManyArgs>(args?: SelectSubset<T, BlogPostMetaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BlogPostMetas and returns the data saved in the database.
     * @param {BlogPostMetaCreateManyAndReturnArgs} args - Arguments to create many BlogPostMetas.
     * @example
     * // Create many BlogPostMetas
     * const blogPostMeta = await prisma.blogPostMeta.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BlogPostMetas and only return the `postHash`
     * const blogPostMetaWithPostHashOnly = await prisma.blogPostMeta.createManyAndReturn({
     *   select: { postHash: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BlogPostMetaCreateManyAndReturnArgs>(args?: SelectSubset<T, BlogPostMetaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPostMetaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BlogPostMeta.
     * @param {BlogPostMetaDeleteArgs} args - Arguments to delete one BlogPostMeta.
     * @example
     * // Delete one BlogPostMeta
     * const BlogPostMeta = await prisma.blogPostMeta.delete({
     *   where: {
     *     // ... filter to delete one BlogPostMeta
     *   }
     * })
     * 
     */
    delete<T extends BlogPostMetaDeleteArgs>(args: SelectSubset<T, BlogPostMetaDeleteArgs<ExtArgs>>): Prisma__BlogPostMetaClient<$Result.GetResult<Prisma.$BlogPostMetaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BlogPostMeta.
     * @param {BlogPostMetaUpdateArgs} args - Arguments to update one BlogPostMeta.
     * @example
     * // Update one BlogPostMeta
     * const blogPostMeta = await prisma.blogPostMeta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BlogPostMetaUpdateArgs>(args: SelectSubset<T, BlogPostMetaUpdateArgs<ExtArgs>>): Prisma__BlogPostMetaClient<$Result.GetResult<Prisma.$BlogPostMetaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BlogPostMetas.
     * @param {BlogPostMetaDeleteManyArgs} args - Arguments to filter BlogPostMetas to delete.
     * @example
     * // Delete a few BlogPostMetas
     * const { count } = await prisma.blogPostMeta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BlogPostMetaDeleteManyArgs>(args?: SelectSubset<T, BlogPostMetaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlogPostMetas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostMetaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BlogPostMetas
     * const blogPostMeta = await prisma.blogPostMeta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BlogPostMetaUpdateManyArgs>(args: SelectSubset<T, BlogPostMetaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlogPostMetas and returns the data updated in the database.
     * @param {BlogPostMetaUpdateManyAndReturnArgs} args - Arguments to update many BlogPostMetas.
     * @example
     * // Update many BlogPostMetas
     * const blogPostMeta = await prisma.blogPostMeta.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BlogPostMetas and only return the `postHash`
     * const blogPostMetaWithPostHashOnly = await prisma.blogPostMeta.updateManyAndReturn({
     *   select: { postHash: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BlogPostMetaUpdateManyAndReturnArgs>(args: SelectSubset<T, BlogPostMetaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPostMetaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BlogPostMeta.
     * @param {BlogPostMetaUpsertArgs} args - Arguments to update or create a BlogPostMeta.
     * @example
     * // Update or create a BlogPostMeta
     * const blogPostMeta = await prisma.blogPostMeta.upsert({
     *   create: {
     *     // ... data to create a BlogPostMeta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BlogPostMeta we want to update
     *   }
     * })
     */
    upsert<T extends BlogPostMetaUpsertArgs>(args: SelectSubset<T, BlogPostMetaUpsertArgs<ExtArgs>>): Prisma__BlogPostMetaClient<$Result.GetResult<Prisma.$BlogPostMetaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BlogPostMetas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostMetaCountArgs} args - Arguments to filter BlogPostMetas to count.
     * @example
     * // Count the number of BlogPostMetas
     * const count = await prisma.blogPostMeta.count({
     *   where: {
     *     // ... the filter for the BlogPostMetas we want to count
     *   }
     * })
    **/
    count<T extends BlogPostMetaCountArgs>(
      args?: Subset<T, BlogPostMetaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlogPostMetaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BlogPostMeta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostMetaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BlogPostMetaAggregateArgs>(args: Subset<T, BlogPostMetaAggregateArgs>): Prisma.PrismaPromise<GetBlogPostMetaAggregateType<T>>

    /**
     * Group by BlogPostMeta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostMetaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BlogPostMetaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlogPostMetaGroupByArgs['orderBy'] }
        : { orderBy?: BlogPostMetaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BlogPostMetaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlogPostMetaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BlogPostMeta model
   */
  readonly fields: BlogPostMetaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BlogPostMeta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlogPostMetaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    extraFile<T extends BlogPostMeta$extraFileArgs<ExtArgs> = {}>(args?: Subset<T, BlogPostMeta$extraFileArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogExtraFilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    blogPostTag<T extends BlogPostMeta$blogPostTagArgs<ExtArgs> = {}>(args?: Subset<T, BlogPostMeta$blogPostTagArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPostTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    blogPost<T extends BlogPostMeta$blogPostArgs<ExtArgs> = {}>(args?: Subset<T, BlogPostMeta$blogPostArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BlogPostMeta model
   */
  interface BlogPostMetaFieldRefs {
    readonly postHash: FieldRef<"BlogPostMeta", 'String'>
    readonly userId: FieldRef<"BlogPostMeta", 'String'>
    readonly postDelete: FieldRef<"BlogPostMeta", 'Boolean'>
    readonly postViewCount: FieldRef<"BlogPostMeta", 'Int'>
    readonly postLikeCount: FieldRef<"BlogPostMeta", 'Int'>
    readonly postMainImageUrl: FieldRef<"BlogPostMeta", 'String'>
  }
    

  // Custom InputTypes
  /**
   * BlogPostMeta findUnique
   */
  export type BlogPostMetaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostMeta
     */
    select?: BlogPostMetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPostMeta
     */
    omit?: BlogPostMetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostMetaInclude<ExtArgs> | null
    /**
     * Filter, which BlogPostMeta to fetch.
     */
    where: BlogPostMetaWhereUniqueInput
  }

  /**
   * BlogPostMeta findUniqueOrThrow
   */
  export type BlogPostMetaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostMeta
     */
    select?: BlogPostMetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPostMeta
     */
    omit?: BlogPostMetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostMetaInclude<ExtArgs> | null
    /**
     * Filter, which BlogPostMeta to fetch.
     */
    where: BlogPostMetaWhereUniqueInput
  }

  /**
   * BlogPostMeta findFirst
   */
  export type BlogPostMetaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostMeta
     */
    select?: BlogPostMetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPostMeta
     */
    omit?: BlogPostMetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostMetaInclude<ExtArgs> | null
    /**
     * Filter, which BlogPostMeta to fetch.
     */
    where?: BlogPostMetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogPostMetas to fetch.
     */
    orderBy?: BlogPostMetaOrderByWithRelationInput | BlogPostMetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlogPostMetas.
     */
    cursor?: BlogPostMetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogPostMetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogPostMetas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlogPostMetas.
     */
    distinct?: BlogPostMetaScalarFieldEnum | BlogPostMetaScalarFieldEnum[]
  }

  /**
   * BlogPostMeta findFirstOrThrow
   */
  export type BlogPostMetaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostMeta
     */
    select?: BlogPostMetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPostMeta
     */
    omit?: BlogPostMetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostMetaInclude<ExtArgs> | null
    /**
     * Filter, which BlogPostMeta to fetch.
     */
    where?: BlogPostMetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogPostMetas to fetch.
     */
    orderBy?: BlogPostMetaOrderByWithRelationInput | BlogPostMetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlogPostMetas.
     */
    cursor?: BlogPostMetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogPostMetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogPostMetas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlogPostMetas.
     */
    distinct?: BlogPostMetaScalarFieldEnum | BlogPostMetaScalarFieldEnum[]
  }

  /**
   * BlogPostMeta findMany
   */
  export type BlogPostMetaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostMeta
     */
    select?: BlogPostMetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPostMeta
     */
    omit?: BlogPostMetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostMetaInclude<ExtArgs> | null
    /**
     * Filter, which BlogPostMetas to fetch.
     */
    where?: BlogPostMetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogPostMetas to fetch.
     */
    orderBy?: BlogPostMetaOrderByWithRelationInput | BlogPostMetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BlogPostMetas.
     */
    cursor?: BlogPostMetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogPostMetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogPostMetas.
     */
    skip?: number
    distinct?: BlogPostMetaScalarFieldEnum | BlogPostMetaScalarFieldEnum[]
  }

  /**
   * BlogPostMeta create
   */
  export type BlogPostMetaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostMeta
     */
    select?: BlogPostMetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPostMeta
     */
    omit?: BlogPostMetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostMetaInclude<ExtArgs> | null
    /**
     * The data needed to create a BlogPostMeta.
     */
    data: XOR<BlogPostMetaCreateInput, BlogPostMetaUncheckedCreateInput>
  }

  /**
   * BlogPostMeta createMany
   */
  export type BlogPostMetaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BlogPostMetas.
     */
    data: BlogPostMetaCreateManyInput | BlogPostMetaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BlogPostMeta createManyAndReturn
   */
  export type BlogPostMetaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostMeta
     */
    select?: BlogPostMetaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPostMeta
     */
    omit?: BlogPostMetaOmit<ExtArgs> | null
    /**
     * The data used to create many BlogPostMetas.
     */
    data: BlogPostMetaCreateManyInput | BlogPostMetaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostMetaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BlogPostMeta update
   */
  export type BlogPostMetaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostMeta
     */
    select?: BlogPostMetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPostMeta
     */
    omit?: BlogPostMetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostMetaInclude<ExtArgs> | null
    /**
     * The data needed to update a BlogPostMeta.
     */
    data: XOR<BlogPostMetaUpdateInput, BlogPostMetaUncheckedUpdateInput>
    /**
     * Choose, which BlogPostMeta to update.
     */
    where: BlogPostMetaWhereUniqueInput
  }

  /**
   * BlogPostMeta updateMany
   */
  export type BlogPostMetaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BlogPostMetas.
     */
    data: XOR<BlogPostMetaUpdateManyMutationInput, BlogPostMetaUncheckedUpdateManyInput>
    /**
     * Filter which BlogPostMetas to update
     */
    where?: BlogPostMetaWhereInput
    /**
     * Limit how many BlogPostMetas to update.
     */
    limit?: number
  }

  /**
   * BlogPostMeta updateManyAndReturn
   */
  export type BlogPostMetaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostMeta
     */
    select?: BlogPostMetaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPostMeta
     */
    omit?: BlogPostMetaOmit<ExtArgs> | null
    /**
     * The data used to update BlogPostMetas.
     */
    data: XOR<BlogPostMetaUpdateManyMutationInput, BlogPostMetaUncheckedUpdateManyInput>
    /**
     * Filter which BlogPostMetas to update
     */
    where?: BlogPostMetaWhereInput
    /**
     * Limit how many BlogPostMetas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostMetaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BlogPostMeta upsert
   */
  export type BlogPostMetaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostMeta
     */
    select?: BlogPostMetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPostMeta
     */
    omit?: BlogPostMetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostMetaInclude<ExtArgs> | null
    /**
     * The filter to search for the BlogPostMeta to update in case it exists.
     */
    where: BlogPostMetaWhereUniqueInput
    /**
     * In case the BlogPostMeta found by the `where` argument doesn't exist, create a new BlogPostMeta with this data.
     */
    create: XOR<BlogPostMetaCreateInput, BlogPostMetaUncheckedCreateInput>
    /**
     * In case the BlogPostMeta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlogPostMetaUpdateInput, BlogPostMetaUncheckedUpdateInput>
  }

  /**
   * BlogPostMeta delete
   */
  export type BlogPostMetaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostMeta
     */
    select?: BlogPostMetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPostMeta
     */
    omit?: BlogPostMetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostMetaInclude<ExtArgs> | null
    /**
     * Filter which BlogPostMeta to delete.
     */
    where: BlogPostMetaWhereUniqueInput
  }

  /**
   * BlogPostMeta deleteMany
   */
  export type BlogPostMetaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlogPostMetas to delete
     */
    where?: BlogPostMetaWhereInput
    /**
     * Limit how many BlogPostMetas to delete.
     */
    limit?: number
  }

  /**
   * BlogPostMeta.extraFile
   */
  export type BlogPostMeta$extraFileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogExtraFile
     */
    select?: BlogExtraFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogExtraFile
     */
    omit?: BlogExtraFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogExtraFileInclude<ExtArgs> | null
    where?: BlogExtraFileWhereInput
    orderBy?: BlogExtraFileOrderByWithRelationInput | BlogExtraFileOrderByWithRelationInput[]
    cursor?: BlogExtraFileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlogExtraFileScalarFieldEnum | BlogExtraFileScalarFieldEnum[]
  }

  /**
   * BlogPostMeta.blogPostTag
   */
  export type BlogPostMeta$blogPostTagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostTag
     */
    select?: BlogPostTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPostTag
     */
    omit?: BlogPostTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostTagInclude<ExtArgs> | null
    where?: BlogPostTagWhereInput
    orderBy?: BlogPostTagOrderByWithRelationInput | BlogPostTagOrderByWithRelationInput[]
    cursor?: BlogPostTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlogPostTagScalarFieldEnum | BlogPostTagScalarFieldEnum[]
  }

  /**
   * BlogPostMeta.blogPost
   */
  export type BlogPostMeta$blogPostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    where?: BlogPostWhereInput
    orderBy?: BlogPostOrderByWithRelationInput | BlogPostOrderByWithRelationInput[]
    cursor?: BlogPostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlogPostScalarFieldEnum | BlogPostScalarFieldEnum[]
  }

  /**
   * BlogPostMeta without action
   */
  export type BlogPostMetaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostMeta
     */
    select?: BlogPostMetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPostMeta
     */
    omit?: BlogPostMetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostMetaInclude<ExtArgs> | null
  }


  /**
   * Model BlogExtraFile
   */

  export type AggregateBlogExtraFile = {
    _count: BlogExtraFileCountAggregateOutputType | null
    _avg: BlogExtraFileAvgAggregateOutputType | null
    _sum: BlogExtraFileSumAggregateOutputType | null
    _min: BlogExtraFileMinAggregateOutputType | null
    _max: BlogExtraFileMaxAggregateOutputType | null
  }

  export type BlogExtraFileAvgAggregateOutputType = {
    extraFileId: number | null
  }

  export type BlogExtraFileSumAggregateOutputType = {
    extraFileId: number | null
  }

  export type BlogExtraFileMinAggregateOutputType = {
    extraFileId: number | null
    postHash: string | null
    userId: string | null
    extraFileUrl: string | null
    extraFileAlt: string | null
  }

  export type BlogExtraFileMaxAggregateOutputType = {
    extraFileId: number | null
    postHash: string | null
    userId: string | null
    extraFileUrl: string | null
    extraFileAlt: string | null
  }

  export type BlogExtraFileCountAggregateOutputType = {
    extraFileId: number
    postHash: number
    userId: number
    extraFileUrl: number
    extraFileAlt: number
    _all: number
  }


  export type BlogExtraFileAvgAggregateInputType = {
    extraFileId?: true
  }

  export type BlogExtraFileSumAggregateInputType = {
    extraFileId?: true
  }

  export type BlogExtraFileMinAggregateInputType = {
    extraFileId?: true
    postHash?: true
    userId?: true
    extraFileUrl?: true
    extraFileAlt?: true
  }

  export type BlogExtraFileMaxAggregateInputType = {
    extraFileId?: true
    postHash?: true
    userId?: true
    extraFileUrl?: true
    extraFileAlt?: true
  }

  export type BlogExtraFileCountAggregateInputType = {
    extraFileId?: true
    postHash?: true
    userId?: true
    extraFileUrl?: true
    extraFileAlt?: true
    _all?: true
  }

  export type BlogExtraFileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlogExtraFile to aggregate.
     */
    where?: BlogExtraFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogExtraFiles to fetch.
     */
    orderBy?: BlogExtraFileOrderByWithRelationInput | BlogExtraFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlogExtraFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogExtraFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogExtraFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BlogExtraFiles
    **/
    _count?: true | BlogExtraFileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BlogExtraFileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BlogExtraFileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlogExtraFileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlogExtraFileMaxAggregateInputType
  }

  export type GetBlogExtraFileAggregateType<T extends BlogExtraFileAggregateArgs> = {
        [P in keyof T & keyof AggregateBlogExtraFile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlogExtraFile[P]>
      : GetScalarType<T[P], AggregateBlogExtraFile[P]>
  }




  export type BlogExtraFileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogExtraFileWhereInput
    orderBy?: BlogExtraFileOrderByWithAggregationInput | BlogExtraFileOrderByWithAggregationInput[]
    by: BlogExtraFileScalarFieldEnum[] | BlogExtraFileScalarFieldEnum
    having?: BlogExtraFileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlogExtraFileCountAggregateInputType | true
    _avg?: BlogExtraFileAvgAggregateInputType
    _sum?: BlogExtraFileSumAggregateInputType
    _min?: BlogExtraFileMinAggregateInputType
    _max?: BlogExtraFileMaxAggregateInputType
  }

  export type BlogExtraFileGroupByOutputType = {
    extraFileId: number
    postHash: string
    userId: string
    extraFileUrl: string
    extraFileAlt: string
    _count: BlogExtraFileCountAggregateOutputType | null
    _avg: BlogExtraFileAvgAggregateOutputType | null
    _sum: BlogExtraFileSumAggregateOutputType | null
    _min: BlogExtraFileMinAggregateOutputType | null
    _max: BlogExtraFileMaxAggregateOutputType | null
  }

  type GetBlogExtraFileGroupByPayload<T extends BlogExtraFileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlogExtraFileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlogExtraFileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlogExtraFileGroupByOutputType[P]>
            : GetScalarType<T[P], BlogExtraFileGroupByOutputType[P]>
        }
      >
    >


  export type BlogExtraFileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    extraFileId?: boolean
    postHash?: boolean
    userId?: boolean
    extraFileUrl?: boolean
    extraFileAlt?: boolean
    blogPostMeta?: boolean | BlogPostMetaDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blogExtraFile"]>

  export type BlogExtraFileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    extraFileId?: boolean
    postHash?: boolean
    userId?: boolean
    extraFileUrl?: boolean
    extraFileAlt?: boolean
    blogPostMeta?: boolean | BlogPostMetaDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blogExtraFile"]>

  export type BlogExtraFileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    extraFileId?: boolean
    postHash?: boolean
    userId?: boolean
    extraFileUrl?: boolean
    extraFileAlt?: boolean
    blogPostMeta?: boolean | BlogPostMetaDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blogExtraFile"]>

  export type BlogExtraFileSelectScalar = {
    extraFileId?: boolean
    postHash?: boolean
    userId?: boolean
    extraFileUrl?: boolean
    extraFileAlt?: boolean
  }

  export type BlogExtraFileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"extraFileId" | "postHash" | "userId" | "extraFileUrl" | "extraFileAlt", ExtArgs["result"]["blogExtraFile"]>
  export type BlogExtraFileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blogPostMeta?: boolean | BlogPostMetaDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BlogExtraFileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blogPostMeta?: boolean | BlogPostMetaDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BlogExtraFileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blogPostMeta?: boolean | BlogPostMetaDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BlogExtraFilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BlogExtraFile"
    objects: {
      blogPostMeta: Prisma.$BlogPostMetaPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      extraFileId: number
      postHash: string
      userId: string
      extraFileUrl: string
      extraFileAlt: string
    }, ExtArgs["result"]["blogExtraFile"]>
    composites: {}
  }

  type BlogExtraFileGetPayload<S extends boolean | null | undefined | BlogExtraFileDefaultArgs> = $Result.GetResult<Prisma.$BlogExtraFilePayload, S>

  type BlogExtraFileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BlogExtraFileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BlogExtraFileCountAggregateInputType | true
    }

  export interface BlogExtraFileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BlogExtraFile'], meta: { name: 'BlogExtraFile' } }
    /**
     * Find zero or one BlogExtraFile that matches the filter.
     * @param {BlogExtraFileFindUniqueArgs} args - Arguments to find a BlogExtraFile
     * @example
     * // Get one BlogExtraFile
     * const blogExtraFile = await prisma.blogExtraFile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BlogExtraFileFindUniqueArgs>(args: SelectSubset<T, BlogExtraFileFindUniqueArgs<ExtArgs>>): Prisma__BlogExtraFileClient<$Result.GetResult<Prisma.$BlogExtraFilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BlogExtraFile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BlogExtraFileFindUniqueOrThrowArgs} args - Arguments to find a BlogExtraFile
     * @example
     * // Get one BlogExtraFile
     * const blogExtraFile = await prisma.blogExtraFile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BlogExtraFileFindUniqueOrThrowArgs>(args: SelectSubset<T, BlogExtraFileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BlogExtraFileClient<$Result.GetResult<Prisma.$BlogExtraFilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlogExtraFile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogExtraFileFindFirstArgs} args - Arguments to find a BlogExtraFile
     * @example
     * // Get one BlogExtraFile
     * const blogExtraFile = await prisma.blogExtraFile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BlogExtraFileFindFirstArgs>(args?: SelectSubset<T, BlogExtraFileFindFirstArgs<ExtArgs>>): Prisma__BlogExtraFileClient<$Result.GetResult<Prisma.$BlogExtraFilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlogExtraFile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogExtraFileFindFirstOrThrowArgs} args - Arguments to find a BlogExtraFile
     * @example
     * // Get one BlogExtraFile
     * const blogExtraFile = await prisma.blogExtraFile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BlogExtraFileFindFirstOrThrowArgs>(args?: SelectSubset<T, BlogExtraFileFindFirstOrThrowArgs<ExtArgs>>): Prisma__BlogExtraFileClient<$Result.GetResult<Prisma.$BlogExtraFilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BlogExtraFiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogExtraFileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BlogExtraFiles
     * const blogExtraFiles = await prisma.blogExtraFile.findMany()
     * 
     * // Get first 10 BlogExtraFiles
     * const blogExtraFiles = await prisma.blogExtraFile.findMany({ take: 10 })
     * 
     * // Only select the `extraFileId`
     * const blogExtraFileWithExtraFileIdOnly = await prisma.blogExtraFile.findMany({ select: { extraFileId: true } })
     * 
     */
    findMany<T extends BlogExtraFileFindManyArgs>(args?: SelectSubset<T, BlogExtraFileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogExtraFilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BlogExtraFile.
     * @param {BlogExtraFileCreateArgs} args - Arguments to create a BlogExtraFile.
     * @example
     * // Create one BlogExtraFile
     * const BlogExtraFile = await prisma.blogExtraFile.create({
     *   data: {
     *     // ... data to create a BlogExtraFile
     *   }
     * })
     * 
     */
    create<T extends BlogExtraFileCreateArgs>(args: SelectSubset<T, BlogExtraFileCreateArgs<ExtArgs>>): Prisma__BlogExtraFileClient<$Result.GetResult<Prisma.$BlogExtraFilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BlogExtraFiles.
     * @param {BlogExtraFileCreateManyArgs} args - Arguments to create many BlogExtraFiles.
     * @example
     * // Create many BlogExtraFiles
     * const blogExtraFile = await prisma.blogExtraFile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BlogExtraFileCreateManyArgs>(args?: SelectSubset<T, BlogExtraFileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BlogExtraFiles and returns the data saved in the database.
     * @param {BlogExtraFileCreateManyAndReturnArgs} args - Arguments to create many BlogExtraFiles.
     * @example
     * // Create many BlogExtraFiles
     * const blogExtraFile = await prisma.blogExtraFile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BlogExtraFiles and only return the `extraFileId`
     * const blogExtraFileWithExtraFileIdOnly = await prisma.blogExtraFile.createManyAndReturn({
     *   select: { extraFileId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BlogExtraFileCreateManyAndReturnArgs>(args?: SelectSubset<T, BlogExtraFileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogExtraFilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BlogExtraFile.
     * @param {BlogExtraFileDeleteArgs} args - Arguments to delete one BlogExtraFile.
     * @example
     * // Delete one BlogExtraFile
     * const BlogExtraFile = await prisma.blogExtraFile.delete({
     *   where: {
     *     // ... filter to delete one BlogExtraFile
     *   }
     * })
     * 
     */
    delete<T extends BlogExtraFileDeleteArgs>(args: SelectSubset<T, BlogExtraFileDeleteArgs<ExtArgs>>): Prisma__BlogExtraFileClient<$Result.GetResult<Prisma.$BlogExtraFilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BlogExtraFile.
     * @param {BlogExtraFileUpdateArgs} args - Arguments to update one BlogExtraFile.
     * @example
     * // Update one BlogExtraFile
     * const blogExtraFile = await prisma.blogExtraFile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BlogExtraFileUpdateArgs>(args: SelectSubset<T, BlogExtraFileUpdateArgs<ExtArgs>>): Prisma__BlogExtraFileClient<$Result.GetResult<Prisma.$BlogExtraFilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BlogExtraFiles.
     * @param {BlogExtraFileDeleteManyArgs} args - Arguments to filter BlogExtraFiles to delete.
     * @example
     * // Delete a few BlogExtraFiles
     * const { count } = await prisma.blogExtraFile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BlogExtraFileDeleteManyArgs>(args?: SelectSubset<T, BlogExtraFileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlogExtraFiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogExtraFileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BlogExtraFiles
     * const blogExtraFile = await prisma.blogExtraFile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BlogExtraFileUpdateManyArgs>(args: SelectSubset<T, BlogExtraFileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlogExtraFiles and returns the data updated in the database.
     * @param {BlogExtraFileUpdateManyAndReturnArgs} args - Arguments to update many BlogExtraFiles.
     * @example
     * // Update many BlogExtraFiles
     * const blogExtraFile = await prisma.blogExtraFile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BlogExtraFiles and only return the `extraFileId`
     * const blogExtraFileWithExtraFileIdOnly = await prisma.blogExtraFile.updateManyAndReturn({
     *   select: { extraFileId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BlogExtraFileUpdateManyAndReturnArgs>(args: SelectSubset<T, BlogExtraFileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogExtraFilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BlogExtraFile.
     * @param {BlogExtraFileUpsertArgs} args - Arguments to update or create a BlogExtraFile.
     * @example
     * // Update or create a BlogExtraFile
     * const blogExtraFile = await prisma.blogExtraFile.upsert({
     *   create: {
     *     // ... data to create a BlogExtraFile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BlogExtraFile we want to update
     *   }
     * })
     */
    upsert<T extends BlogExtraFileUpsertArgs>(args: SelectSubset<T, BlogExtraFileUpsertArgs<ExtArgs>>): Prisma__BlogExtraFileClient<$Result.GetResult<Prisma.$BlogExtraFilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BlogExtraFiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogExtraFileCountArgs} args - Arguments to filter BlogExtraFiles to count.
     * @example
     * // Count the number of BlogExtraFiles
     * const count = await prisma.blogExtraFile.count({
     *   where: {
     *     // ... the filter for the BlogExtraFiles we want to count
     *   }
     * })
    **/
    count<T extends BlogExtraFileCountArgs>(
      args?: Subset<T, BlogExtraFileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlogExtraFileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BlogExtraFile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogExtraFileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BlogExtraFileAggregateArgs>(args: Subset<T, BlogExtraFileAggregateArgs>): Prisma.PrismaPromise<GetBlogExtraFileAggregateType<T>>

    /**
     * Group by BlogExtraFile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogExtraFileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BlogExtraFileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlogExtraFileGroupByArgs['orderBy'] }
        : { orderBy?: BlogExtraFileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BlogExtraFileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlogExtraFileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BlogExtraFile model
   */
  readonly fields: BlogExtraFileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BlogExtraFile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlogExtraFileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    blogPostMeta<T extends BlogPostMetaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BlogPostMetaDefaultArgs<ExtArgs>>): Prisma__BlogPostMetaClient<$Result.GetResult<Prisma.$BlogPostMetaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BlogExtraFile model
   */
  interface BlogExtraFileFieldRefs {
    readonly extraFileId: FieldRef<"BlogExtraFile", 'Int'>
    readonly postHash: FieldRef<"BlogExtraFile", 'String'>
    readonly userId: FieldRef<"BlogExtraFile", 'String'>
    readonly extraFileUrl: FieldRef<"BlogExtraFile", 'String'>
    readonly extraFileAlt: FieldRef<"BlogExtraFile", 'String'>
  }
    

  // Custom InputTypes
  /**
   * BlogExtraFile findUnique
   */
  export type BlogExtraFileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogExtraFile
     */
    select?: BlogExtraFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogExtraFile
     */
    omit?: BlogExtraFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogExtraFileInclude<ExtArgs> | null
    /**
     * Filter, which BlogExtraFile to fetch.
     */
    where: BlogExtraFileWhereUniqueInput
  }

  /**
   * BlogExtraFile findUniqueOrThrow
   */
  export type BlogExtraFileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogExtraFile
     */
    select?: BlogExtraFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogExtraFile
     */
    omit?: BlogExtraFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogExtraFileInclude<ExtArgs> | null
    /**
     * Filter, which BlogExtraFile to fetch.
     */
    where: BlogExtraFileWhereUniqueInput
  }

  /**
   * BlogExtraFile findFirst
   */
  export type BlogExtraFileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogExtraFile
     */
    select?: BlogExtraFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogExtraFile
     */
    omit?: BlogExtraFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogExtraFileInclude<ExtArgs> | null
    /**
     * Filter, which BlogExtraFile to fetch.
     */
    where?: BlogExtraFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogExtraFiles to fetch.
     */
    orderBy?: BlogExtraFileOrderByWithRelationInput | BlogExtraFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlogExtraFiles.
     */
    cursor?: BlogExtraFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogExtraFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogExtraFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlogExtraFiles.
     */
    distinct?: BlogExtraFileScalarFieldEnum | BlogExtraFileScalarFieldEnum[]
  }

  /**
   * BlogExtraFile findFirstOrThrow
   */
  export type BlogExtraFileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogExtraFile
     */
    select?: BlogExtraFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogExtraFile
     */
    omit?: BlogExtraFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogExtraFileInclude<ExtArgs> | null
    /**
     * Filter, which BlogExtraFile to fetch.
     */
    where?: BlogExtraFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogExtraFiles to fetch.
     */
    orderBy?: BlogExtraFileOrderByWithRelationInput | BlogExtraFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlogExtraFiles.
     */
    cursor?: BlogExtraFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogExtraFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogExtraFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlogExtraFiles.
     */
    distinct?: BlogExtraFileScalarFieldEnum | BlogExtraFileScalarFieldEnum[]
  }

  /**
   * BlogExtraFile findMany
   */
  export type BlogExtraFileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogExtraFile
     */
    select?: BlogExtraFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogExtraFile
     */
    omit?: BlogExtraFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogExtraFileInclude<ExtArgs> | null
    /**
     * Filter, which BlogExtraFiles to fetch.
     */
    where?: BlogExtraFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogExtraFiles to fetch.
     */
    orderBy?: BlogExtraFileOrderByWithRelationInput | BlogExtraFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BlogExtraFiles.
     */
    cursor?: BlogExtraFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogExtraFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogExtraFiles.
     */
    skip?: number
    distinct?: BlogExtraFileScalarFieldEnum | BlogExtraFileScalarFieldEnum[]
  }

  /**
   * BlogExtraFile create
   */
  export type BlogExtraFileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogExtraFile
     */
    select?: BlogExtraFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogExtraFile
     */
    omit?: BlogExtraFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogExtraFileInclude<ExtArgs> | null
    /**
     * The data needed to create a BlogExtraFile.
     */
    data: XOR<BlogExtraFileCreateInput, BlogExtraFileUncheckedCreateInput>
  }

  /**
   * BlogExtraFile createMany
   */
  export type BlogExtraFileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BlogExtraFiles.
     */
    data: BlogExtraFileCreateManyInput | BlogExtraFileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BlogExtraFile createManyAndReturn
   */
  export type BlogExtraFileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogExtraFile
     */
    select?: BlogExtraFileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlogExtraFile
     */
    omit?: BlogExtraFileOmit<ExtArgs> | null
    /**
     * The data used to create many BlogExtraFiles.
     */
    data: BlogExtraFileCreateManyInput | BlogExtraFileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogExtraFileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BlogExtraFile update
   */
  export type BlogExtraFileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogExtraFile
     */
    select?: BlogExtraFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogExtraFile
     */
    omit?: BlogExtraFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogExtraFileInclude<ExtArgs> | null
    /**
     * The data needed to update a BlogExtraFile.
     */
    data: XOR<BlogExtraFileUpdateInput, BlogExtraFileUncheckedUpdateInput>
    /**
     * Choose, which BlogExtraFile to update.
     */
    where: BlogExtraFileWhereUniqueInput
  }

  /**
   * BlogExtraFile updateMany
   */
  export type BlogExtraFileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BlogExtraFiles.
     */
    data: XOR<BlogExtraFileUpdateManyMutationInput, BlogExtraFileUncheckedUpdateManyInput>
    /**
     * Filter which BlogExtraFiles to update
     */
    where?: BlogExtraFileWhereInput
    /**
     * Limit how many BlogExtraFiles to update.
     */
    limit?: number
  }

  /**
   * BlogExtraFile updateManyAndReturn
   */
  export type BlogExtraFileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogExtraFile
     */
    select?: BlogExtraFileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlogExtraFile
     */
    omit?: BlogExtraFileOmit<ExtArgs> | null
    /**
     * The data used to update BlogExtraFiles.
     */
    data: XOR<BlogExtraFileUpdateManyMutationInput, BlogExtraFileUncheckedUpdateManyInput>
    /**
     * Filter which BlogExtraFiles to update
     */
    where?: BlogExtraFileWhereInput
    /**
     * Limit how many BlogExtraFiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogExtraFileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BlogExtraFile upsert
   */
  export type BlogExtraFileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogExtraFile
     */
    select?: BlogExtraFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogExtraFile
     */
    omit?: BlogExtraFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogExtraFileInclude<ExtArgs> | null
    /**
     * The filter to search for the BlogExtraFile to update in case it exists.
     */
    where: BlogExtraFileWhereUniqueInput
    /**
     * In case the BlogExtraFile found by the `where` argument doesn't exist, create a new BlogExtraFile with this data.
     */
    create: XOR<BlogExtraFileCreateInput, BlogExtraFileUncheckedCreateInput>
    /**
     * In case the BlogExtraFile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlogExtraFileUpdateInput, BlogExtraFileUncheckedUpdateInput>
  }

  /**
   * BlogExtraFile delete
   */
  export type BlogExtraFileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogExtraFile
     */
    select?: BlogExtraFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogExtraFile
     */
    omit?: BlogExtraFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogExtraFileInclude<ExtArgs> | null
    /**
     * Filter which BlogExtraFile to delete.
     */
    where: BlogExtraFileWhereUniqueInput
  }

  /**
   * BlogExtraFile deleteMany
   */
  export type BlogExtraFileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlogExtraFiles to delete
     */
    where?: BlogExtraFileWhereInput
    /**
     * Limit how many BlogExtraFiles to delete.
     */
    limit?: number
  }

  /**
   * BlogExtraFile without action
   */
  export type BlogExtraFileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogExtraFile
     */
    select?: BlogExtraFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogExtraFile
     */
    omit?: BlogExtraFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogExtraFileInclude<ExtArgs> | null
  }


  /**
   * Model BlogPostTag
   */

  export type AggregateBlogPostTag = {
    _count: BlogPostTagCountAggregateOutputType | null
    _min: BlogPostTagMinAggregateOutputType | null
    _max: BlogPostTagMaxAggregateOutputType | null
  }

  export type BlogPostTagMinAggregateOutputType = {
    tagName: string | null
    postHash: string | null
    userId: string | null
  }

  export type BlogPostTagMaxAggregateOutputType = {
    tagName: string | null
    postHash: string | null
    userId: string | null
  }

  export type BlogPostTagCountAggregateOutputType = {
    tagName: number
    postHash: number
    userId: number
    _all: number
  }


  export type BlogPostTagMinAggregateInputType = {
    tagName?: true
    postHash?: true
    userId?: true
  }

  export type BlogPostTagMaxAggregateInputType = {
    tagName?: true
    postHash?: true
    userId?: true
  }

  export type BlogPostTagCountAggregateInputType = {
    tagName?: true
    postHash?: true
    userId?: true
    _all?: true
  }

  export type BlogPostTagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlogPostTag to aggregate.
     */
    where?: BlogPostTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogPostTags to fetch.
     */
    orderBy?: BlogPostTagOrderByWithRelationInput | BlogPostTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlogPostTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogPostTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogPostTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BlogPostTags
    **/
    _count?: true | BlogPostTagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlogPostTagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlogPostTagMaxAggregateInputType
  }

  export type GetBlogPostTagAggregateType<T extends BlogPostTagAggregateArgs> = {
        [P in keyof T & keyof AggregateBlogPostTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlogPostTag[P]>
      : GetScalarType<T[P], AggregateBlogPostTag[P]>
  }




  export type BlogPostTagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogPostTagWhereInput
    orderBy?: BlogPostTagOrderByWithAggregationInput | BlogPostTagOrderByWithAggregationInput[]
    by: BlogPostTagScalarFieldEnum[] | BlogPostTagScalarFieldEnum
    having?: BlogPostTagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlogPostTagCountAggregateInputType | true
    _min?: BlogPostTagMinAggregateInputType
    _max?: BlogPostTagMaxAggregateInputType
  }

  export type BlogPostTagGroupByOutputType = {
    tagName: string
    postHash: string
    userId: string
    _count: BlogPostTagCountAggregateOutputType | null
    _min: BlogPostTagMinAggregateOutputType | null
    _max: BlogPostTagMaxAggregateOutputType | null
  }

  type GetBlogPostTagGroupByPayload<T extends BlogPostTagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlogPostTagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlogPostTagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlogPostTagGroupByOutputType[P]>
            : GetScalarType<T[P], BlogPostTagGroupByOutputType[P]>
        }
      >
    >


  export type BlogPostTagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tagName?: boolean
    postHash?: boolean
    userId?: boolean
    tag?: boolean | TagDefaultArgs<ExtArgs>
    blogPostMeta?: boolean | BlogPostMetaDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blogPostTag"]>

  export type BlogPostTagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tagName?: boolean
    postHash?: boolean
    userId?: boolean
    tag?: boolean | TagDefaultArgs<ExtArgs>
    blogPostMeta?: boolean | BlogPostMetaDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blogPostTag"]>

  export type BlogPostTagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tagName?: boolean
    postHash?: boolean
    userId?: boolean
    tag?: boolean | TagDefaultArgs<ExtArgs>
    blogPostMeta?: boolean | BlogPostMetaDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blogPostTag"]>

  export type BlogPostTagSelectScalar = {
    tagName?: boolean
    postHash?: boolean
    userId?: boolean
  }

  export type BlogPostTagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"tagName" | "postHash" | "userId", ExtArgs["result"]["blogPostTag"]>
  export type BlogPostTagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tag?: boolean | TagDefaultArgs<ExtArgs>
    blogPostMeta?: boolean | BlogPostMetaDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BlogPostTagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tag?: boolean | TagDefaultArgs<ExtArgs>
    blogPostMeta?: boolean | BlogPostMetaDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BlogPostTagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tag?: boolean | TagDefaultArgs<ExtArgs>
    blogPostMeta?: boolean | BlogPostMetaDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BlogPostTagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BlogPostTag"
    objects: {
      tag: Prisma.$TagPayload<ExtArgs>
      blogPostMeta: Prisma.$BlogPostMetaPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      tagName: string
      postHash: string
      userId: string
    }, ExtArgs["result"]["blogPostTag"]>
    composites: {}
  }

  type BlogPostTagGetPayload<S extends boolean | null | undefined | BlogPostTagDefaultArgs> = $Result.GetResult<Prisma.$BlogPostTagPayload, S>

  type BlogPostTagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BlogPostTagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BlogPostTagCountAggregateInputType | true
    }

  export interface BlogPostTagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BlogPostTag'], meta: { name: 'BlogPostTag' } }
    /**
     * Find zero or one BlogPostTag that matches the filter.
     * @param {BlogPostTagFindUniqueArgs} args - Arguments to find a BlogPostTag
     * @example
     * // Get one BlogPostTag
     * const blogPostTag = await prisma.blogPostTag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BlogPostTagFindUniqueArgs>(args: SelectSubset<T, BlogPostTagFindUniqueArgs<ExtArgs>>): Prisma__BlogPostTagClient<$Result.GetResult<Prisma.$BlogPostTagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BlogPostTag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BlogPostTagFindUniqueOrThrowArgs} args - Arguments to find a BlogPostTag
     * @example
     * // Get one BlogPostTag
     * const blogPostTag = await prisma.blogPostTag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BlogPostTagFindUniqueOrThrowArgs>(args: SelectSubset<T, BlogPostTagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BlogPostTagClient<$Result.GetResult<Prisma.$BlogPostTagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlogPostTag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostTagFindFirstArgs} args - Arguments to find a BlogPostTag
     * @example
     * // Get one BlogPostTag
     * const blogPostTag = await prisma.blogPostTag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BlogPostTagFindFirstArgs>(args?: SelectSubset<T, BlogPostTagFindFirstArgs<ExtArgs>>): Prisma__BlogPostTagClient<$Result.GetResult<Prisma.$BlogPostTagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlogPostTag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostTagFindFirstOrThrowArgs} args - Arguments to find a BlogPostTag
     * @example
     * // Get one BlogPostTag
     * const blogPostTag = await prisma.blogPostTag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BlogPostTagFindFirstOrThrowArgs>(args?: SelectSubset<T, BlogPostTagFindFirstOrThrowArgs<ExtArgs>>): Prisma__BlogPostTagClient<$Result.GetResult<Prisma.$BlogPostTagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BlogPostTags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostTagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BlogPostTags
     * const blogPostTags = await prisma.blogPostTag.findMany()
     * 
     * // Get first 10 BlogPostTags
     * const blogPostTags = await prisma.blogPostTag.findMany({ take: 10 })
     * 
     * // Only select the `tagName`
     * const blogPostTagWithTagNameOnly = await prisma.blogPostTag.findMany({ select: { tagName: true } })
     * 
     */
    findMany<T extends BlogPostTagFindManyArgs>(args?: SelectSubset<T, BlogPostTagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPostTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BlogPostTag.
     * @param {BlogPostTagCreateArgs} args - Arguments to create a BlogPostTag.
     * @example
     * // Create one BlogPostTag
     * const BlogPostTag = await prisma.blogPostTag.create({
     *   data: {
     *     // ... data to create a BlogPostTag
     *   }
     * })
     * 
     */
    create<T extends BlogPostTagCreateArgs>(args: SelectSubset<T, BlogPostTagCreateArgs<ExtArgs>>): Prisma__BlogPostTagClient<$Result.GetResult<Prisma.$BlogPostTagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BlogPostTags.
     * @param {BlogPostTagCreateManyArgs} args - Arguments to create many BlogPostTags.
     * @example
     * // Create many BlogPostTags
     * const blogPostTag = await prisma.blogPostTag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BlogPostTagCreateManyArgs>(args?: SelectSubset<T, BlogPostTagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BlogPostTags and returns the data saved in the database.
     * @param {BlogPostTagCreateManyAndReturnArgs} args - Arguments to create many BlogPostTags.
     * @example
     * // Create many BlogPostTags
     * const blogPostTag = await prisma.blogPostTag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BlogPostTags and only return the `tagName`
     * const blogPostTagWithTagNameOnly = await prisma.blogPostTag.createManyAndReturn({
     *   select: { tagName: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BlogPostTagCreateManyAndReturnArgs>(args?: SelectSubset<T, BlogPostTagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPostTagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BlogPostTag.
     * @param {BlogPostTagDeleteArgs} args - Arguments to delete one BlogPostTag.
     * @example
     * // Delete one BlogPostTag
     * const BlogPostTag = await prisma.blogPostTag.delete({
     *   where: {
     *     // ... filter to delete one BlogPostTag
     *   }
     * })
     * 
     */
    delete<T extends BlogPostTagDeleteArgs>(args: SelectSubset<T, BlogPostTagDeleteArgs<ExtArgs>>): Prisma__BlogPostTagClient<$Result.GetResult<Prisma.$BlogPostTagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BlogPostTag.
     * @param {BlogPostTagUpdateArgs} args - Arguments to update one BlogPostTag.
     * @example
     * // Update one BlogPostTag
     * const blogPostTag = await prisma.blogPostTag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BlogPostTagUpdateArgs>(args: SelectSubset<T, BlogPostTagUpdateArgs<ExtArgs>>): Prisma__BlogPostTagClient<$Result.GetResult<Prisma.$BlogPostTagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BlogPostTags.
     * @param {BlogPostTagDeleteManyArgs} args - Arguments to filter BlogPostTags to delete.
     * @example
     * // Delete a few BlogPostTags
     * const { count } = await prisma.blogPostTag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BlogPostTagDeleteManyArgs>(args?: SelectSubset<T, BlogPostTagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlogPostTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostTagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BlogPostTags
     * const blogPostTag = await prisma.blogPostTag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BlogPostTagUpdateManyArgs>(args: SelectSubset<T, BlogPostTagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlogPostTags and returns the data updated in the database.
     * @param {BlogPostTagUpdateManyAndReturnArgs} args - Arguments to update many BlogPostTags.
     * @example
     * // Update many BlogPostTags
     * const blogPostTag = await prisma.blogPostTag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BlogPostTags and only return the `tagName`
     * const blogPostTagWithTagNameOnly = await prisma.blogPostTag.updateManyAndReturn({
     *   select: { tagName: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BlogPostTagUpdateManyAndReturnArgs>(args: SelectSubset<T, BlogPostTagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPostTagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BlogPostTag.
     * @param {BlogPostTagUpsertArgs} args - Arguments to update or create a BlogPostTag.
     * @example
     * // Update or create a BlogPostTag
     * const blogPostTag = await prisma.blogPostTag.upsert({
     *   create: {
     *     // ... data to create a BlogPostTag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BlogPostTag we want to update
     *   }
     * })
     */
    upsert<T extends BlogPostTagUpsertArgs>(args: SelectSubset<T, BlogPostTagUpsertArgs<ExtArgs>>): Prisma__BlogPostTagClient<$Result.GetResult<Prisma.$BlogPostTagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BlogPostTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostTagCountArgs} args - Arguments to filter BlogPostTags to count.
     * @example
     * // Count the number of BlogPostTags
     * const count = await prisma.blogPostTag.count({
     *   where: {
     *     // ... the filter for the BlogPostTags we want to count
     *   }
     * })
    **/
    count<T extends BlogPostTagCountArgs>(
      args?: Subset<T, BlogPostTagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlogPostTagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BlogPostTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostTagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BlogPostTagAggregateArgs>(args: Subset<T, BlogPostTagAggregateArgs>): Prisma.PrismaPromise<GetBlogPostTagAggregateType<T>>

    /**
     * Group by BlogPostTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostTagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BlogPostTagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlogPostTagGroupByArgs['orderBy'] }
        : { orderBy?: BlogPostTagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BlogPostTagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlogPostTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BlogPostTag model
   */
  readonly fields: BlogPostTagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BlogPostTag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlogPostTagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tag<T extends TagDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TagDefaultArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    blogPostMeta<T extends BlogPostMetaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BlogPostMetaDefaultArgs<ExtArgs>>): Prisma__BlogPostMetaClient<$Result.GetResult<Prisma.$BlogPostMetaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BlogPostTag model
   */
  interface BlogPostTagFieldRefs {
    readonly tagName: FieldRef<"BlogPostTag", 'String'>
    readonly postHash: FieldRef<"BlogPostTag", 'String'>
    readonly userId: FieldRef<"BlogPostTag", 'String'>
  }
    

  // Custom InputTypes
  /**
   * BlogPostTag findUnique
   */
  export type BlogPostTagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostTag
     */
    select?: BlogPostTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPostTag
     */
    omit?: BlogPostTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostTagInclude<ExtArgs> | null
    /**
     * Filter, which BlogPostTag to fetch.
     */
    where: BlogPostTagWhereUniqueInput
  }

  /**
   * BlogPostTag findUniqueOrThrow
   */
  export type BlogPostTagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostTag
     */
    select?: BlogPostTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPostTag
     */
    omit?: BlogPostTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostTagInclude<ExtArgs> | null
    /**
     * Filter, which BlogPostTag to fetch.
     */
    where: BlogPostTagWhereUniqueInput
  }

  /**
   * BlogPostTag findFirst
   */
  export type BlogPostTagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostTag
     */
    select?: BlogPostTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPostTag
     */
    omit?: BlogPostTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostTagInclude<ExtArgs> | null
    /**
     * Filter, which BlogPostTag to fetch.
     */
    where?: BlogPostTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogPostTags to fetch.
     */
    orderBy?: BlogPostTagOrderByWithRelationInput | BlogPostTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlogPostTags.
     */
    cursor?: BlogPostTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogPostTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogPostTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlogPostTags.
     */
    distinct?: BlogPostTagScalarFieldEnum | BlogPostTagScalarFieldEnum[]
  }

  /**
   * BlogPostTag findFirstOrThrow
   */
  export type BlogPostTagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostTag
     */
    select?: BlogPostTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPostTag
     */
    omit?: BlogPostTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostTagInclude<ExtArgs> | null
    /**
     * Filter, which BlogPostTag to fetch.
     */
    where?: BlogPostTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogPostTags to fetch.
     */
    orderBy?: BlogPostTagOrderByWithRelationInput | BlogPostTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlogPostTags.
     */
    cursor?: BlogPostTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogPostTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogPostTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlogPostTags.
     */
    distinct?: BlogPostTagScalarFieldEnum | BlogPostTagScalarFieldEnum[]
  }

  /**
   * BlogPostTag findMany
   */
  export type BlogPostTagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostTag
     */
    select?: BlogPostTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPostTag
     */
    omit?: BlogPostTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostTagInclude<ExtArgs> | null
    /**
     * Filter, which BlogPostTags to fetch.
     */
    where?: BlogPostTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogPostTags to fetch.
     */
    orderBy?: BlogPostTagOrderByWithRelationInput | BlogPostTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BlogPostTags.
     */
    cursor?: BlogPostTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogPostTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogPostTags.
     */
    skip?: number
    distinct?: BlogPostTagScalarFieldEnum | BlogPostTagScalarFieldEnum[]
  }

  /**
   * BlogPostTag create
   */
  export type BlogPostTagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostTag
     */
    select?: BlogPostTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPostTag
     */
    omit?: BlogPostTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostTagInclude<ExtArgs> | null
    /**
     * The data needed to create a BlogPostTag.
     */
    data: XOR<BlogPostTagCreateInput, BlogPostTagUncheckedCreateInput>
  }

  /**
   * BlogPostTag createMany
   */
  export type BlogPostTagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BlogPostTags.
     */
    data: BlogPostTagCreateManyInput | BlogPostTagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BlogPostTag createManyAndReturn
   */
  export type BlogPostTagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostTag
     */
    select?: BlogPostTagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPostTag
     */
    omit?: BlogPostTagOmit<ExtArgs> | null
    /**
     * The data used to create many BlogPostTags.
     */
    data: BlogPostTagCreateManyInput | BlogPostTagCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostTagIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BlogPostTag update
   */
  export type BlogPostTagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostTag
     */
    select?: BlogPostTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPostTag
     */
    omit?: BlogPostTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostTagInclude<ExtArgs> | null
    /**
     * The data needed to update a BlogPostTag.
     */
    data: XOR<BlogPostTagUpdateInput, BlogPostTagUncheckedUpdateInput>
    /**
     * Choose, which BlogPostTag to update.
     */
    where: BlogPostTagWhereUniqueInput
  }

  /**
   * BlogPostTag updateMany
   */
  export type BlogPostTagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BlogPostTags.
     */
    data: XOR<BlogPostTagUpdateManyMutationInput, BlogPostTagUncheckedUpdateManyInput>
    /**
     * Filter which BlogPostTags to update
     */
    where?: BlogPostTagWhereInput
    /**
     * Limit how many BlogPostTags to update.
     */
    limit?: number
  }

  /**
   * BlogPostTag updateManyAndReturn
   */
  export type BlogPostTagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostTag
     */
    select?: BlogPostTagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPostTag
     */
    omit?: BlogPostTagOmit<ExtArgs> | null
    /**
     * The data used to update BlogPostTags.
     */
    data: XOR<BlogPostTagUpdateManyMutationInput, BlogPostTagUncheckedUpdateManyInput>
    /**
     * Filter which BlogPostTags to update
     */
    where?: BlogPostTagWhereInput
    /**
     * Limit how many BlogPostTags to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostTagIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BlogPostTag upsert
   */
  export type BlogPostTagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostTag
     */
    select?: BlogPostTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPostTag
     */
    omit?: BlogPostTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostTagInclude<ExtArgs> | null
    /**
     * The filter to search for the BlogPostTag to update in case it exists.
     */
    where: BlogPostTagWhereUniqueInput
    /**
     * In case the BlogPostTag found by the `where` argument doesn't exist, create a new BlogPostTag with this data.
     */
    create: XOR<BlogPostTagCreateInput, BlogPostTagUncheckedCreateInput>
    /**
     * In case the BlogPostTag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlogPostTagUpdateInput, BlogPostTagUncheckedUpdateInput>
  }

  /**
   * BlogPostTag delete
   */
  export type BlogPostTagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostTag
     */
    select?: BlogPostTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPostTag
     */
    omit?: BlogPostTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostTagInclude<ExtArgs> | null
    /**
     * Filter which BlogPostTag to delete.
     */
    where: BlogPostTagWhereUniqueInput
  }

  /**
   * BlogPostTag deleteMany
   */
  export type BlogPostTagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlogPostTags to delete
     */
    where?: BlogPostTagWhereInput
    /**
     * Limit how many BlogPostTags to delete.
     */
    limit?: number
  }

  /**
   * BlogPostTag without action
   */
  export type BlogPostTagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostTag
     */
    select?: BlogPostTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPostTag
     */
    omit?: BlogPostTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostTagInclude<ExtArgs> | null
  }


  /**
   * Model BlogPost
   */

  export type AggregateBlogPost = {
    _count: BlogPostCountAggregateOutputType | null
    _avg: BlogPostAvgAggregateOutputType | null
    _sum: BlogPostSumAggregateOutputType | null
    _min: BlogPostMinAggregateOutputType | null
    _max: BlogPostMaxAggregateOutputType | null
  }

  export type BlogPostAvgAggregateOutputType = {
    postReadTimeSeconds: number | null
  }

  export type BlogPostSumAggregateOutputType = {
    postReadTimeSeconds: number | null
  }

  export type BlogPostMinAggregateOutputType = {
    revisionHash: string | null
    postHash: string | null
    userId: string | null
    postTitle: string | null
    postContent: string | null
    postDraft: boolean | null
    postCreatedAt: Date | null
    postUpdatedAt: Date | null
    postPublished: Date | null
    postReadTimeSeconds: number | null
  }

  export type BlogPostMaxAggregateOutputType = {
    revisionHash: string | null
    postHash: string | null
    userId: string | null
    postTitle: string | null
    postContent: string | null
    postDraft: boolean | null
    postCreatedAt: Date | null
    postUpdatedAt: Date | null
    postPublished: Date | null
    postReadTimeSeconds: number | null
  }

  export type BlogPostCountAggregateOutputType = {
    revisionHash: number
    postHash: number
    userId: number
    postTitle: number
    postContent: number
    postDraft: number
    postCreatedAt: number
    postUpdatedAt: number
    postPublished: number
    postReadTimeSeconds: number
    _all: number
  }


  export type BlogPostAvgAggregateInputType = {
    postReadTimeSeconds?: true
  }

  export type BlogPostSumAggregateInputType = {
    postReadTimeSeconds?: true
  }

  export type BlogPostMinAggregateInputType = {
    revisionHash?: true
    postHash?: true
    userId?: true
    postTitle?: true
    postContent?: true
    postDraft?: true
    postCreatedAt?: true
    postUpdatedAt?: true
    postPublished?: true
    postReadTimeSeconds?: true
  }

  export type BlogPostMaxAggregateInputType = {
    revisionHash?: true
    postHash?: true
    userId?: true
    postTitle?: true
    postContent?: true
    postDraft?: true
    postCreatedAt?: true
    postUpdatedAt?: true
    postPublished?: true
    postReadTimeSeconds?: true
  }

  export type BlogPostCountAggregateInputType = {
    revisionHash?: true
    postHash?: true
    userId?: true
    postTitle?: true
    postContent?: true
    postDraft?: true
    postCreatedAt?: true
    postUpdatedAt?: true
    postPublished?: true
    postReadTimeSeconds?: true
    _all?: true
  }

  export type BlogPostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlogPost to aggregate.
     */
    where?: BlogPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogPosts to fetch.
     */
    orderBy?: BlogPostOrderByWithRelationInput | BlogPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlogPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BlogPosts
    **/
    _count?: true | BlogPostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BlogPostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BlogPostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlogPostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlogPostMaxAggregateInputType
  }

  export type GetBlogPostAggregateType<T extends BlogPostAggregateArgs> = {
        [P in keyof T & keyof AggregateBlogPost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlogPost[P]>
      : GetScalarType<T[P], AggregateBlogPost[P]>
  }




  export type BlogPostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogPostWhereInput
    orderBy?: BlogPostOrderByWithAggregationInput | BlogPostOrderByWithAggregationInput[]
    by: BlogPostScalarFieldEnum[] | BlogPostScalarFieldEnum
    having?: BlogPostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlogPostCountAggregateInputType | true
    _avg?: BlogPostAvgAggregateInputType
    _sum?: BlogPostSumAggregateInputType
    _min?: BlogPostMinAggregateInputType
    _max?: BlogPostMaxAggregateInputType
  }

  export type BlogPostGroupByOutputType = {
    revisionHash: string
    postHash: string
    userId: string
    postTitle: string
    postContent: string
    postDraft: boolean
    postCreatedAt: Date
    postUpdatedAt: Date
    postPublished: Date | null
    postReadTimeSeconds: number
    _count: BlogPostCountAggregateOutputType | null
    _avg: BlogPostAvgAggregateOutputType | null
    _sum: BlogPostSumAggregateOutputType | null
    _min: BlogPostMinAggregateOutputType | null
    _max: BlogPostMaxAggregateOutputType | null
  }

  type GetBlogPostGroupByPayload<T extends BlogPostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlogPostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlogPostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlogPostGroupByOutputType[P]>
            : GetScalarType<T[P], BlogPostGroupByOutputType[P]>
        }
      >
    >


  export type BlogPostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    revisionHash?: boolean
    postHash?: boolean
    userId?: boolean
    postTitle?: boolean
    postContent?: boolean
    postDraft?: boolean
    postCreatedAt?: boolean
    postUpdatedAt?: boolean
    postPublished?: boolean
    postReadTimeSeconds?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    blogPostMeta?: boolean | BlogPostMetaDefaultArgs<ExtArgs>
    blogPostPublish?: boolean | BlogPost$blogPostPublishArgs<ExtArgs>
  }, ExtArgs["result"]["blogPost"]>

  export type BlogPostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    revisionHash?: boolean
    postHash?: boolean
    userId?: boolean
    postTitle?: boolean
    postContent?: boolean
    postDraft?: boolean
    postCreatedAt?: boolean
    postUpdatedAt?: boolean
    postPublished?: boolean
    postReadTimeSeconds?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    blogPostMeta?: boolean | BlogPostMetaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blogPost"]>

  export type BlogPostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    revisionHash?: boolean
    postHash?: boolean
    userId?: boolean
    postTitle?: boolean
    postContent?: boolean
    postDraft?: boolean
    postCreatedAt?: boolean
    postUpdatedAt?: boolean
    postPublished?: boolean
    postReadTimeSeconds?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    blogPostMeta?: boolean | BlogPostMetaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blogPost"]>

  export type BlogPostSelectScalar = {
    revisionHash?: boolean
    postHash?: boolean
    userId?: boolean
    postTitle?: boolean
    postContent?: boolean
    postDraft?: boolean
    postCreatedAt?: boolean
    postUpdatedAt?: boolean
    postPublished?: boolean
    postReadTimeSeconds?: boolean
  }

  export type BlogPostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"revisionHash" | "postHash" | "userId" | "postTitle" | "postContent" | "postDraft" | "postCreatedAt" | "postUpdatedAt" | "postPublished" | "postReadTimeSeconds", ExtArgs["result"]["blogPost"]>
  export type BlogPostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    blogPostMeta?: boolean | BlogPostMetaDefaultArgs<ExtArgs>
    blogPostPublish?: boolean | BlogPost$blogPostPublishArgs<ExtArgs>
  }
  export type BlogPostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    blogPostMeta?: boolean | BlogPostMetaDefaultArgs<ExtArgs>
  }
  export type BlogPostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    blogPostMeta?: boolean | BlogPostMetaDefaultArgs<ExtArgs>
  }

  export type $BlogPostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BlogPost"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      blogPostMeta: Prisma.$BlogPostMetaPayload<ExtArgs>
      blogPostPublish: Prisma.$BlogPostPublishPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      revisionHash: string
      postHash: string
      userId: string
      postTitle: string
      postContent: string
      postDraft: boolean
      postCreatedAt: Date
      postUpdatedAt: Date
      postPublished: Date | null
      postReadTimeSeconds: number
    }, ExtArgs["result"]["blogPost"]>
    composites: {}
  }

  type BlogPostGetPayload<S extends boolean | null | undefined | BlogPostDefaultArgs> = $Result.GetResult<Prisma.$BlogPostPayload, S>

  type BlogPostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BlogPostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BlogPostCountAggregateInputType | true
    }

  export interface BlogPostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BlogPost'], meta: { name: 'BlogPost' } }
    /**
     * Find zero or one BlogPost that matches the filter.
     * @param {BlogPostFindUniqueArgs} args - Arguments to find a BlogPost
     * @example
     * // Get one BlogPost
     * const blogPost = await prisma.blogPost.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BlogPostFindUniqueArgs>(args: SelectSubset<T, BlogPostFindUniqueArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BlogPost that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BlogPostFindUniqueOrThrowArgs} args - Arguments to find a BlogPost
     * @example
     * // Get one BlogPost
     * const blogPost = await prisma.blogPost.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BlogPostFindUniqueOrThrowArgs>(args: SelectSubset<T, BlogPostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlogPost that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostFindFirstArgs} args - Arguments to find a BlogPost
     * @example
     * // Get one BlogPost
     * const blogPost = await prisma.blogPost.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BlogPostFindFirstArgs>(args?: SelectSubset<T, BlogPostFindFirstArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlogPost that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostFindFirstOrThrowArgs} args - Arguments to find a BlogPost
     * @example
     * // Get one BlogPost
     * const blogPost = await prisma.blogPost.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BlogPostFindFirstOrThrowArgs>(args?: SelectSubset<T, BlogPostFindFirstOrThrowArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BlogPosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BlogPosts
     * const blogPosts = await prisma.blogPost.findMany()
     * 
     * // Get first 10 BlogPosts
     * const blogPosts = await prisma.blogPost.findMany({ take: 10 })
     * 
     * // Only select the `revisionHash`
     * const blogPostWithRevisionHashOnly = await prisma.blogPost.findMany({ select: { revisionHash: true } })
     * 
     */
    findMany<T extends BlogPostFindManyArgs>(args?: SelectSubset<T, BlogPostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BlogPost.
     * @param {BlogPostCreateArgs} args - Arguments to create a BlogPost.
     * @example
     * // Create one BlogPost
     * const BlogPost = await prisma.blogPost.create({
     *   data: {
     *     // ... data to create a BlogPost
     *   }
     * })
     * 
     */
    create<T extends BlogPostCreateArgs>(args: SelectSubset<T, BlogPostCreateArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BlogPosts.
     * @param {BlogPostCreateManyArgs} args - Arguments to create many BlogPosts.
     * @example
     * // Create many BlogPosts
     * const blogPost = await prisma.blogPost.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BlogPostCreateManyArgs>(args?: SelectSubset<T, BlogPostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BlogPosts and returns the data saved in the database.
     * @param {BlogPostCreateManyAndReturnArgs} args - Arguments to create many BlogPosts.
     * @example
     * // Create many BlogPosts
     * const blogPost = await prisma.blogPost.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BlogPosts and only return the `revisionHash`
     * const blogPostWithRevisionHashOnly = await prisma.blogPost.createManyAndReturn({
     *   select: { revisionHash: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BlogPostCreateManyAndReturnArgs>(args?: SelectSubset<T, BlogPostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BlogPost.
     * @param {BlogPostDeleteArgs} args - Arguments to delete one BlogPost.
     * @example
     * // Delete one BlogPost
     * const BlogPost = await prisma.blogPost.delete({
     *   where: {
     *     // ... filter to delete one BlogPost
     *   }
     * })
     * 
     */
    delete<T extends BlogPostDeleteArgs>(args: SelectSubset<T, BlogPostDeleteArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BlogPost.
     * @param {BlogPostUpdateArgs} args - Arguments to update one BlogPost.
     * @example
     * // Update one BlogPost
     * const blogPost = await prisma.blogPost.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BlogPostUpdateArgs>(args: SelectSubset<T, BlogPostUpdateArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BlogPosts.
     * @param {BlogPostDeleteManyArgs} args - Arguments to filter BlogPosts to delete.
     * @example
     * // Delete a few BlogPosts
     * const { count } = await prisma.blogPost.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BlogPostDeleteManyArgs>(args?: SelectSubset<T, BlogPostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlogPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BlogPosts
     * const blogPost = await prisma.blogPost.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BlogPostUpdateManyArgs>(args: SelectSubset<T, BlogPostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlogPosts and returns the data updated in the database.
     * @param {BlogPostUpdateManyAndReturnArgs} args - Arguments to update many BlogPosts.
     * @example
     * // Update many BlogPosts
     * const blogPost = await prisma.blogPost.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BlogPosts and only return the `revisionHash`
     * const blogPostWithRevisionHashOnly = await prisma.blogPost.updateManyAndReturn({
     *   select: { revisionHash: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BlogPostUpdateManyAndReturnArgs>(args: SelectSubset<T, BlogPostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BlogPost.
     * @param {BlogPostUpsertArgs} args - Arguments to update or create a BlogPost.
     * @example
     * // Update or create a BlogPost
     * const blogPost = await prisma.blogPost.upsert({
     *   create: {
     *     // ... data to create a BlogPost
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BlogPost we want to update
     *   }
     * })
     */
    upsert<T extends BlogPostUpsertArgs>(args: SelectSubset<T, BlogPostUpsertArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BlogPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostCountArgs} args - Arguments to filter BlogPosts to count.
     * @example
     * // Count the number of BlogPosts
     * const count = await prisma.blogPost.count({
     *   where: {
     *     // ... the filter for the BlogPosts we want to count
     *   }
     * })
    **/
    count<T extends BlogPostCountArgs>(
      args?: Subset<T, BlogPostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlogPostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BlogPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BlogPostAggregateArgs>(args: Subset<T, BlogPostAggregateArgs>): Prisma.PrismaPromise<GetBlogPostAggregateType<T>>

    /**
     * Group by BlogPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BlogPostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlogPostGroupByArgs['orderBy'] }
        : { orderBy?: BlogPostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BlogPostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlogPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BlogPost model
   */
  readonly fields: BlogPostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BlogPost.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlogPostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    blogPostMeta<T extends BlogPostMetaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BlogPostMetaDefaultArgs<ExtArgs>>): Prisma__BlogPostMetaClient<$Result.GetResult<Prisma.$BlogPostMetaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    blogPostPublish<T extends BlogPost$blogPostPublishArgs<ExtArgs> = {}>(args?: Subset<T, BlogPost$blogPostPublishArgs<ExtArgs>>): Prisma__BlogPostPublishClient<$Result.GetResult<Prisma.$BlogPostPublishPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BlogPost model
   */
  interface BlogPostFieldRefs {
    readonly revisionHash: FieldRef<"BlogPost", 'String'>
    readonly postHash: FieldRef<"BlogPost", 'String'>
    readonly userId: FieldRef<"BlogPost", 'String'>
    readonly postTitle: FieldRef<"BlogPost", 'String'>
    readonly postContent: FieldRef<"BlogPost", 'String'>
    readonly postDraft: FieldRef<"BlogPost", 'Boolean'>
    readonly postCreatedAt: FieldRef<"BlogPost", 'DateTime'>
    readonly postUpdatedAt: FieldRef<"BlogPost", 'DateTime'>
    readonly postPublished: FieldRef<"BlogPost", 'DateTime'>
    readonly postReadTimeSeconds: FieldRef<"BlogPost", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * BlogPost findUnique
   */
  export type BlogPostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * Filter, which BlogPost to fetch.
     */
    where: BlogPostWhereUniqueInput
  }

  /**
   * BlogPost findUniqueOrThrow
   */
  export type BlogPostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * Filter, which BlogPost to fetch.
     */
    where: BlogPostWhereUniqueInput
  }

  /**
   * BlogPost findFirst
   */
  export type BlogPostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * Filter, which BlogPost to fetch.
     */
    where?: BlogPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogPosts to fetch.
     */
    orderBy?: BlogPostOrderByWithRelationInput | BlogPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlogPosts.
     */
    cursor?: BlogPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlogPosts.
     */
    distinct?: BlogPostScalarFieldEnum | BlogPostScalarFieldEnum[]
  }

  /**
   * BlogPost findFirstOrThrow
   */
  export type BlogPostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * Filter, which BlogPost to fetch.
     */
    where?: BlogPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogPosts to fetch.
     */
    orderBy?: BlogPostOrderByWithRelationInput | BlogPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlogPosts.
     */
    cursor?: BlogPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlogPosts.
     */
    distinct?: BlogPostScalarFieldEnum | BlogPostScalarFieldEnum[]
  }

  /**
   * BlogPost findMany
   */
  export type BlogPostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * Filter, which BlogPosts to fetch.
     */
    where?: BlogPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogPosts to fetch.
     */
    orderBy?: BlogPostOrderByWithRelationInput | BlogPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BlogPosts.
     */
    cursor?: BlogPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogPosts.
     */
    skip?: number
    distinct?: BlogPostScalarFieldEnum | BlogPostScalarFieldEnum[]
  }

  /**
   * BlogPost create
   */
  export type BlogPostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * The data needed to create a BlogPost.
     */
    data: XOR<BlogPostCreateInput, BlogPostUncheckedCreateInput>
  }

  /**
   * BlogPost createMany
   */
  export type BlogPostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BlogPosts.
     */
    data: BlogPostCreateManyInput | BlogPostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BlogPost createManyAndReturn
   */
  export type BlogPostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * The data used to create many BlogPosts.
     */
    data: BlogPostCreateManyInput | BlogPostCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BlogPost update
   */
  export type BlogPostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * The data needed to update a BlogPost.
     */
    data: XOR<BlogPostUpdateInput, BlogPostUncheckedUpdateInput>
    /**
     * Choose, which BlogPost to update.
     */
    where: BlogPostWhereUniqueInput
  }

  /**
   * BlogPost updateMany
   */
  export type BlogPostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BlogPosts.
     */
    data: XOR<BlogPostUpdateManyMutationInput, BlogPostUncheckedUpdateManyInput>
    /**
     * Filter which BlogPosts to update
     */
    where?: BlogPostWhereInput
    /**
     * Limit how many BlogPosts to update.
     */
    limit?: number
  }

  /**
   * BlogPost updateManyAndReturn
   */
  export type BlogPostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * The data used to update BlogPosts.
     */
    data: XOR<BlogPostUpdateManyMutationInput, BlogPostUncheckedUpdateManyInput>
    /**
     * Filter which BlogPosts to update
     */
    where?: BlogPostWhereInput
    /**
     * Limit how many BlogPosts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BlogPost upsert
   */
  export type BlogPostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * The filter to search for the BlogPost to update in case it exists.
     */
    where: BlogPostWhereUniqueInput
    /**
     * In case the BlogPost found by the `where` argument doesn't exist, create a new BlogPost with this data.
     */
    create: XOR<BlogPostCreateInput, BlogPostUncheckedCreateInput>
    /**
     * In case the BlogPost was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlogPostUpdateInput, BlogPostUncheckedUpdateInput>
  }

  /**
   * BlogPost delete
   */
  export type BlogPostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * Filter which BlogPost to delete.
     */
    where: BlogPostWhereUniqueInput
  }

  /**
   * BlogPost deleteMany
   */
  export type BlogPostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlogPosts to delete
     */
    where?: BlogPostWhereInput
    /**
     * Limit how many BlogPosts to delete.
     */
    limit?: number
  }

  /**
   * BlogPost.blogPostPublish
   */
  export type BlogPost$blogPostPublishArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostPublish
     */
    select?: BlogPostPublishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPostPublish
     */
    omit?: BlogPostPublishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostPublishInclude<ExtArgs> | null
    where?: BlogPostPublishWhereInput
  }

  /**
   * BlogPost without action
   */
  export type BlogPostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
  }


  /**
   * Model BlogPostPublish
   */

  export type AggregateBlogPostPublish = {
    _count: BlogPostPublishCountAggregateOutputType | null
    _min: BlogPostPublishMinAggregateOutputType | null
    _max: BlogPostPublishMaxAggregateOutputType | null
  }

  export type BlogPostPublishMinAggregateOutputType = {
    revisionHash: string | null
    categoryName: string | null
    userId: string | null
    postHash: string | null
    postVisibility: boolean | null
  }

  export type BlogPostPublishMaxAggregateOutputType = {
    revisionHash: string | null
    categoryName: string | null
    userId: string | null
    postHash: string | null
    postVisibility: boolean | null
  }

  export type BlogPostPublishCountAggregateOutputType = {
    revisionHash: number
    categoryName: number
    userId: number
    postHash: number
    postVisibility: number
    _all: number
  }


  export type BlogPostPublishMinAggregateInputType = {
    revisionHash?: true
    categoryName?: true
    userId?: true
    postHash?: true
    postVisibility?: true
  }

  export type BlogPostPublishMaxAggregateInputType = {
    revisionHash?: true
    categoryName?: true
    userId?: true
    postHash?: true
    postVisibility?: true
  }

  export type BlogPostPublishCountAggregateInputType = {
    revisionHash?: true
    categoryName?: true
    userId?: true
    postHash?: true
    postVisibility?: true
    _all?: true
  }

  export type BlogPostPublishAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlogPostPublish to aggregate.
     */
    where?: BlogPostPublishWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogPostPublishes to fetch.
     */
    orderBy?: BlogPostPublishOrderByWithRelationInput | BlogPostPublishOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlogPostPublishWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogPostPublishes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogPostPublishes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BlogPostPublishes
    **/
    _count?: true | BlogPostPublishCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlogPostPublishMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlogPostPublishMaxAggregateInputType
  }

  export type GetBlogPostPublishAggregateType<T extends BlogPostPublishAggregateArgs> = {
        [P in keyof T & keyof AggregateBlogPostPublish]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlogPostPublish[P]>
      : GetScalarType<T[P], AggregateBlogPostPublish[P]>
  }




  export type BlogPostPublishGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogPostPublishWhereInput
    orderBy?: BlogPostPublishOrderByWithAggregationInput | BlogPostPublishOrderByWithAggregationInput[]
    by: BlogPostPublishScalarFieldEnum[] | BlogPostPublishScalarFieldEnum
    having?: BlogPostPublishScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlogPostPublishCountAggregateInputType | true
    _min?: BlogPostPublishMinAggregateInputType
    _max?: BlogPostPublishMaxAggregateInputType
  }

  export type BlogPostPublishGroupByOutputType = {
    revisionHash: string
    categoryName: string
    userId: string
    postHash: string
    postVisibility: boolean
    _count: BlogPostPublishCountAggregateOutputType | null
    _min: BlogPostPublishMinAggregateOutputType | null
    _max: BlogPostPublishMaxAggregateOutputType | null
  }

  type GetBlogPostPublishGroupByPayload<T extends BlogPostPublishGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlogPostPublishGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlogPostPublishGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlogPostPublishGroupByOutputType[P]>
            : GetScalarType<T[P], BlogPostPublishGroupByOutputType[P]>
        }
      >
    >


  export type BlogPostPublishSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    revisionHash?: boolean
    categoryName?: boolean
    userId?: boolean
    postHash?: boolean
    postVisibility?: boolean
    blogPost?: boolean | BlogPostDefaultArgs<ExtArgs>
    blogCategory?: boolean | BlogCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blogPostPublish"]>

  export type BlogPostPublishSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    revisionHash?: boolean
    categoryName?: boolean
    userId?: boolean
    postHash?: boolean
    postVisibility?: boolean
    blogPost?: boolean | BlogPostDefaultArgs<ExtArgs>
    blogCategory?: boolean | BlogCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blogPostPublish"]>

  export type BlogPostPublishSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    revisionHash?: boolean
    categoryName?: boolean
    userId?: boolean
    postHash?: boolean
    postVisibility?: boolean
    blogPost?: boolean | BlogPostDefaultArgs<ExtArgs>
    blogCategory?: boolean | BlogCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blogPostPublish"]>

  export type BlogPostPublishSelectScalar = {
    revisionHash?: boolean
    categoryName?: boolean
    userId?: boolean
    postHash?: boolean
    postVisibility?: boolean
  }

  export type BlogPostPublishOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"revisionHash" | "categoryName" | "userId" | "postHash" | "postVisibility", ExtArgs["result"]["blogPostPublish"]>
  export type BlogPostPublishInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blogPost?: boolean | BlogPostDefaultArgs<ExtArgs>
    blogCategory?: boolean | BlogCategoryDefaultArgs<ExtArgs>
  }
  export type BlogPostPublishIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blogPost?: boolean | BlogPostDefaultArgs<ExtArgs>
    blogCategory?: boolean | BlogCategoryDefaultArgs<ExtArgs>
  }
  export type BlogPostPublishIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blogPost?: boolean | BlogPostDefaultArgs<ExtArgs>
    blogCategory?: boolean | BlogCategoryDefaultArgs<ExtArgs>
  }

  export type $BlogPostPublishPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BlogPostPublish"
    objects: {
      blogPost: Prisma.$BlogPostPayload<ExtArgs>
      blogCategory: Prisma.$BlogCategoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      revisionHash: string
      categoryName: string
      userId: string
      postHash: string
      postVisibility: boolean
    }, ExtArgs["result"]["blogPostPublish"]>
    composites: {}
  }

  type BlogPostPublishGetPayload<S extends boolean | null | undefined | BlogPostPublishDefaultArgs> = $Result.GetResult<Prisma.$BlogPostPublishPayload, S>

  type BlogPostPublishCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BlogPostPublishFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BlogPostPublishCountAggregateInputType | true
    }

  export interface BlogPostPublishDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BlogPostPublish'], meta: { name: 'BlogPostPublish' } }
    /**
     * Find zero or one BlogPostPublish that matches the filter.
     * @param {BlogPostPublishFindUniqueArgs} args - Arguments to find a BlogPostPublish
     * @example
     * // Get one BlogPostPublish
     * const blogPostPublish = await prisma.blogPostPublish.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BlogPostPublishFindUniqueArgs>(args: SelectSubset<T, BlogPostPublishFindUniqueArgs<ExtArgs>>): Prisma__BlogPostPublishClient<$Result.GetResult<Prisma.$BlogPostPublishPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BlogPostPublish that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BlogPostPublishFindUniqueOrThrowArgs} args - Arguments to find a BlogPostPublish
     * @example
     * // Get one BlogPostPublish
     * const blogPostPublish = await prisma.blogPostPublish.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BlogPostPublishFindUniqueOrThrowArgs>(args: SelectSubset<T, BlogPostPublishFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BlogPostPublishClient<$Result.GetResult<Prisma.$BlogPostPublishPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlogPostPublish that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostPublishFindFirstArgs} args - Arguments to find a BlogPostPublish
     * @example
     * // Get one BlogPostPublish
     * const blogPostPublish = await prisma.blogPostPublish.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BlogPostPublishFindFirstArgs>(args?: SelectSubset<T, BlogPostPublishFindFirstArgs<ExtArgs>>): Prisma__BlogPostPublishClient<$Result.GetResult<Prisma.$BlogPostPublishPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlogPostPublish that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostPublishFindFirstOrThrowArgs} args - Arguments to find a BlogPostPublish
     * @example
     * // Get one BlogPostPublish
     * const blogPostPublish = await prisma.blogPostPublish.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BlogPostPublishFindFirstOrThrowArgs>(args?: SelectSubset<T, BlogPostPublishFindFirstOrThrowArgs<ExtArgs>>): Prisma__BlogPostPublishClient<$Result.GetResult<Prisma.$BlogPostPublishPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BlogPostPublishes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostPublishFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BlogPostPublishes
     * const blogPostPublishes = await prisma.blogPostPublish.findMany()
     * 
     * // Get first 10 BlogPostPublishes
     * const blogPostPublishes = await prisma.blogPostPublish.findMany({ take: 10 })
     * 
     * // Only select the `revisionHash`
     * const blogPostPublishWithRevisionHashOnly = await prisma.blogPostPublish.findMany({ select: { revisionHash: true } })
     * 
     */
    findMany<T extends BlogPostPublishFindManyArgs>(args?: SelectSubset<T, BlogPostPublishFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPostPublishPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BlogPostPublish.
     * @param {BlogPostPublishCreateArgs} args - Arguments to create a BlogPostPublish.
     * @example
     * // Create one BlogPostPublish
     * const BlogPostPublish = await prisma.blogPostPublish.create({
     *   data: {
     *     // ... data to create a BlogPostPublish
     *   }
     * })
     * 
     */
    create<T extends BlogPostPublishCreateArgs>(args: SelectSubset<T, BlogPostPublishCreateArgs<ExtArgs>>): Prisma__BlogPostPublishClient<$Result.GetResult<Prisma.$BlogPostPublishPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BlogPostPublishes.
     * @param {BlogPostPublishCreateManyArgs} args - Arguments to create many BlogPostPublishes.
     * @example
     * // Create many BlogPostPublishes
     * const blogPostPublish = await prisma.blogPostPublish.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BlogPostPublishCreateManyArgs>(args?: SelectSubset<T, BlogPostPublishCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BlogPostPublishes and returns the data saved in the database.
     * @param {BlogPostPublishCreateManyAndReturnArgs} args - Arguments to create many BlogPostPublishes.
     * @example
     * // Create many BlogPostPublishes
     * const blogPostPublish = await prisma.blogPostPublish.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BlogPostPublishes and only return the `revisionHash`
     * const blogPostPublishWithRevisionHashOnly = await prisma.blogPostPublish.createManyAndReturn({
     *   select: { revisionHash: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BlogPostPublishCreateManyAndReturnArgs>(args?: SelectSubset<T, BlogPostPublishCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPostPublishPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BlogPostPublish.
     * @param {BlogPostPublishDeleteArgs} args - Arguments to delete one BlogPostPublish.
     * @example
     * // Delete one BlogPostPublish
     * const BlogPostPublish = await prisma.blogPostPublish.delete({
     *   where: {
     *     // ... filter to delete one BlogPostPublish
     *   }
     * })
     * 
     */
    delete<T extends BlogPostPublishDeleteArgs>(args: SelectSubset<T, BlogPostPublishDeleteArgs<ExtArgs>>): Prisma__BlogPostPublishClient<$Result.GetResult<Prisma.$BlogPostPublishPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BlogPostPublish.
     * @param {BlogPostPublishUpdateArgs} args - Arguments to update one BlogPostPublish.
     * @example
     * // Update one BlogPostPublish
     * const blogPostPublish = await prisma.blogPostPublish.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BlogPostPublishUpdateArgs>(args: SelectSubset<T, BlogPostPublishUpdateArgs<ExtArgs>>): Prisma__BlogPostPublishClient<$Result.GetResult<Prisma.$BlogPostPublishPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BlogPostPublishes.
     * @param {BlogPostPublishDeleteManyArgs} args - Arguments to filter BlogPostPublishes to delete.
     * @example
     * // Delete a few BlogPostPublishes
     * const { count } = await prisma.blogPostPublish.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BlogPostPublishDeleteManyArgs>(args?: SelectSubset<T, BlogPostPublishDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlogPostPublishes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostPublishUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BlogPostPublishes
     * const blogPostPublish = await prisma.blogPostPublish.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BlogPostPublishUpdateManyArgs>(args: SelectSubset<T, BlogPostPublishUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlogPostPublishes and returns the data updated in the database.
     * @param {BlogPostPublishUpdateManyAndReturnArgs} args - Arguments to update many BlogPostPublishes.
     * @example
     * // Update many BlogPostPublishes
     * const blogPostPublish = await prisma.blogPostPublish.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BlogPostPublishes and only return the `revisionHash`
     * const blogPostPublishWithRevisionHashOnly = await prisma.blogPostPublish.updateManyAndReturn({
     *   select: { revisionHash: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BlogPostPublishUpdateManyAndReturnArgs>(args: SelectSubset<T, BlogPostPublishUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPostPublishPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BlogPostPublish.
     * @param {BlogPostPublishUpsertArgs} args - Arguments to update or create a BlogPostPublish.
     * @example
     * // Update or create a BlogPostPublish
     * const blogPostPublish = await prisma.blogPostPublish.upsert({
     *   create: {
     *     // ... data to create a BlogPostPublish
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BlogPostPublish we want to update
     *   }
     * })
     */
    upsert<T extends BlogPostPublishUpsertArgs>(args: SelectSubset<T, BlogPostPublishUpsertArgs<ExtArgs>>): Prisma__BlogPostPublishClient<$Result.GetResult<Prisma.$BlogPostPublishPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BlogPostPublishes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostPublishCountArgs} args - Arguments to filter BlogPostPublishes to count.
     * @example
     * // Count the number of BlogPostPublishes
     * const count = await prisma.blogPostPublish.count({
     *   where: {
     *     // ... the filter for the BlogPostPublishes we want to count
     *   }
     * })
    **/
    count<T extends BlogPostPublishCountArgs>(
      args?: Subset<T, BlogPostPublishCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlogPostPublishCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BlogPostPublish.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostPublishAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BlogPostPublishAggregateArgs>(args: Subset<T, BlogPostPublishAggregateArgs>): Prisma.PrismaPromise<GetBlogPostPublishAggregateType<T>>

    /**
     * Group by BlogPostPublish.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostPublishGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BlogPostPublishGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlogPostPublishGroupByArgs['orderBy'] }
        : { orderBy?: BlogPostPublishGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BlogPostPublishGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlogPostPublishGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BlogPostPublish model
   */
  readonly fields: BlogPostPublishFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BlogPostPublish.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlogPostPublishClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    blogPost<T extends BlogPostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BlogPostDefaultArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    blogCategory<T extends BlogCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BlogCategoryDefaultArgs<ExtArgs>>): Prisma__BlogCategoryClient<$Result.GetResult<Prisma.$BlogCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BlogPostPublish model
   */
  interface BlogPostPublishFieldRefs {
    readonly revisionHash: FieldRef<"BlogPostPublish", 'String'>
    readonly categoryName: FieldRef<"BlogPostPublish", 'String'>
    readonly userId: FieldRef<"BlogPostPublish", 'String'>
    readonly postHash: FieldRef<"BlogPostPublish", 'String'>
    readonly postVisibility: FieldRef<"BlogPostPublish", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * BlogPostPublish findUnique
   */
  export type BlogPostPublishFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostPublish
     */
    select?: BlogPostPublishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPostPublish
     */
    omit?: BlogPostPublishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostPublishInclude<ExtArgs> | null
    /**
     * Filter, which BlogPostPublish to fetch.
     */
    where: BlogPostPublishWhereUniqueInput
  }

  /**
   * BlogPostPublish findUniqueOrThrow
   */
  export type BlogPostPublishFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostPublish
     */
    select?: BlogPostPublishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPostPublish
     */
    omit?: BlogPostPublishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostPublishInclude<ExtArgs> | null
    /**
     * Filter, which BlogPostPublish to fetch.
     */
    where: BlogPostPublishWhereUniqueInput
  }

  /**
   * BlogPostPublish findFirst
   */
  export type BlogPostPublishFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostPublish
     */
    select?: BlogPostPublishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPostPublish
     */
    omit?: BlogPostPublishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostPublishInclude<ExtArgs> | null
    /**
     * Filter, which BlogPostPublish to fetch.
     */
    where?: BlogPostPublishWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogPostPublishes to fetch.
     */
    orderBy?: BlogPostPublishOrderByWithRelationInput | BlogPostPublishOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlogPostPublishes.
     */
    cursor?: BlogPostPublishWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogPostPublishes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogPostPublishes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlogPostPublishes.
     */
    distinct?: BlogPostPublishScalarFieldEnum | BlogPostPublishScalarFieldEnum[]
  }

  /**
   * BlogPostPublish findFirstOrThrow
   */
  export type BlogPostPublishFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostPublish
     */
    select?: BlogPostPublishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPostPublish
     */
    omit?: BlogPostPublishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostPublishInclude<ExtArgs> | null
    /**
     * Filter, which BlogPostPublish to fetch.
     */
    where?: BlogPostPublishWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogPostPublishes to fetch.
     */
    orderBy?: BlogPostPublishOrderByWithRelationInput | BlogPostPublishOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlogPostPublishes.
     */
    cursor?: BlogPostPublishWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogPostPublishes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogPostPublishes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlogPostPublishes.
     */
    distinct?: BlogPostPublishScalarFieldEnum | BlogPostPublishScalarFieldEnum[]
  }

  /**
   * BlogPostPublish findMany
   */
  export type BlogPostPublishFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostPublish
     */
    select?: BlogPostPublishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPostPublish
     */
    omit?: BlogPostPublishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostPublishInclude<ExtArgs> | null
    /**
     * Filter, which BlogPostPublishes to fetch.
     */
    where?: BlogPostPublishWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogPostPublishes to fetch.
     */
    orderBy?: BlogPostPublishOrderByWithRelationInput | BlogPostPublishOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BlogPostPublishes.
     */
    cursor?: BlogPostPublishWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogPostPublishes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogPostPublishes.
     */
    skip?: number
    distinct?: BlogPostPublishScalarFieldEnum | BlogPostPublishScalarFieldEnum[]
  }

  /**
   * BlogPostPublish create
   */
  export type BlogPostPublishCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostPublish
     */
    select?: BlogPostPublishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPostPublish
     */
    omit?: BlogPostPublishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostPublishInclude<ExtArgs> | null
    /**
     * The data needed to create a BlogPostPublish.
     */
    data: XOR<BlogPostPublishCreateInput, BlogPostPublishUncheckedCreateInput>
  }

  /**
   * BlogPostPublish createMany
   */
  export type BlogPostPublishCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BlogPostPublishes.
     */
    data: BlogPostPublishCreateManyInput | BlogPostPublishCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BlogPostPublish createManyAndReturn
   */
  export type BlogPostPublishCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostPublish
     */
    select?: BlogPostPublishSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPostPublish
     */
    omit?: BlogPostPublishOmit<ExtArgs> | null
    /**
     * The data used to create many BlogPostPublishes.
     */
    data: BlogPostPublishCreateManyInput | BlogPostPublishCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostPublishIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BlogPostPublish update
   */
  export type BlogPostPublishUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostPublish
     */
    select?: BlogPostPublishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPostPublish
     */
    omit?: BlogPostPublishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostPublishInclude<ExtArgs> | null
    /**
     * The data needed to update a BlogPostPublish.
     */
    data: XOR<BlogPostPublishUpdateInput, BlogPostPublishUncheckedUpdateInput>
    /**
     * Choose, which BlogPostPublish to update.
     */
    where: BlogPostPublishWhereUniqueInput
  }

  /**
   * BlogPostPublish updateMany
   */
  export type BlogPostPublishUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BlogPostPublishes.
     */
    data: XOR<BlogPostPublishUpdateManyMutationInput, BlogPostPublishUncheckedUpdateManyInput>
    /**
     * Filter which BlogPostPublishes to update
     */
    where?: BlogPostPublishWhereInput
    /**
     * Limit how many BlogPostPublishes to update.
     */
    limit?: number
  }

  /**
   * BlogPostPublish updateManyAndReturn
   */
  export type BlogPostPublishUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostPublish
     */
    select?: BlogPostPublishSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPostPublish
     */
    omit?: BlogPostPublishOmit<ExtArgs> | null
    /**
     * The data used to update BlogPostPublishes.
     */
    data: XOR<BlogPostPublishUpdateManyMutationInput, BlogPostPublishUncheckedUpdateManyInput>
    /**
     * Filter which BlogPostPublishes to update
     */
    where?: BlogPostPublishWhereInput
    /**
     * Limit how many BlogPostPublishes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostPublishIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BlogPostPublish upsert
   */
  export type BlogPostPublishUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostPublish
     */
    select?: BlogPostPublishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPostPublish
     */
    omit?: BlogPostPublishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostPublishInclude<ExtArgs> | null
    /**
     * The filter to search for the BlogPostPublish to update in case it exists.
     */
    where: BlogPostPublishWhereUniqueInput
    /**
     * In case the BlogPostPublish found by the `where` argument doesn't exist, create a new BlogPostPublish with this data.
     */
    create: XOR<BlogPostPublishCreateInput, BlogPostPublishUncheckedCreateInput>
    /**
     * In case the BlogPostPublish was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlogPostPublishUpdateInput, BlogPostPublishUncheckedUpdateInput>
  }

  /**
   * BlogPostPublish delete
   */
  export type BlogPostPublishDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostPublish
     */
    select?: BlogPostPublishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPostPublish
     */
    omit?: BlogPostPublishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostPublishInclude<ExtArgs> | null
    /**
     * Filter which BlogPostPublish to delete.
     */
    where: BlogPostPublishWhereUniqueInput
  }

  /**
   * BlogPostPublish deleteMany
   */
  export type BlogPostPublishDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlogPostPublishes to delete
     */
    where?: BlogPostPublishWhereInput
    /**
     * Limit how many BlogPostPublishes to delete.
     */
    limit?: number
  }

  /**
   * BlogPostPublish without action
   */
  export type BlogPostPublishDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostPublish
     */
    select?: BlogPostPublishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPostPublish
     */
    omit?: BlogPostPublishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostPublishInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    userId: 'userId',
    userName: 'userName',
    userPassword: 'userPassword',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TagScalarFieldEnum: {
    tagName: 'tagName',
    userId: 'userId'
  };

  export type TagScalarFieldEnum = (typeof TagScalarFieldEnum)[keyof typeof TagScalarFieldEnum]


  export const BlogCategoryScalarFieldEnum: {
    categoryName: 'categoryName',
    userId: 'userId',
    privateCount: 'privateCount',
    publicCount: 'publicCount',
    categoryDepth: 'categoryDepth',
    upperCategoryName: 'upperCategoryName'
  };

  export type BlogCategoryScalarFieldEnum = (typeof BlogCategoryScalarFieldEnum)[keyof typeof BlogCategoryScalarFieldEnum]


  export const BlogPostMetaScalarFieldEnum: {
    postHash: 'postHash',
    userId: 'userId',
    postDelete: 'postDelete',
    postViewCount: 'postViewCount',
    postLikeCount: 'postLikeCount',
    postMainImageUrl: 'postMainImageUrl'
  };

  export type BlogPostMetaScalarFieldEnum = (typeof BlogPostMetaScalarFieldEnum)[keyof typeof BlogPostMetaScalarFieldEnum]


  export const BlogExtraFileScalarFieldEnum: {
    extraFileId: 'extraFileId',
    postHash: 'postHash',
    userId: 'userId',
    extraFileUrl: 'extraFileUrl',
    extraFileAlt: 'extraFileAlt'
  };

  export type BlogExtraFileScalarFieldEnum = (typeof BlogExtraFileScalarFieldEnum)[keyof typeof BlogExtraFileScalarFieldEnum]


  export const BlogPostTagScalarFieldEnum: {
    tagName: 'tagName',
    postHash: 'postHash',
    userId: 'userId'
  };

  export type BlogPostTagScalarFieldEnum = (typeof BlogPostTagScalarFieldEnum)[keyof typeof BlogPostTagScalarFieldEnum]


  export const BlogPostScalarFieldEnum: {
    revisionHash: 'revisionHash',
    postHash: 'postHash',
    userId: 'userId',
    postTitle: 'postTitle',
    postContent: 'postContent',
    postDraft: 'postDraft',
    postCreatedAt: 'postCreatedAt',
    postUpdatedAt: 'postUpdatedAt',
    postPublished: 'postPublished',
    postReadTimeSeconds: 'postReadTimeSeconds'
  };

  export type BlogPostScalarFieldEnum = (typeof BlogPostScalarFieldEnum)[keyof typeof BlogPostScalarFieldEnum]


  export const BlogPostPublishScalarFieldEnum: {
    revisionHash: 'revisionHash',
    categoryName: 'categoryName',
    userId: 'userId',
    postHash: 'postHash',
    postVisibility: 'postVisibility'
  };

  export type BlogPostPublishScalarFieldEnum = (typeof BlogPostPublishScalarFieldEnum)[keyof typeof BlogPostPublishScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    userId?: StringFilter<"User"> | string
    userName?: StringFilter<"User"> | string
    userPassword?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    tag?: TagListRelationFilter
    blogCategory?: BlogCategoryListRelationFilter
    blogPostMeta?: BlogPostMetaListRelationFilter
    blogPostTag?: BlogPostTagListRelationFilter
    blogExtraFile?: BlogExtraFileListRelationFilter
    blogPost?: BlogPostListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    userId?: SortOrder
    userName?: SortOrder
    userPassword?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tag?: TagOrderByRelationAggregateInput
    blogCategory?: BlogCategoryOrderByRelationAggregateInput
    blogPostMeta?: BlogPostMetaOrderByRelationAggregateInput
    blogPostTag?: BlogPostTagOrderByRelationAggregateInput
    blogExtraFile?: BlogExtraFileOrderByRelationAggregateInput
    blogPost?: BlogPostOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    userId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    userName?: StringFilter<"User"> | string
    userPassword?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    tag?: TagListRelationFilter
    blogCategory?: BlogCategoryListRelationFilter
    blogPostMeta?: BlogPostMetaListRelationFilter
    blogPostTag?: BlogPostTagListRelationFilter
    blogExtraFile?: BlogExtraFileListRelationFilter
    blogPost?: BlogPostListRelationFilter
  }, "userId">

  export type UserOrderByWithAggregationInput = {
    userId?: SortOrder
    userName?: SortOrder
    userPassword?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"User"> | string
    userName?: StringWithAggregatesFilter<"User"> | string
    userPassword?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type TagWhereInput = {
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    tagName?: StringFilter<"Tag"> | string
    userId?: StringFilter<"Tag"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    blogPostTag?: BlogPostTagListRelationFilter
  }

  export type TagOrderByWithRelationInput = {
    tagName?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    blogPostTag?: BlogPostTagOrderByRelationAggregateInput
  }

  export type TagWhereUniqueInput = Prisma.AtLeast<{
    tagName_userId?: TagTagNameUserIdCompoundUniqueInput
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    tagName?: StringFilter<"Tag"> | string
    userId?: StringFilter<"Tag"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    blogPostTag?: BlogPostTagListRelationFilter
  }, "tagName_userId">

  export type TagOrderByWithAggregationInput = {
    tagName?: SortOrder
    userId?: SortOrder
    _count?: TagCountOrderByAggregateInput
    _max?: TagMaxOrderByAggregateInput
    _min?: TagMinOrderByAggregateInput
  }

  export type TagScalarWhereWithAggregatesInput = {
    AND?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    OR?: TagScalarWhereWithAggregatesInput[]
    NOT?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    tagName?: StringWithAggregatesFilter<"Tag"> | string
    userId?: StringWithAggregatesFilter<"Tag"> | string
  }

  export type BlogCategoryWhereInput = {
    AND?: BlogCategoryWhereInput | BlogCategoryWhereInput[]
    OR?: BlogCategoryWhereInput[]
    NOT?: BlogCategoryWhereInput | BlogCategoryWhereInput[]
    categoryName?: StringFilter<"BlogCategory"> | string
    userId?: StringFilter<"BlogCategory"> | string
    privateCount?: BigIntFilter<"BlogCategory"> | bigint | number
    publicCount?: BigIntFilter<"BlogCategory"> | bigint | number
    categoryDepth?: IntFilter<"BlogCategory"> | number
    upperCategoryName?: StringNullableFilter<"BlogCategory"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    upperCategory?: XOR<BlogCategoryNullableScalarRelationFilter, BlogCategoryWhereInput> | null
    lowerCategories?: BlogCategoryListRelationFilter
    blogPostPublish?: BlogPostPublishListRelationFilter
  }

  export type BlogCategoryOrderByWithRelationInput = {
    categoryName?: SortOrder
    userId?: SortOrder
    privateCount?: SortOrder
    publicCount?: SortOrder
    categoryDepth?: SortOrder
    upperCategoryName?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    upperCategory?: BlogCategoryOrderByWithRelationInput
    lowerCategories?: BlogCategoryOrderByRelationAggregateInput
    blogPostPublish?: BlogPostPublishOrderByRelationAggregateInput
  }

  export type BlogCategoryWhereUniqueInput = Prisma.AtLeast<{
    categoryName?: string
    AND?: BlogCategoryWhereInput | BlogCategoryWhereInput[]
    OR?: BlogCategoryWhereInput[]
    NOT?: BlogCategoryWhereInput | BlogCategoryWhereInput[]
    userId?: StringFilter<"BlogCategory"> | string
    privateCount?: BigIntFilter<"BlogCategory"> | bigint | number
    publicCount?: BigIntFilter<"BlogCategory"> | bigint | number
    categoryDepth?: IntFilter<"BlogCategory"> | number
    upperCategoryName?: StringNullableFilter<"BlogCategory"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    upperCategory?: XOR<BlogCategoryNullableScalarRelationFilter, BlogCategoryWhereInput> | null
    lowerCategories?: BlogCategoryListRelationFilter
    blogPostPublish?: BlogPostPublishListRelationFilter
  }, "categoryName">

  export type BlogCategoryOrderByWithAggregationInput = {
    categoryName?: SortOrder
    userId?: SortOrder
    privateCount?: SortOrder
    publicCount?: SortOrder
    categoryDepth?: SortOrder
    upperCategoryName?: SortOrderInput | SortOrder
    _count?: BlogCategoryCountOrderByAggregateInput
    _avg?: BlogCategoryAvgOrderByAggregateInput
    _max?: BlogCategoryMaxOrderByAggregateInput
    _min?: BlogCategoryMinOrderByAggregateInput
    _sum?: BlogCategorySumOrderByAggregateInput
  }

  export type BlogCategoryScalarWhereWithAggregatesInput = {
    AND?: BlogCategoryScalarWhereWithAggregatesInput | BlogCategoryScalarWhereWithAggregatesInput[]
    OR?: BlogCategoryScalarWhereWithAggregatesInput[]
    NOT?: BlogCategoryScalarWhereWithAggregatesInput | BlogCategoryScalarWhereWithAggregatesInput[]
    categoryName?: StringWithAggregatesFilter<"BlogCategory"> | string
    userId?: StringWithAggregatesFilter<"BlogCategory"> | string
    privateCount?: BigIntWithAggregatesFilter<"BlogCategory"> | bigint | number
    publicCount?: BigIntWithAggregatesFilter<"BlogCategory"> | bigint | number
    categoryDepth?: IntWithAggregatesFilter<"BlogCategory"> | number
    upperCategoryName?: StringNullableWithAggregatesFilter<"BlogCategory"> | string | null
  }

  export type BlogPostMetaWhereInput = {
    AND?: BlogPostMetaWhereInput | BlogPostMetaWhereInput[]
    OR?: BlogPostMetaWhereInput[]
    NOT?: BlogPostMetaWhereInput | BlogPostMetaWhereInput[]
    postHash?: StringFilter<"BlogPostMeta"> | string
    userId?: StringFilter<"BlogPostMeta"> | string
    postDelete?: BoolFilter<"BlogPostMeta"> | boolean
    postViewCount?: IntFilter<"BlogPostMeta"> | number
    postLikeCount?: IntFilter<"BlogPostMeta"> | number
    postMainImageUrl?: StringNullableFilter<"BlogPostMeta"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    extraFile?: BlogExtraFileListRelationFilter
    blogPostTag?: BlogPostTagListRelationFilter
    blogPost?: BlogPostListRelationFilter
  }

  export type BlogPostMetaOrderByWithRelationInput = {
    postHash?: SortOrder
    userId?: SortOrder
    postDelete?: SortOrder
    postViewCount?: SortOrder
    postLikeCount?: SortOrder
    postMainImageUrl?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    extraFile?: BlogExtraFileOrderByRelationAggregateInput
    blogPostTag?: BlogPostTagOrderByRelationAggregateInput
    blogPost?: BlogPostOrderByRelationAggregateInput
  }

  export type BlogPostMetaWhereUniqueInput = Prisma.AtLeast<{
    postHash?: string
    AND?: BlogPostMetaWhereInput | BlogPostMetaWhereInput[]
    OR?: BlogPostMetaWhereInput[]
    NOT?: BlogPostMetaWhereInput | BlogPostMetaWhereInput[]
    userId?: StringFilter<"BlogPostMeta"> | string
    postDelete?: BoolFilter<"BlogPostMeta"> | boolean
    postViewCount?: IntFilter<"BlogPostMeta"> | number
    postLikeCount?: IntFilter<"BlogPostMeta"> | number
    postMainImageUrl?: StringNullableFilter<"BlogPostMeta"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    extraFile?: BlogExtraFileListRelationFilter
    blogPostTag?: BlogPostTagListRelationFilter
    blogPost?: BlogPostListRelationFilter
  }, "postHash">

  export type BlogPostMetaOrderByWithAggregationInput = {
    postHash?: SortOrder
    userId?: SortOrder
    postDelete?: SortOrder
    postViewCount?: SortOrder
    postLikeCount?: SortOrder
    postMainImageUrl?: SortOrderInput | SortOrder
    _count?: BlogPostMetaCountOrderByAggregateInput
    _avg?: BlogPostMetaAvgOrderByAggregateInput
    _max?: BlogPostMetaMaxOrderByAggregateInput
    _min?: BlogPostMetaMinOrderByAggregateInput
    _sum?: BlogPostMetaSumOrderByAggregateInput
  }

  export type BlogPostMetaScalarWhereWithAggregatesInput = {
    AND?: BlogPostMetaScalarWhereWithAggregatesInput | BlogPostMetaScalarWhereWithAggregatesInput[]
    OR?: BlogPostMetaScalarWhereWithAggregatesInput[]
    NOT?: BlogPostMetaScalarWhereWithAggregatesInput | BlogPostMetaScalarWhereWithAggregatesInput[]
    postHash?: StringWithAggregatesFilter<"BlogPostMeta"> | string
    userId?: StringWithAggregatesFilter<"BlogPostMeta"> | string
    postDelete?: BoolWithAggregatesFilter<"BlogPostMeta"> | boolean
    postViewCount?: IntWithAggregatesFilter<"BlogPostMeta"> | number
    postLikeCount?: IntWithAggregatesFilter<"BlogPostMeta"> | number
    postMainImageUrl?: StringNullableWithAggregatesFilter<"BlogPostMeta"> | string | null
  }

  export type BlogExtraFileWhereInput = {
    AND?: BlogExtraFileWhereInput | BlogExtraFileWhereInput[]
    OR?: BlogExtraFileWhereInput[]
    NOT?: BlogExtraFileWhereInput | BlogExtraFileWhereInput[]
    extraFileId?: IntFilter<"BlogExtraFile"> | number
    postHash?: StringFilter<"BlogExtraFile"> | string
    userId?: StringFilter<"BlogExtraFile"> | string
    extraFileUrl?: StringFilter<"BlogExtraFile"> | string
    extraFileAlt?: StringFilter<"BlogExtraFile"> | string
    blogPostMeta?: XOR<BlogPostMetaScalarRelationFilter, BlogPostMetaWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type BlogExtraFileOrderByWithRelationInput = {
    extraFileId?: SortOrder
    postHash?: SortOrder
    userId?: SortOrder
    extraFileUrl?: SortOrder
    extraFileAlt?: SortOrder
    blogPostMeta?: BlogPostMetaOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type BlogExtraFileWhereUniqueInput = Prisma.AtLeast<{
    extraFileId?: number
    AND?: BlogExtraFileWhereInput | BlogExtraFileWhereInput[]
    OR?: BlogExtraFileWhereInput[]
    NOT?: BlogExtraFileWhereInput | BlogExtraFileWhereInput[]
    postHash?: StringFilter<"BlogExtraFile"> | string
    userId?: StringFilter<"BlogExtraFile"> | string
    extraFileUrl?: StringFilter<"BlogExtraFile"> | string
    extraFileAlt?: StringFilter<"BlogExtraFile"> | string
    blogPostMeta?: XOR<BlogPostMetaScalarRelationFilter, BlogPostMetaWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "extraFileId">

  export type BlogExtraFileOrderByWithAggregationInput = {
    extraFileId?: SortOrder
    postHash?: SortOrder
    userId?: SortOrder
    extraFileUrl?: SortOrder
    extraFileAlt?: SortOrder
    _count?: BlogExtraFileCountOrderByAggregateInput
    _avg?: BlogExtraFileAvgOrderByAggregateInput
    _max?: BlogExtraFileMaxOrderByAggregateInput
    _min?: BlogExtraFileMinOrderByAggregateInput
    _sum?: BlogExtraFileSumOrderByAggregateInput
  }

  export type BlogExtraFileScalarWhereWithAggregatesInput = {
    AND?: BlogExtraFileScalarWhereWithAggregatesInput | BlogExtraFileScalarWhereWithAggregatesInput[]
    OR?: BlogExtraFileScalarWhereWithAggregatesInput[]
    NOT?: BlogExtraFileScalarWhereWithAggregatesInput | BlogExtraFileScalarWhereWithAggregatesInput[]
    extraFileId?: IntWithAggregatesFilter<"BlogExtraFile"> | number
    postHash?: StringWithAggregatesFilter<"BlogExtraFile"> | string
    userId?: StringWithAggregatesFilter<"BlogExtraFile"> | string
    extraFileUrl?: StringWithAggregatesFilter<"BlogExtraFile"> | string
    extraFileAlt?: StringWithAggregatesFilter<"BlogExtraFile"> | string
  }

  export type BlogPostTagWhereInput = {
    AND?: BlogPostTagWhereInput | BlogPostTagWhereInput[]
    OR?: BlogPostTagWhereInput[]
    NOT?: BlogPostTagWhereInput | BlogPostTagWhereInput[]
    tagName?: StringFilter<"BlogPostTag"> | string
    postHash?: StringFilter<"BlogPostTag"> | string
    userId?: StringFilter<"BlogPostTag"> | string
    tag?: XOR<TagScalarRelationFilter, TagWhereInput>
    blogPostMeta?: XOR<BlogPostMetaScalarRelationFilter, BlogPostMetaWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type BlogPostTagOrderByWithRelationInput = {
    tagName?: SortOrder
    postHash?: SortOrder
    userId?: SortOrder
    tag?: TagOrderByWithRelationInput
    blogPostMeta?: BlogPostMetaOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type BlogPostTagWhereUniqueInput = Prisma.AtLeast<{
    tagName_postHash?: BlogPostTagTagNamePostHashCompoundUniqueInput
    AND?: BlogPostTagWhereInput | BlogPostTagWhereInput[]
    OR?: BlogPostTagWhereInput[]
    NOT?: BlogPostTagWhereInput | BlogPostTagWhereInput[]
    tagName?: StringFilter<"BlogPostTag"> | string
    postHash?: StringFilter<"BlogPostTag"> | string
    userId?: StringFilter<"BlogPostTag"> | string
    tag?: XOR<TagScalarRelationFilter, TagWhereInput>
    blogPostMeta?: XOR<BlogPostMetaScalarRelationFilter, BlogPostMetaWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "tagName_postHash">

  export type BlogPostTagOrderByWithAggregationInput = {
    tagName?: SortOrder
    postHash?: SortOrder
    userId?: SortOrder
    _count?: BlogPostTagCountOrderByAggregateInput
    _max?: BlogPostTagMaxOrderByAggregateInput
    _min?: BlogPostTagMinOrderByAggregateInput
  }

  export type BlogPostTagScalarWhereWithAggregatesInput = {
    AND?: BlogPostTagScalarWhereWithAggregatesInput | BlogPostTagScalarWhereWithAggregatesInput[]
    OR?: BlogPostTagScalarWhereWithAggregatesInput[]
    NOT?: BlogPostTagScalarWhereWithAggregatesInput | BlogPostTagScalarWhereWithAggregatesInput[]
    tagName?: StringWithAggregatesFilter<"BlogPostTag"> | string
    postHash?: StringWithAggregatesFilter<"BlogPostTag"> | string
    userId?: StringWithAggregatesFilter<"BlogPostTag"> | string
  }

  export type BlogPostWhereInput = {
    AND?: BlogPostWhereInput | BlogPostWhereInput[]
    OR?: BlogPostWhereInput[]
    NOT?: BlogPostWhereInput | BlogPostWhereInput[]
    revisionHash?: StringFilter<"BlogPost"> | string
    postHash?: StringFilter<"BlogPost"> | string
    userId?: StringFilter<"BlogPost"> | string
    postTitle?: StringFilter<"BlogPost"> | string
    postContent?: StringFilter<"BlogPost"> | string
    postDraft?: BoolFilter<"BlogPost"> | boolean
    postCreatedAt?: DateTimeFilter<"BlogPost"> | Date | string
    postUpdatedAt?: DateTimeFilter<"BlogPost"> | Date | string
    postPublished?: DateTimeNullableFilter<"BlogPost"> | Date | string | null
    postReadTimeSeconds?: IntFilter<"BlogPost"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    blogPostMeta?: XOR<BlogPostMetaScalarRelationFilter, BlogPostMetaWhereInput>
    blogPostPublish?: XOR<BlogPostPublishNullableScalarRelationFilter, BlogPostPublishWhereInput> | null
  }

  export type BlogPostOrderByWithRelationInput = {
    revisionHash?: SortOrder
    postHash?: SortOrder
    userId?: SortOrder
    postTitle?: SortOrder
    postContent?: SortOrder
    postDraft?: SortOrder
    postCreatedAt?: SortOrder
    postUpdatedAt?: SortOrder
    postPublished?: SortOrderInput | SortOrder
    postReadTimeSeconds?: SortOrder
    user?: UserOrderByWithRelationInput
    blogPostMeta?: BlogPostMetaOrderByWithRelationInput
    blogPostPublish?: BlogPostPublishOrderByWithRelationInput
  }

  export type BlogPostWhereUniqueInput = Prisma.AtLeast<{
    revisionHash?: string
    revisionHash_postHash_userId?: BlogPostRevisionHashPostHashUserIdCompoundUniqueInput
    postHash_postDraft?: BlogPostPostHashPostDraftCompoundUniqueInput
    AND?: BlogPostWhereInput | BlogPostWhereInput[]
    OR?: BlogPostWhereInput[]
    NOT?: BlogPostWhereInput | BlogPostWhereInput[]
    postHash?: StringFilter<"BlogPost"> | string
    userId?: StringFilter<"BlogPost"> | string
    postTitle?: StringFilter<"BlogPost"> | string
    postContent?: StringFilter<"BlogPost"> | string
    postDraft?: BoolFilter<"BlogPost"> | boolean
    postCreatedAt?: DateTimeFilter<"BlogPost"> | Date | string
    postUpdatedAt?: DateTimeFilter<"BlogPost"> | Date | string
    postPublished?: DateTimeNullableFilter<"BlogPost"> | Date | string | null
    postReadTimeSeconds?: IntFilter<"BlogPost"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    blogPostMeta?: XOR<BlogPostMetaScalarRelationFilter, BlogPostMetaWhereInput>
    blogPostPublish?: XOR<BlogPostPublishNullableScalarRelationFilter, BlogPostPublishWhereInput> | null
  }, "revisionHash" | "revisionHash_postHash_userId" | "postHash_postDraft">

  export type BlogPostOrderByWithAggregationInput = {
    revisionHash?: SortOrder
    postHash?: SortOrder
    userId?: SortOrder
    postTitle?: SortOrder
    postContent?: SortOrder
    postDraft?: SortOrder
    postCreatedAt?: SortOrder
    postUpdatedAt?: SortOrder
    postPublished?: SortOrderInput | SortOrder
    postReadTimeSeconds?: SortOrder
    _count?: BlogPostCountOrderByAggregateInput
    _avg?: BlogPostAvgOrderByAggregateInput
    _max?: BlogPostMaxOrderByAggregateInput
    _min?: BlogPostMinOrderByAggregateInput
    _sum?: BlogPostSumOrderByAggregateInput
  }

  export type BlogPostScalarWhereWithAggregatesInput = {
    AND?: BlogPostScalarWhereWithAggregatesInput | BlogPostScalarWhereWithAggregatesInput[]
    OR?: BlogPostScalarWhereWithAggregatesInput[]
    NOT?: BlogPostScalarWhereWithAggregatesInput | BlogPostScalarWhereWithAggregatesInput[]
    revisionHash?: StringWithAggregatesFilter<"BlogPost"> | string
    postHash?: StringWithAggregatesFilter<"BlogPost"> | string
    userId?: StringWithAggregatesFilter<"BlogPost"> | string
    postTitle?: StringWithAggregatesFilter<"BlogPost"> | string
    postContent?: StringWithAggregatesFilter<"BlogPost"> | string
    postDraft?: BoolWithAggregatesFilter<"BlogPost"> | boolean
    postCreatedAt?: DateTimeWithAggregatesFilter<"BlogPost"> | Date | string
    postUpdatedAt?: DateTimeWithAggregatesFilter<"BlogPost"> | Date | string
    postPublished?: DateTimeNullableWithAggregatesFilter<"BlogPost"> | Date | string | null
    postReadTimeSeconds?: IntWithAggregatesFilter<"BlogPost"> | number
  }

  export type BlogPostPublishWhereInput = {
    AND?: BlogPostPublishWhereInput | BlogPostPublishWhereInput[]
    OR?: BlogPostPublishWhereInput[]
    NOT?: BlogPostPublishWhereInput | BlogPostPublishWhereInput[]
    revisionHash?: StringFilter<"BlogPostPublish"> | string
    categoryName?: StringFilter<"BlogPostPublish"> | string
    userId?: StringFilter<"BlogPostPublish"> | string
    postHash?: StringFilter<"BlogPostPublish"> | string
    postVisibility?: BoolFilter<"BlogPostPublish"> | boolean
    blogPost?: XOR<BlogPostScalarRelationFilter, BlogPostWhereInput>
    blogCategory?: XOR<BlogCategoryScalarRelationFilter, BlogCategoryWhereInput>
  }

  export type BlogPostPublishOrderByWithRelationInput = {
    revisionHash?: SortOrder
    categoryName?: SortOrder
    userId?: SortOrder
    postHash?: SortOrder
    postVisibility?: SortOrder
    blogPost?: BlogPostOrderByWithRelationInput
    blogCategory?: BlogCategoryOrderByWithRelationInput
  }

  export type BlogPostPublishWhereUniqueInput = Prisma.AtLeast<{
    revisionHash?: string
    revisionHash_postHash_userId?: BlogPostPublishRevisionHashPostHashUserIdCompoundUniqueInput
    AND?: BlogPostPublishWhereInput | BlogPostPublishWhereInput[]
    OR?: BlogPostPublishWhereInput[]
    NOT?: BlogPostPublishWhereInput | BlogPostPublishWhereInput[]
    categoryName?: StringFilter<"BlogPostPublish"> | string
    userId?: StringFilter<"BlogPostPublish"> | string
    postHash?: StringFilter<"BlogPostPublish"> | string
    postVisibility?: BoolFilter<"BlogPostPublish"> | boolean
    blogPost?: XOR<BlogPostScalarRelationFilter, BlogPostWhereInput>
    blogCategory?: XOR<BlogCategoryScalarRelationFilter, BlogCategoryWhereInput>
  }, "revisionHash" | "revisionHash_postHash_userId">

  export type BlogPostPublishOrderByWithAggregationInput = {
    revisionHash?: SortOrder
    categoryName?: SortOrder
    userId?: SortOrder
    postHash?: SortOrder
    postVisibility?: SortOrder
    _count?: BlogPostPublishCountOrderByAggregateInput
    _max?: BlogPostPublishMaxOrderByAggregateInput
    _min?: BlogPostPublishMinOrderByAggregateInput
  }

  export type BlogPostPublishScalarWhereWithAggregatesInput = {
    AND?: BlogPostPublishScalarWhereWithAggregatesInput | BlogPostPublishScalarWhereWithAggregatesInput[]
    OR?: BlogPostPublishScalarWhereWithAggregatesInput[]
    NOT?: BlogPostPublishScalarWhereWithAggregatesInput | BlogPostPublishScalarWhereWithAggregatesInput[]
    revisionHash?: StringWithAggregatesFilter<"BlogPostPublish"> | string
    categoryName?: StringWithAggregatesFilter<"BlogPostPublish"> | string
    userId?: StringWithAggregatesFilter<"BlogPostPublish"> | string
    postHash?: StringWithAggregatesFilter<"BlogPostPublish"> | string
    postVisibility?: BoolWithAggregatesFilter<"BlogPostPublish"> | boolean
  }

  export type UserCreateInput = {
    userId: string
    userName: string
    userPassword: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tag?: TagCreateNestedManyWithoutUserInput
    blogCategory?: BlogCategoryCreateNestedManyWithoutUserInput
    blogPostMeta?: BlogPostMetaCreateNestedManyWithoutUserInput
    blogPostTag?: BlogPostTagCreateNestedManyWithoutUserInput
    blogExtraFile?: BlogExtraFileCreateNestedManyWithoutUserInput
    blogPost?: BlogPostCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    userId: string
    userName: string
    userPassword: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tag?: TagUncheckedCreateNestedManyWithoutUserInput
    blogCategory?: BlogCategoryUncheckedCreateNestedManyWithoutUserInput
    blogPostMeta?: BlogPostMetaUncheckedCreateNestedManyWithoutUserInput
    blogPostTag?: BlogPostTagUncheckedCreateNestedManyWithoutUserInput
    blogExtraFile?: BlogExtraFileUncheckedCreateNestedManyWithoutUserInput
    blogPost?: BlogPostUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    userPassword?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tag?: TagUpdateManyWithoutUserNestedInput
    blogCategory?: BlogCategoryUpdateManyWithoutUserNestedInput
    blogPostMeta?: BlogPostMetaUpdateManyWithoutUserNestedInput
    blogPostTag?: BlogPostTagUpdateManyWithoutUserNestedInput
    blogExtraFile?: BlogExtraFileUpdateManyWithoutUserNestedInput
    blogPost?: BlogPostUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    userPassword?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tag?: TagUncheckedUpdateManyWithoutUserNestedInput
    blogCategory?: BlogCategoryUncheckedUpdateManyWithoutUserNestedInput
    blogPostMeta?: BlogPostMetaUncheckedUpdateManyWithoutUserNestedInput
    blogPostTag?: BlogPostTagUncheckedUpdateManyWithoutUserNestedInput
    blogExtraFile?: BlogExtraFileUncheckedUpdateManyWithoutUserNestedInput
    blogPost?: BlogPostUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    userId: string
    userName: string
    userPassword: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    userPassword?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    userPassword?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagCreateInput = {
    tagName: string
    user: UserCreateNestedOneWithoutTagInput
    blogPostTag?: BlogPostTagCreateNestedManyWithoutTagInput
  }

  export type TagUncheckedCreateInput = {
    tagName: string
    userId: string
    blogPostTag?: BlogPostTagUncheckedCreateNestedManyWithoutTagInput
  }

  export type TagUpdateInput = {
    tagName?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutTagNestedInput
    blogPostTag?: BlogPostTagUpdateManyWithoutTagNestedInput
  }

  export type TagUncheckedUpdateInput = {
    tagName?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    blogPostTag?: BlogPostTagUncheckedUpdateManyWithoutTagNestedInput
  }

  export type TagCreateManyInput = {
    tagName: string
    userId: string
  }

  export type TagUpdateManyMutationInput = {
    tagName?: StringFieldUpdateOperationsInput | string
  }

  export type TagUncheckedUpdateManyInput = {
    tagName?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type BlogCategoryCreateInput = {
    categoryName: string
    privateCount?: bigint | number
    publicCount?: bigint | number
    categoryDepth?: number
    user: UserCreateNestedOneWithoutBlogCategoryInput
    upperCategory?: BlogCategoryCreateNestedOneWithoutLowerCategoriesInput
    lowerCategories?: BlogCategoryCreateNestedManyWithoutUpperCategoryInput
    blogPostPublish?: BlogPostPublishCreateNestedManyWithoutBlogCategoryInput
  }

  export type BlogCategoryUncheckedCreateInput = {
    categoryName: string
    userId: string
    privateCount?: bigint | number
    publicCount?: bigint | number
    categoryDepth?: number
    upperCategoryName?: string | null
    lowerCategories?: BlogCategoryUncheckedCreateNestedManyWithoutUpperCategoryInput
    blogPostPublish?: BlogPostPublishUncheckedCreateNestedManyWithoutBlogCategoryInput
  }

  export type BlogCategoryUpdateInput = {
    categoryName?: StringFieldUpdateOperationsInput | string
    privateCount?: BigIntFieldUpdateOperationsInput | bigint | number
    publicCount?: BigIntFieldUpdateOperationsInput | bigint | number
    categoryDepth?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutBlogCategoryNestedInput
    upperCategory?: BlogCategoryUpdateOneWithoutLowerCategoriesNestedInput
    lowerCategories?: BlogCategoryUpdateManyWithoutUpperCategoryNestedInput
    blogPostPublish?: BlogPostPublishUpdateManyWithoutBlogCategoryNestedInput
  }

  export type BlogCategoryUncheckedUpdateInput = {
    categoryName?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    privateCount?: BigIntFieldUpdateOperationsInput | bigint | number
    publicCount?: BigIntFieldUpdateOperationsInput | bigint | number
    categoryDepth?: IntFieldUpdateOperationsInput | number
    upperCategoryName?: NullableStringFieldUpdateOperationsInput | string | null
    lowerCategories?: BlogCategoryUncheckedUpdateManyWithoutUpperCategoryNestedInput
    blogPostPublish?: BlogPostPublishUncheckedUpdateManyWithoutBlogCategoryNestedInput
  }

  export type BlogCategoryCreateManyInput = {
    categoryName: string
    userId: string
    privateCount?: bigint | number
    publicCount?: bigint | number
    categoryDepth?: number
    upperCategoryName?: string | null
  }

  export type BlogCategoryUpdateManyMutationInput = {
    categoryName?: StringFieldUpdateOperationsInput | string
    privateCount?: BigIntFieldUpdateOperationsInput | bigint | number
    publicCount?: BigIntFieldUpdateOperationsInput | bigint | number
    categoryDepth?: IntFieldUpdateOperationsInput | number
  }

  export type BlogCategoryUncheckedUpdateManyInput = {
    categoryName?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    privateCount?: BigIntFieldUpdateOperationsInput | bigint | number
    publicCount?: BigIntFieldUpdateOperationsInput | bigint | number
    categoryDepth?: IntFieldUpdateOperationsInput | number
    upperCategoryName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BlogPostMetaCreateInput = {
    postHash: string
    postDelete?: boolean
    postViewCount?: number
    postLikeCount?: number
    postMainImageUrl?: string | null
    user: UserCreateNestedOneWithoutBlogPostMetaInput
    extraFile?: BlogExtraFileCreateNestedManyWithoutBlogPostMetaInput
    blogPostTag?: BlogPostTagCreateNestedManyWithoutBlogPostMetaInput
    blogPost?: BlogPostCreateNestedManyWithoutBlogPostMetaInput
  }

  export type BlogPostMetaUncheckedCreateInput = {
    postHash: string
    userId: string
    postDelete?: boolean
    postViewCount?: number
    postLikeCount?: number
    postMainImageUrl?: string | null
    extraFile?: BlogExtraFileUncheckedCreateNestedManyWithoutBlogPostMetaInput
    blogPostTag?: BlogPostTagUncheckedCreateNestedManyWithoutBlogPostMetaInput
    blogPost?: BlogPostUncheckedCreateNestedManyWithoutBlogPostMetaInput
  }

  export type BlogPostMetaUpdateInput = {
    postHash?: StringFieldUpdateOperationsInput | string
    postDelete?: BoolFieldUpdateOperationsInput | boolean
    postViewCount?: IntFieldUpdateOperationsInput | number
    postLikeCount?: IntFieldUpdateOperationsInput | number
    postMainImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutBlogPostMetaNestedInput
    extraFile?: BlogExtraFileUpdateManyWithoutBlogPostMetaNestedInput
    blogPostTag?: BlogPostTagUpdateManyWithoutBlogPostMetaNestedInput
    blogPost?: BlogPostUpdateManyWithoutBlogPostMetaNestedInput
  }

  export type BlogPostMetaUncheckedUpdateInput = {
    postHash?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    postDelete?: BoolFieldUpdateOperationsInput | boolean
    postViewCount?: IntFieldUpdateOperationsInput | number
    postLikeCount?: IntFieldUpdateOperationsInput | number
    postMainImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    extraFile?: BlogExtraFileUncheckedUpdateManyWithoutBlogPostMetaNestedInput
    blogPostTag?: BlogPostTagUncheckedUpdateManyWithoutBlogPostMetaNestedInput
    blogPost?: BlogPostUncheckedUpdateManyWithoutBlogPostMetaNestedInput
  }

  export type BlogPostMetaCreateManyInput = {
    postHash: string
    userId: string
    postDelete?: boolean
    postViewCount?: number
    postLikeCount?: number
    postMainImageUrl?: string | null
  }

  export type BlogPostMetaUpdateManyMutationInput = {
    postHash?: StringFieldUpdateOperationsInput | string
    postDelete?: BoolFieldUpdateOperationsInput | boolean
    postViewCount?: IntFieldUpdateOperationsInput | number
    postLikeCount?: IntFieldUpdateOperationsInput | number
    postMainImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BlogPostMetaUncheckedUpdateManyInput = {
    postHash?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    postDelete?: BoolFieldUpdateOperationsInput | boolean
    postViewCount?: IntFieldUpdateOperationsInput | number
    postLikeCount?: IntFieldUpdateOperationsInput | number
    postMainImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BlogExtraFileCreateInput = {
    extraFileUrl: string
    extraFileAlt: string
    blogPostMeta: BlogPostMetaCreateNestedOneWithoutExtraFileInput
    user: UserCreateNestedOneWithoutBlogExtraFileInput
  }

  export type BlogExtraFileUncheckedCreateInput = {
    extraFileId?: number
    postHash: string
    userId: string
    extraFileUrl: string
    extraFileAlt: string
  }

  export type BlogExtraFileUpdateInput = {
    extraFileUrl?: StringFieldUpdateOperationsInput | string
    extraFileAlt?: StringFieldUpdateOperationsInput | string
    blogPostMeta?: BlogPostMetaUpdateOneRequiredWithoutExtraFileNestedInput
    user?: UserUpdateOneRequiredWithoutBlogExtraFileNestedInput
  }

  export type BlogExtraFileUncheckedUpdateInput = {
    extraFileId?: IntFieldUpdateOperationsInput | number
    postHash?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    extraFileUrl?: StringFieldUpdateOperationsInput | string
    extraFileAlt?: StringFieldUpdateOperationsInput | string
  }

  export type BlogExtraFileCreateManyInput = {
    extraFileId?: number
    postHash: string
    userId: string
    extraFileUrl: string
    extraFileAlt: string
  }

  export type BlogExtraFileUpdateManyMutationInput = {
    extraFileUrl?: StringFieldUpdateOperationsInput | string
    extraFileAlt?: StringFieldUpdateOperationsInput | string
  }

  export type BlogExtraFileUncheckedUpdateManyInput = {
    extraFileId?: IntFieldUpdateOperationsInput | number
    postHash?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    extraFileUrl?: StringFieldUpdateOperationsInput | string
    extraFileAlt?: StringFieldUpdateOperationsInput | string
  }

  export type BlogPostTagCreateInput = {
    tag: TagCreateNestedOneWithoutBlogPostTagInput
    blogPostMeta: BlogPostMetaCreateNestedOneWithoutBlogPostTagInput
    user: UserCreateNestedOneWithoutBlogPostTagInput
  }

  export type BlogPostTagUncheckedCreateInput = {
    tagName: string
    postHash: string
    userId: string
  }

  export type BlogPostTagUpdateInput = {
    tag?: TagUpdateOneRequiredWithoutBlogPostTagNestedInput
    blogPostMeta?: BlogPostMetaUpdateOneRequiredWithoutBlogPostTagNestedInput
    user?: UserUpdateOneRequiredWithoutBlogPostTagNestedInput
  }

  export type BlogPostTagUncheckedUpdateInput = {
    tagName?: StringFieldUpdateOperationsInput | string
    postHash?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type BlogPostTagCreateManyInput = {
    tagName: string
    postHash: string
    userId: string
  }

  export type BlogPostTagUpdateManyMutationInput = {

  }

  export type BlogPostTagUncheckedUpdateManyInput = {
    tagName?: StringFieldUpdateOperationsInput | string
    postHash?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type BlogPostCreateInput = {
    revisionHash: string
    postTitle: string
    postContent: string
    postDraft?: boolean
    postCreatedAt?: Date | string
    postUpdatedAt?: Date | string
    postPublished?: Date | string | null
    postReadTimeSeconds?: number
    user: UserCreateNestedOneWithoutBlogPostInput
    blogPostMeta: BlogPostMetaCreateNestedOneWithoutBlogPostInput
    blogPostPublish?: BlogPostPublishCreateNestedOneWithoutBlogPostInput
  }

  export type BlogPostUncheckedCreateInput = {
    revisionHash: string
    postHash: string
    userId: string
    postTitle: string
    postContent: string
    postDraft?: boolean
    postCreatedAt?: Date | string
    postUpdatedAt?: Date | string
    postPublished?: Date | string | null
    postReadTimeSeconds?: number
    blogPostPublish?: BlogPostPublishUncheckedCreateNestedOneWithoutBlogPostInput
  }

  export type BlogPostUpdateInput = {
    revisionHash?: StringFieldUpdateOperationsInput | string
    postTitle?: StringFieldUpdateOperationsInput | string
    postContent?: StringFieldUpdateOperationsInput | string
    postDraft?: BoolFieldUpdateOperationsInput | boolean
    postCreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postPublished?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    postReadTimeSeconds?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutBlogPostNestedInput
    blogPostMeta?: BlogPostMetaUpdateOneRequiredWithoutBlogPostNestedInput
    blogPostPublish?: BlogPostPublishUpdateOneWithoutBlogPostNestedInput
  }

  export type BlogPostUncheckedUpdateInput = {
    revisionHash?: StringFieldUpdateOperationsInput | string
    postHash?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    postTitle?: StringFieldUpdateOperationsInput | string
    postContent?: StringFieldUpdateOperationsInput | string
    postDraft?: BoolFieldUpdateOperationsInput | boolean
    postCreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postPublished?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    postReadTimeSeconds?: IntFieldUpdateOperationsInput | number
    blogPostPublish?: BlogPostPublishUncheckedUpdateOneWithoutBlogPostNestedInput
  }

  export type BlogPostCreateManyInput = {
    revisionHash: string
    postHash: string
    userId: string
    postTitle: string
    postContent: string
    postDraft?: boolean
    postCreatedAt?: Date | string
    postUpdatedAt?: Date | string
    postPublished?: Date | string | null
    postReadTimeSeconds?: number
  }

  export type BlogPostUpdateManyMutationInput = {
    revisionHash?: StringFieldUpdateOperationsInput | string
    postTitle?: StringFieldUpdateOperationsInput | string
    postContent?: StringFieldUpdateOperationsInput | string
    postDraft?: BoolFieldUpdateOperationsInput | boolean
    postCreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postPublished?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    postReadTimeSeconds?: IntFieldUpdateOperationsInput | number
  }

  export type BlogPostUncheckedUpdateManyInput = {
    revisionHash?: StringFieldUpdateOperationsInput | string
    postHash?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    postTitle?: StringFieldUpdateOperationsInput | string
    postContent?: StringFieldUpdateOperationsInput | string
    postDraft?: BoolFieldUpdateOperationsInput | boolean
    postCreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postPublished?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    postReadTimeSeconds?: IntFieldUpdateOperationsInput | number
  }

  export type BlogPostPublishCreateInput = {
    postVisibility?: boolean
    blogPost: BlogPostCreateNestedOneWithoutBlogPostPublishInput
    blogCategory: BlogCategoryCreateNestedOneWithoutBlogPostPublishInput
  }

  export type BlogPostPublishUncheckedCreateInput = {
    revisionHash: string
    categoryName: string
    userId: string
    postHash: string
    postVisibility?: boolean
  }

  export type BlogPostPublishUpdateInput = {
    postVisibility?: BoolFieldUpdateOperationsInput | boolean
    blogPost?: BlogPostUpdateOneRequiredWithoutBlogPostPublishNestedInput
    blogCategory?: BlogCategoryUpdateOneRequiredWithoutBlogPostPublishNestedInput
  }

  export type BlogPostPublishUncheckedUpdateInput = {
    revisionHash?: StringFieldUpdateOperationsInput | string
    categoryName?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    postHash?: StringFieldUpdateOperationsInput | string
    postVisibility?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BlogPostPublishCreateManyInput = {
    revisionHash: string
    categoryName: string
    userId: string
    postHash: string
    postVisibility?: boolean
  }

  export type BlogPostPublishUpdateManyMutationInput = {
    postVisibility?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BlogPostPublishUncheckedUpdateManyInput = {
    revisionHash?: StringFieldUpdateOperationsInput | string
    categoryName?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    postHash?: StringFieldUpdateOperationsInput | string
    postVisibility?: BoolFieldUpdateOperationsInput | boolean
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type TagListRelationFilter = {
    every?: TagWhereInput
    some?: TagWhereInput
    none?: TagWhereInput
  }

  export type BlogCategoryListRelationFilter = {
    every?: BlogCategoryWhereInput
    some?: BlogCategoryWhereInput
    none?: BlogCategoryWhereInput
  }

  export type BlogPostMetaListRelationFilter = {
    every?: BlogPostMetaWhereInput
    some?: BlogPostMetaWhereInput
    none?: BlogPostMetaWhereInput
  }

  export type BlogPostTagListRelationFilter = {
    every?: BlogPostTagWhereInput
    some?: BlogPostTagWhereInput
    none?: BlogPostTagWhereInput
  }

  export type BlogExtraFileListRelationFilter = {
    every?: BlogExtraFileWhereInput
    some?: BlogExtraFileWhereInput
    none?: BlogExtraFileWhereInput
  }

  export type BlogPostListRelationFilter = {
    every?: BlogPostWhereInput
    some?: BlogPostWhereInput
    none?: BlogPostWhereInput
  }

  export type TagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BlogCategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BlogPostMetaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BlogPostTagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BlogExtraFileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BlogPostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    userId?: SortOrder
    userName?: SortOrder
    userPassword?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    userId?: SortOrder
    userName?: SortOrder
    userPassword?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    userId?: SortOrder
    userName?: SortOrder
    userPassword?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type TagTagNameUserIdCompoundUniqueInput = {
    tagName: string
    userId: string
  }

  export type TagCountOrderByAggregateInput = {
    tagName?: SortOrder
    userId?: SortOrder
  }

  export type TagMaxOrderByAggregateInput = {
    tagName?: SortOrder
    userId?: SortOrder
  }

  export type TagMinOrderByAggregateInput = {
    tagName?: SortOrder
    userId?: SortOrder
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BlogCategoryNullableScalarRelationFilter = {
    is?: BlogCategoryWhereInput | null
    isNot?: BlogCategoryWhereInput | null
  }

  export type BlogPostPublishListRelationFilter = {
    every?: BlogPostPublishWhereInput
    some?: BlogPostPublishWhereInput
    none?: BlogPostPublishWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BlogPostPublishOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BlogCategoryCountOrderByAggregateInput = {
    categoryName?: SortOrder
    userId?: SortOrder
    privateCount?: SortOrder
    publicCount?: SortOrder
    categoryDepth?: SortOrder
    upperCategoryName?: SortOrder
  }

  export type BlogCategoryAvgOrderByAggregateInput = {
    privateCount?: SortOrder
    publicCount?: SortOrder
    categoryDepth?: SortOrder
  }

  export type BlogCategoryMaxOrderByAggregateInput = {
    categoryName?: SortOrder
    userId?: SortOrder
    privateCount?: SortOrder
    publicCount?: SortOrder
    categoryDepth?: SortOrder
    upperCategoryName?: SortOrder
  }

  export type BlogCategoryMinOrderByAggregateInput = {
    categoryName?: SortOrder
    userId?: SortOrder
    privateCount?: SortOrder
    publicCount?: SortOrder
    categoryDepth?: SortOrder
    upperCategoryName?: SortOrder
  }

  export type BlogCategorySumOrderByAggregateInput = {
    privateCount?: SortOrder
    publicCount?: SortOrder
    categoryDepth?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type BlogPostMetaCountOrderByAggregateInput = {
    postHash?: SortOrder
    userId?: SortOrder
    postDelete?: SortOrder
    postViewCount?: SortOrder
    postLikeCount?: SortOrder
    postMainImageUrl?: SortOrder
  }

  export type BlogPostMetaAvgOrderByAggregateInput = {
    postViewCount?: SortOrder
    postLikeCount?: SortOrder
  }

  export type BlogPostMetaMaxOrderByAggregateInput = {
    postHash?: SortOrder
    userId?: SortOrder
    postDelete?: SortOrder
    postViewCount?: SortOrder
    postLikeCount?: SortOrder
    postMainImageUrl?: SortOrder
  }

  export type BlogPostMetaMinOrderByAggregateInput = {
    postHash?: SortOrder
    userId?: SortOrder
    postDelete?: SortOrder
    postViewCount?: SortOrder
    postLikeCount?: SortOrder
    postMainImageUrl?: SortOrder
  }

  export type BlogPostMetaSumOrderByAggregateInput = {
    postViewCount?: SortOrder
    postLikeCount?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type BlogPostMetaScalarRelationFilter = {
    is?: BlogPostMetaWhereInput
    isNot?: BlogPostMetaWhereInput
  }

  export type BlogExtraFileCountOrderByAggregateInput = {
    extraFileId?: SortOrder
    postHash?: SortOrder
    userId?: SortOrder
    extraFileUrl?: SortOrder
    extraFileAlt?: SortOrder
  }

  export type BlogExtraFileAvgOrderByAggregateInput = {
    extraFileId?: SortOrder
  }

  export type BlogExtraFileMaxOrderByAggregateInput = {
    extraFileId?: SortOrder
    postHash?: SortOrder
    userId?: SortOrder
    extraFileUrl?: SortOrder
    extraFileAlt?: SortOrder
  }

  export type BlogExtraFileMinOrderByAggregateInput = {
    extraFileId?: SortOrder
    postHash?: SortOrder
    userId?: SortOrder
    extraFileUrl?: SortOrder
    extraFileAlt?: SortOrder
  }

  export type BlogExtraFileSumOrderByAggregateInput = {
    extraFileId?: SortOrder
  }

  export type TagScalarRelationFilter = {
    is?: TagWhereInput
    isNot?: TagWhereInput
  }

  export type BlogPostTagTagNamePostHashCompoundUniqueInput = {
    tagName: string
    postHash: string
  }

  export type BlogPostTagCountOrderByAggregateInput = {
    tagName?: SortOrder
    postHash?: SortOrder
    userId?: SortOrder
  }

  export type BlogPostTagMaxOrderByAggregateInput = {
    tagName?: SortOrder
    postHash?: SortOrder
    userId?: SortOrder
  }

  export type BlogPostTagMinOrderByAggregateInput = {
    tagName?: SortOrder
    postHash?: SortOrder
    userId?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BlogPostPublishNullableScalarRelationFilter = {
    is?: BlogPostPublishWhereInput | null
    isNot?: BlogPostPublishWhereInput | null
  }

  export type BlogPostRevisionHashPostHashUserIdCompoundUniqueInput = {
    revisionHash: string
    postHash: string
    userId: string
  }

  export type BlogPostPostHashPostDraftCompoundUniqueInput = {
    postHash: string
    postDraft: boolean
  }

  export type BlogPostCountOrderByAggregateInput = {
    revisionHash?: SortOrder
    postHash?: SortOrder
    userId?: SortOrder
    postTitle?: SortOrder
    postContent?: SortOrder
    postDraft?: SortOrder
    postCreatedAt?: SortOrder
    postUpdatedAt?: SortOrder
    postPublished?: SortOrder
    postReadTimeSeconds?: SortOrder
  }

  export type BlogPostAvgOrderByAggregateInput = {
    postReadTimeSeconds?: SortOrder
  }

  export type BlogPostMaxOrderByAggregateInput = {
    revisionHash?: SortOrder
    postHash?: SortOrder
    userId?: SortOrder
    postTitle?: SortOrder
    postContent?: SortOrder
    postDraft?: SortOrder
    postCreatedAt?: SortOrder
    postUpdatedAt?: SortOrder
    postPublished?: SortOrder
    postReadTimeSeconds?: SortOrder
  }

  export type BlogPostMinOrderByAggregateInput = {
    revisionHash?: SortOrder
    postHash?: SortOrder
    userId?: SortOrder
    postTitle?: SortOrder
    postContent?: SortOrder
    postDraft?: SortOrder
    postCreatedAt?: SortOrder
    postUpdatedAt?: SortOrder
    postPublished?: SortOrder
    postReadTimeSeconds?: SortOrder
  }

  export type BlogPostSumOrderByAggregateInput = {
    postReadTimeSeconds?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BlogPostScalarRelationFilter = {
    is?: BlogPostWhereInput
    isNot?: BlogPostWhereInput
  }

  export type BlogCategoryScalarRelationFilter = {
    is?: BlogCategoryWhereInput
    isNot?: BlogCategoryWhereInput
  }

  export type BlogPostPublishRevisionHashPostHashUserIdCompoundUniqueInput = {
    revisionHash: string
    postHash: string
    userId: string
  }

  export type BlogPostPublishCountOrderByAggregateInput = {
    revisionHash?: SortOrder
    categoryName?: SortOrder
    userId?: SortOrder
    postHash?: SortOrder
    postVisibility?: SortOrder
  }

  export type BlogPostPublishMaxOrderByAggregateInput = {
    revisionHash?: SortOrder
    categoryName?: SortOrder
    userId?: SortOrder
    postHash?: SortOrder
    postVisibility?: SortOrder
  }

  export type BlogPostPublishMinOrderByAggregateInput = {
    revisionHash?: SortOrder
    categoryName?: SortOrder
    userId?: SortOrder
    postHash?: SortOrder
    postVisibility?: SortOrder
  }

  export type TagCreateNestedManyWithoutUserInput = {
    create?: XOR<TagCreateWithoutUserInput, TagUncheckedCreateWithoutUserInput> | TagCreateWithoutUserInput[] | TagUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TagCreateOrConnectWithoutUserInput | TagCreateOrConnectWithoutUserInput[]
    createMany?: TagCreateManyUserInputEnvelope
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
  }

  export type BlogCategoryCreateNestedManyWithoutUserInput = {
    create?: XOR<BlogCategoryCreateWithoutUserInput, BlogCategoryUncheckedCreateWithoutUserInput> | BlogCategoryCreateWithoutUserInput[] | BlogCategoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BlogCategoryCreateOrConnectWithoutUserInput | BlogCategoryCreateOrConnectWithoutUserInput[]
    createMany?: BlogCategoryCreateManyUserInputEnvelope
    connect?: BlogCategoryWhereUniqueInput | BlogCategoryWhereUniqueInput[]
  }

  export type BlogPostMetaCreateNestedManyWithoutUserInput = {
    create?: XOR<BlogPostMetaCreateWithoutUserInput, BlogPostMetaUncheckedCreateWithoutUserInput> | BlogPostMetaCreateWithoutUserInput[] | BlogPostMetaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BlogPostMetaCreateOrConnectWithoutUserInput | BlogPostMetaCreateOrConnectWithoutUserInput[]
    createMany?: BlogPostMetaCreateManyUserInputEnvelope
    connect?: BlogPostMetaWhereUniqueInput | BlogPostMetaWhereUniqueInput[]
  }

  export type BlogPostTagCreateNestedManyWithoutUserInput = {
    create?: XOR<BlogPostTagCreateWithoutUserInput, BlogPostTagUncheckedCreateWithoutUserInput> | BlogPostTagCreateWithoutUserInput[] | BlogPostTagUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BlogPostTagCreateOrConnectWithoutUserInput | BlogPostTagCreateOrConnectWithoutUserInput[]
    createMany?: BlogPostTagCreateManyUserInputEnvelope
    connect?: BlogPostTagWhereUniqueInput | BlogPostTagWhereUniqueInput[]
  }

  export type BlogExtraFileCreateNestedManyWithoutUserInput = {
    create?: XOR<BlogExtraFileCreateWithoutUserInput, BlogExtraFileUncheckedCreateWithoutUserInput> | BlogExtraFileCreateWithoutUserInput[] | BlogExtraFileUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BlogExtraFileCreateOrConnectWithoutUserInput | BlogExtraFileCreateOrConnectWithoutUserInput[]
    createMany?: BlogExtraFileCreateManyUserInputEnvelope
    connect?: BlogExtraFileWhereUniqueInput | BlogExtraFileWhereUniqueInput[]
  }

  export type BlogPostCreateNestedManyWithoutUserInput = {
    create?: XOR<BlogPostCreateWithoutUserInput, BlogPostUncheckedCreateWithoutUserInput> | BlogPostCreateWithoutUserInput[] | BlogPostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BlogPostCreateOrConnectWithoutUserInput | BlogPostCreateOrConnectWithoutUserInput[]
    createMany?: BlogPostCreateManyUserInputEnvelope
    connect?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
  }

  export type TagUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TagCreateWithoutUserInput, TagUncheckedCreateWithoutUserInput> | TagCreateWithoutUserInput[] | TagUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TagCreateOrConnectWithoutUserInput | TagCreateOrConnectWithoutUserInput[]
    createMany?: TagCreateManyUserInputEnvelope
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
  }

  export type BlogCategoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BlogCategoryCreateWithoutUserInput, BlogCategoryUncheckedCreateWithoutUserInput> | BlogCategoryCreateWithoutUserInput[] | BlogCategoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BlogCategoryCreateOrConnectWithoutUserInput | BlogCategoryCreateOrConnectWithoutUserInput[]
    createMany?: BlogCategoryCreateManyUserInputEnvelope
    connect?: BlogCategoryWhereUniqueInput | BlogCategoryWhereUniqueInput[]
  }

  export type BlogPostMetaUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BlogPostMetaCreateWithoutUserInput, BlogPostMetaUncheckedCreateWithoutUserInput> | BlogPostMetaCreateWithoutUserInput[] | BlogPostMetaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BlogPostMetaCreateOrConnectWithoutUserInput | BlogPostMetaCreateOrConnectWithoutUserInput[]
    createMany?: BlogPostMetaCreateManyUserInputEnvelope
    connect?: BlogPostMetaWhereUniqueInput | BlogPostMetaWhereUniqueInput[]
  }

  export type BlogPostTagUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BlogPostTagCreateWithoutUserInput, BlogPostTagUncheckedCreateWithoutUserInput> | BlogPostTagCreateWithoutUserInput[] | BlogPostTagUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BlogPostTagCreateOrConnectWithoutUserInput | BlogPostTagCreateOrConnectWithoutUserInput[]
    createMany?: BlogPostTagCreateManyUserInputEnvelope
    connect?: BlogPostTagWhereUniqueInput | BlogPostTagWhereUniqueInput[]
  }

  export type BlogExtraFileUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BlogExtraFileCreateWithoutUserInput, BlogExtraFileUncheckedCreateWithoutUserInput> | BlogExtraFileCreateWithoutUserInput[] | BlogExtraFileUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BlogExtraFileCreateOrConnectWithoutUserInput | BlogExtraFileCreateOrConnectWithoutUserInput[]
    createMany?: BlogExtraFileCreateManyUserInputEnvelope
    connect?: BlogExtraFileWhereUniqueInput | BlogExtraFileWhereUniqueInput[]
  }

  export type BlogPostUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BlogPostCreateWithoutUserInput, BlogPostUncheckedCreateWithoutUserInput> | BlogPostCreateWithoutUserInput[] | BlogPostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BlogPostCreateOrConnectWithoutUserInput | BlogPostCreateOrConnectWithoutUserInput[]
    createMany?: BlogPostCreateManyUserInputEnvelope
    connect?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TagUpdateManyWithoutUserNestedInput = {
    create?: XOR<TagCreateWithoutUserInput, TagUncheckedCreateWithoutUserInput> | TagCreateWithoutUserInput[] | TagUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TagCreateOrConnectWithoutUserInput | TagCreateOrConnectWithoutUserInput[]
    upsert?: TagUpsertWithWhereUniqueWithoutUserInput | TagUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TagCreateManyUserInputEnvelope
    set?: TagWhereUniqueInput | TagWhereUniqueInput[]
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    update?: TagUpdateWithWhereUniqueWithoutUserInput | TagUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TagUpdateManyWithWhereWithoutUserInput | TagUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[]
  }

  export type BlogCategoryUpdateManyWithoutUserNestedInput = {
    create?: XOR<BlogCategoryCreateWithoutUserInput, BlogCategoryUncheckedCreateWithoutUserInput> | BlogCategoryCreateWithoutUserInput[] | BlogCategoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BlogCategoryCreateOrConnectWithoutUserInput | BlogCategoryCreateOrConnectWithoutUserInput[]
    upsert?: BlogCategoryUpsertWithWhereUniqueWithoutUserInput | BlogCategoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BlogCategoryCreateManyUserInputEnvelope
    set?: BlogCategoryWhereUniqueInput | BlogCategoryWhereUniqueInput[]
    disconnect?: BlogCategoryWhereUniqueInput | BlogCategoryWhereUniqueInput[]
    delete?: BlogCategoryWhereUniqueInput | BlogCategoryWhereUniqueInput[]
    connect?: BlogCategoryWhereUniqueInput | BlogCategoryWhereUniqueInput[]
    update?: BlogCategoryUpdateWithWhereUniqueWithoutUserInput | BlogCategoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BlogCategoryUpdateManyWithWhereWithoutUserInput | BlogCategoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BlogCategoryScalarWhereInput | BlogCategoryScalarWhereInput[]
  }

  export type BlogPostMetaUpdateManyWithoutUserNestedInput = {
    create?: XOR<BlogPostMetaCreateWithoutUserInput, BlogPostMetaUncheckedCreateWithoutUserInput> | BlogPostMetaCreateWithoutUserInput[] | BlogPostMetaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BlogPostMetaCreateOrConnectWithoutUserInput | BlogPostMetaCreateOrConnectWithoutUserInput[]
    upsert?: BlogPostMetaUpsertWithWhereUniqueWithoutUserInput | BlogPostMetaUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BlogPostMetaCreateManyUserInputEnvelope
    set?: BlogPostMetaWhereUniqueInput | BlogPostMetaWhereUniqueInput[]
    disconnect?: BlogPostMetaWhereUniqueInput | BlogPostMetaWhereUniqueInput[]
    delete?: BlogPostMetaWhereUniqueInput | BlogPostMetaWhereUniqueInput[]
    connect?: BlogPostMetaWhereUniqueInput | BlogPostMetaWhereUniqueInput[]
    update?: BlogPostMetaUpdateWithWhereUniqueWithoutUserInput | BlogPostMetaUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BlogPostMetaUpdateManyWithWhereWithoutUserInput | BlogPostMetaUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BlogPostMetaScalarWhereInput | BlogPostMetaScalarWhereInput[]
  }

  export type BlogPostTagUpdateManyWithoutUserNestedInput = {
    create?: XOR<BlogPostTagCreateWithoutUserInput, BlogPostTagUncheckedCreateWithoutUserInput> | BlogPostTagCreateWithoutUserInput[] | BlogPostTagUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BlogPostTagCreateOrConnectWithoutUserInput | BlogPostTagCreateOrConnectWithoutUserInput[]
    upsert?: BlogPostTagUpsertWithWhereUniqueWithoutUserInput | BlogPostTagUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BlogPostTagCreateManyUserInputEnvelope
    set?: BlogPostTagWhereUniqueInput | BlogPostTagWhereUniqueInput[]
    disconnect?: BlogPostTagWhereUniqueInput | BlogPostTagWhereUniqueInput[]
    delete?: BlogPostTagWhereUniqueInput | BlogPostTagWhereUniqueInput[]
    connect?: BlogPostTagWhereUniqueInput | BlogPostTagWhereUniqueInput[]
    update?: BlogPostTagUpdateWithWhereUniqueWithoutUserInput | BlogPostTagUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BlogPostTagUpdateManyWithWhereWithoutUserInput | BlogPostTagUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BlogPostTagScalarWhereInput | BlogPostTagScalarWhereInput[]
  }

  export type BlogExtraFileUpdateManyWithoutUserNestedInput = {
    create?: XOR<BlogExtraFileCreateWithoutUserInput, BlogExtraFileUncheckedCreateWithoutUserInput> | BlogExtraFileCreateWithoutUserInput[] | BlogExtraFileUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BlogExtraFileCreateOrConnectWithoutUserInput | BlogExtraFileCreateOrConnectWithoutUserInput[]
    upsert?: BlogExtraFileUpsertWithWhereUniqueWithoutUserInput | BlogExtraFileUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BlogExtraFileCreateManyUserInputEnvelope
    set?: BlogExtraFileWhereUniqueInput | BlogExtraFileWhereUniqueInput[]
    disconnect?: BlogExtraFileWhereUniqueInput | BlogExtraFileWhereUniqueInput[]
    delete?: BlogExtraFileWhereUniqueInput | BlogExtraFileWhereUniqueInput[]
    connect?: BlogExtraFileWhereUniqueInput | BlogExtraFileWhereUniqueInput[]
    update?: BlogExtraFileUpdateWithWhereUniqueWithoutUserInput | BlogExtraFileUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BlogExtraFileUpdateManyWithWhereWithoutUserInput | BlogExtraFileUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BlogExtraFileScalarWhereInput | BlogExtraFileScalarWhereInput[]
  }

  export type BlogPostUpdateManyWithoutUserNestedInput = {
    create?: XOR<BlogPostCreateWithoutUserInput, BlogPostUncheckedCreateWithoutUserInput> | BlogPostCreateWithoutUserInput[] | BlogPostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BlogPostCreateOrConnectWithoutUserInput | BlogPostCreateOrConnectWithoutUserInput[]
    upsert?: BlogPostUpsertWithWhereUniqueWithoutUserInput | BlogPostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BlogPostCreateManyUserInputEnvelope
    set?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
    disconnect?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
    delete?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
    connect?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
    update?: BlogPostUpdateWithWhereUniqueWithoutUserInput | BlogPostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BlogPostUpdateManyWithWhereWithoutUserInput | BlogPostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BlogPostScalarWhereInput | BlogPostScalarWhereInput[]
  }

  export type TagUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TagCreateWithoutUserInput, TagUncheckedCreateWithoutUserInput> | TagCreateWithoutUserInput[] | TagUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TagCreateOrConnectWithoutUserInput | TagCreateOrConnectWithoutUserInput[]
    upsert?: TagUpsertWithWhereUniqueWithoutUserInput | TagUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TagCreateManyUserInputEnvelope
    set?: TagWhereUniqueInput | TagWhereUniqueInput[]
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    update?: TagUpdateWithWhereUniqueWithoutUserInput | TagUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TagUpdateManyWithWhereWithoutUserInput | TagUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[]
  }

  export type BlogCategoryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BlogCategoryCreateWithoutUserInput, BlogCategoryUncheckedCreateWithoutUserInput> | BlogCategoryCreateWithoutUserInput[] | BlogCategoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BlogCategoryCreateOrConnectWithoutUserInput | BlogCategoryCreateOrConnectWithoutUserInput[]
    upsert?: BlogCategoryUpsertWithWhereUniqueWithoutUserInput | BlogCategoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BlogCategoryCreateManyUserInputEnvelope
    set?: BlogCategoryWhereUniqueInput | BlogCategoryWhereUniqueInput[]
    disconnect?: BlogCategoryWhereUniqueInput | BlogCategoryWhereUniqueInput[]
    delete?: BlogCategoryWhereUniqueInput | BlogCategoryWhereUniqueInput[]
    connect?: BlogCategoryWhereUniqueInput | BlogCategoryWhereUniqueInput[]
    update?: BlogCategoryUpdateWithWhereUniqueWithoutUserInput | BlogCategoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BlogCategoryUpdateManyWithWhereWithoutUserInput | BlogCategoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BlogCategoryScalarWhereInput | BlogCategoryScalarWhereInput[]
  }

  export type BlogPostMetaUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BlogPostMetaCreateWithoutUserInput, BlogPostMetaUncheckedCreateWithoutUserInput> | BlogPostMetaCreateWithoutUserInput[] | BlogPostMetaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BlogPostMetaCreateOrConnectWithoutUserInput | BlogPostMetaCreateOrConnectWithoutUserInput[]
    upsert?: BlogPostMetaUpsertWithWhereUniqueWithoutUserInput | BlogPostMetaUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BlogPostMetaCreateManyUserInputEnvelope
    set?: BlogPostMetaWhereUniqueInput | BlogPostMetaWhereUniqueInput[]
    disconnect?: BlogPostMetaWhereUniqueInput | BlogPostMetaWhereUniqueInput[]
    delete?: BlogPostMetaWhereUniqueInput | BlogPostMetaWhereUniqueInput[]
    connect?: BlogPostMetaWhereUniqueInput | BlogPostMetaWhereUniqueInput[]
    update?: BlogPostMetaUpdateWithWhereUniqueWithoutUserInput | BlogPostMetaUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BlogPostMetaUpdateManyWithWhereWithoutUserInput | BlogPostMetaUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BlogPostMetaScalarWhereInput | BlogPostMetaScalarWhereInput[]
  }

  export type BlogPostTagUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BlogPostTagCreateWithoutUserInput, BlogPostTagUncheckedCreateWithoutUserInput> | BlogPostTagCreateWithoutUserInput[] | BlogPostTagUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BlogPostTagCreateOrConnectWithoutUserInput | BlogPostTagCreateOrConnectWithoutUserInput[]
    upsert?: BlogPostTagUpsertWithWhereUniqueWithoutUserInput | BlogPostTagUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BlogPostTagCreateManyUserInputEnvelope
    set?: BlogPostTagWhereUniqueInput | BlogPostTagWhereUniqueInput[]
    disconnect?: BlogPostTagWhereUniqueInput | BlogPostTagWhereUniqueInput[]
    delete?: BlogPostTagWhereUniqueInput | BlogPostTagWhereUniqueInput[]
    connect?: BlogPostTagWhereUniqueInput | BlogPostTagWhereUniqueInput[]
    update?: BlogPostTagUpdateWithWhereUniqueWithoutUserInput | BlogPostTagUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BlogPostTagUpdateManyWithWhereWithoutUserInput | BlogPostTagUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BlogPostTagScalarWhereInput | BlogPostTagScalarWhereInput[]
  }

  export type BlogExtraFileUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BlogExtraFileCreateWithoutUserInput, BlogExtraFileUncheckedCreateWithoutUserInput> | BlogExtraFileCreateWithoutUserInput[] | BlogExtraFileUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BlogExtraFileCreateOrConnectWithoutUserInput | BlogExtraFileCreateOrConnectWithoutUserInput[]
    upsert?: BlogExtraFileUpsertWithWhereUniqueWithoutUserInput | BlogExtraFileUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BlogExtraFileCreateManyUserInputEnvelope
    set?: BlogExtraFileWhereUniqueInput | BlogExtraFileWhereUniqueInput[]
    disconnect?: BlogExtraFileWhereUniqueInput | BlogExtraFileWhereUniqueInput[]
    delete?: BlogExtraFileWhereUniqueInput | BlogExtraFileWhereUniqueInput[]
    connect?: BlogExtraFileWhereUniqueInput | BlogExtraFileWhereUniqueInput[]
    update?: BlogExtraFileUpdateWithWhereUniqueWithoutUserInput | BlogExtraFileUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BlogExtraFileUpdateManyWithWhereWithoutUserInput | BlogExtraFileUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BlogExtraFileScalarWhereInput | BlogExtraFileScalarWhereInput[]
  }

  export type BlogPostUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BlogPostCreateWithoutUserInput, BlogPostUncheckedCreateWithoutUserInput> | BlogPostCreateWithoutUserInput[] | BlogPostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BlogPostCreateOrConnectWithoutUserInput | BlogPostCreateOrConnectWithoutUserInput[]
    upsert?: BlogPostUpsertWithWhereUniqueWithoutUserInput | BlogPostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BlogPostCreateManyUserInputEnvelope
    set?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
    disconnect?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
    delete?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
    connect?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
    update?: BlogPostUpdateWithWhereUniqueWithoutUserInput | BlogPostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BlogPostUpdateManyWithWhereWithoutUserInput | BlogPostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BlogPostScalarWhereInput | BlogPostScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTagInput = {
    create?: XOR<UserCreateWithoutTagInput, UserUncheckedCreateWithoutTagInput>
    connectOrCreate?: UserCreateOrConnectWithoutTagInput
    connect?: UserWhereUniqueInput
  }

  export type BlogPostTagCreateNestedManyWithoutTagInput = {
    create?: XOR<BlogPostTagCreateWithoutTagInput, BlogPostTagUncheckedCreateWithoutTagInput> | BlogPostTagCreateWithoutTagInput[] | BlogPostTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: BlogPostTagCreateOrConnectWithoutTagInput | BlogPostTagCreateOrConnectWithoutTagInput[]
    createMany?: BlogPostTagCreateManyTagInputEnvelope
    connect?: BlogPostTagWhereUniqueInput | BlogPostTagWhereUniqueInput[]
  }

  export type BlogPostTagUncheckedCreateNestedManyWithoutTagInput = {
    create?: XOR<BlogPostTagCreateWithoutTagInput, BlogPostTagUncheckedCreateWithoutTagInput> | BlogPostTagCreateWithoutTagInput[] | BlogPostTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: BlogPostTagCreateOrConnectWithoutTagInput | BlogPostTagCreateOrConnectWithoutTagInput[]
    createMany?: BlogPostTagCreateManyTagInputEnvelope
    connect?: BlogPostTagWhereUniqueInput | BlogPostTagWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutTagNestedInput = {
    create?: XOR<UserCreateWithoutTagInput, UserUncheckedCreateWithoutTagInput>
    connectOrCreate?: UserCreateOrConnectWithoutTagInput
    upsert?: UserUpsertWithoutTagInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTagInput, UserUpdateWithoutTagInput>, UserUncheckedUpdateWithoutTagInput>
  }

  export type BlogPostTagUpdateManyWithoutTagNestedInput = {
    create?: XOR<BlogPostTagCreateWithoutTagInput, BlogPostTagUncheckedCreateWithoutTagInput> | BlogPostTagCreateWithoutTagInput[] | BlogPostTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: BlogPostTagCreateOrConnectWithoutTagInput | BlogPostTagCreateOrConnectWithoutTagInput[]
    upsert?: BlogPostTagUpsertWithWhereUniqueWithoutTagInput | BlogPostTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: BlogPostTagCreateManyTagInputEnvelope
    set?: BlogPostTagWhereUniqueInput | BlogPostTagWhereUniqueInput[]
    disconnect?: BlogPostTagWhereUniqueInput | BlogPostTagWhereUniqueInput[]
    delete?: BlogPostTagWhereUniqueInput | BlogPostTagWhereUniqueInput[]
    connect?: BlogPostTagWhereUniqueInput | BlogPostTagWhereUniqueInput[]
    update?: BlogPostTagUpdateWithWhereUniqueWithoutTagInput | BlogPostTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: BlogPostTagUpdateManyWithWhereWithoutTagInput | BlogPostTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: BlogPostTagScalarWhereInput | BlogPostTagScalarWhereInput[]
  }

  export type BlogPostTagUncheckedUpdateManyWithoutTagNestedInput = {
    create?: XOR<BlogPostTagCreateWithoutTagInput, BlogPostTagUncheckedCreateWithoutTagInput> | BlogPostTagCreateWithoutTagInput[] | BlogPostTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: BlogPostTagCreateOrConnectWithoutTagInput | BlogPostTagCreateOrConnectWithoutTagInput[]
    upsert?: BlogPostTagUpsertWithWhereUniqueWithoutTagInput | BlogPostTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: BlogPostTagCreateManyTagInputEnvelope
    set?: BlogPostTagWhereUniqueInput | BlogPostTagWhereUniqueInput[]
    disconnect?: BlogPostTagWhereUniqueInput | BlogPostTagWhereUniqueInput[]
    delete?: BlogPostTagWhereUniqueInput | BlogPostTagWhereUniqueInput[]
    connect?: BlogPostTagWhereUniqueInput | BlogPostTagWhereUniqueInput[]
    update?: BlogPostTagUpdateWithWhereUniqueWithoutTagInput | BlogPostTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: BlogPostTagUpdateManyWithWhereWithoutTagInput | BlogPostTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: BlogPostTagScalarWhereInput | BlogPostTagScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutBlogCategoryInput = {
    create?: XOR<UserCreateWithoutBlogCategoryInput, UserUncheckedCreateWithoutBlogCategoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutBlogCategoryInput
    connect?: UserWhereUniqueInput
  }

  export type BlogCategoryCreateNestedOneWithoutLowerCategoriesInput = {
    create?: XOR<BlogCategoryCreateWithoutLowerCategoriesInput, BlogCategoryUncheckedCreateWithoutLowerCategoriesInput>
    connectOrCreate?: BlogCategoryCreateOrConnectWithoutLowerCategoriesInput
    connect?: BlogCategoryWhereUniqueInput
  }

  export type BlogCategoryCreateNestedManyWithoutUpperCategoryInput = {
    create?: XOR<BlogCategoryCreateWithoutUpperCategoryInput, BlogCategoryUncheckedCreateWithoutUpperCategoryInput> | BlogCategoryCreateWithoutUpperCategoryInput[] | BlogCategoryUncheckedCreateWithoutUpperCategoryInput[]
    connectOrCreate?: BlogCategoryCreateOrConnectWithoutUpperCategoryInput | BlogCategoryCreateOrConnectWithoutUpperCategoryInput[]
    createMany?: BlogCategoryCreateManyUpperCategoryInputEnvelope
    connect?: BlogCategoryWhereUniqueInput | BlogCategoryWhereUniqueInput[]
  }

  export type BlogPostPublishCreateNestedManyWithoutBlogCategoryInput = {
    create?: XOR<BlogPostPublishCreateWithoutBlogCategoryInput, BlogPostPublishUncheckedCreateWithoutBlogCategoryInput> | BlogPostPublishCreateWithoutBlogCategoryInput[] | BlogPostPublishUncheckedCreateWithoutBlogCategoryInput[]
    connectOrCreate?: BlogPostPublishCreateOrConnectWithoutBlogCategoryInput | BlogPostPublishCreateOrConnectWithoutBlogCategoryInput[]
    createMany?: BlogPostPublishCreateManyBlogCategoryInputEnvelope
    connect?: BlogPostPublishWhereUniqueInput | BlogPostPublishWhereUniqueInput[]
  }

  export type BlogCategoryUncheckedCreateNestedManyWithoutUpperCategoryInput = {
    create?: XOR<BlogCategoryCreateWithoutUpperCategoryInput, BlogCategoryUncheckedCreateWithoutUpperCategoryInput> | BlogCategoryCreateWithoutUpperCategoryInput[] | BlogCategoryUncheckedCreateWithoutUpperCategoryInput[]
    connectOrCreate?: BlogCategoryCreateOrConnectWithoutUpperCategoryInput | BlogCategoryCreateOrConnectWithoutUpperCategoryInput[]
    createMany?: BlogCategoryCreateManyUpperCategoryInputEnvelope
    connect?: BlogCategoryWhereUniqueInput | BlogCategoryWhereUniqueInput[]
  }

  export type BlogPostPublishUncheckedCreateNestedManyWithoutBlogCategoryInput = {
    create?: XOR<BlogPostPublishCreateWithoutBlogCategoryInput, BlogPostPublishUncheckedCreateWithoutBlogCategoryInput> | BlogPostPublishCreateWithoutBlogCategoryInput[] | BlogPostPublishUncheckedCreateWithoutBlogCategoryInput[]
    connectOrCreate?: BlogPostPublishCreateOrConnectWithoutBlogCategoryInput | BlogPostPublishCreateOrConnectWithoutBlogCategoryInput[]
    createMany?: BlogPostPublishCreateManyBlogCategoryInputEnvelope
    connect?: BlogPostPublishWhereUniqueInput | BlogPostPublishWhereUniqueInput[]
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutBlogCategoryNestedInput = {
    create?: XOR<UserCreateWithoutBlogCategoryInput, UserUncheckedCreateWithoutBlogCategoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutBlogCategoryInput
    upsert?: UserUpsertWithoutBlogCategoryInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBlogCategoryInput, UserUpdateWithoutBlogCategoryInput>, UserUncheckedUpdateWithoutBlogCategoryInput>
  }

  export type BlogCategoryUpdateOneWithoutLowerCategoriesNestedInput = {
    create?: XOR<BlogCategoryCreateWithoutLowerCategoriesInput, BlogCategoryUncheckedCreateWithoutLowerCategoriesInput>
    connectOrCreate?: BlogCategoryCreateOrConnectWithoutLowerCategoriesInput
    upsert?: BlogCategoryUpsertWithoutLowerCategoriesInput
    disconnect?: BlogCategoryWhereInput | boolean
    delete?: BlogCategoryWhereInput | boolean
    connect?: BlogCategoryWhereUniqueInput
    update?: XOR<XOR<BlogCategoryUpdateToOneWithWhereWithoutLowerCategoriesInput, BlogCategoryUpdateWithoutLowerCategoriesInput>, BlogCategoryUncheckedUpdateWithoutLowerCategoriesInput>
  }

  export type BlogCategoryUpdateManyWithoutUpperCategoryNestedInput = {
    create?: XOR<BlogCategoryCreateWithoutUpperCategoryInput, BlogCategoryUncheckedCreateWithoutUpperCategoryInput> | BlogCategoryCreateWithoutUpperCategoryInput[] | BlogCategoryUncheckedCreateWithoutUpperCategoryInput[]
    connectOrCreate?: BlogCategoryCreateOrConnectWithoutUpperCategoryInput | BlogCategoryCreateOrConnectWithoutUpperCategoryInput[]
    upsert?: BlogCategoryUpsertWithWhereUniqueWithoutUpperCategoryInput | BlogCategoryUpsertWithWhereUniqueWithoutUpperCategoryInput[]
    createMany?: BlogCategoryCreateManyUpperCategoryInputEnvelope
    set?: BlogCategoryWhereUniqueInput | BlogCategoryWhereUniqueInput[]
    disconnect?: BlogCategoryWhereUniqueInput | BlogCategoryWhereUniqueInput[]
    delete?: BlogCategoryWhereUniqueInput | BlogCategoryWhereUniqueInput[]
    connect?: BlogCategoryWhereUniqueInput | BlogCategoryWhereUniqueInput[]
    update?: BlogCategoryUpdateWithWhereUniqueWithoutUpperCategoryInput | BlogCategoryUpdateWithWhereUniqueWithoutUpperCategoryInput[]
    updateMany?: BlogCategoryUpdateManyWithWhereWithoutUpperCategoryInput | BlogCategoryUpdateManyWithWhereWithoutUpperCategoryInput[]
    deleteMany?: BlogCategoryScalarWhereInput | BlogCategoryScalarWhereInput[]
  }

  export type BlogPostPublishUpdateManyWithoutBlogCategoryNestedInput = {
    create?: XOR<BlogPostPublishCreateWithoutBlogCategoryInput, BlogPostPublishUncheckedCreateWithoutBlogCategoryInput> | BlogPostPublishCreateWithoutBlogCategoryInput[] | BlogPostPublishUncheckedCreateWithoutBlogCategoryInput[]
    connectOrCreate?: BlogPostPublishCreateOrConnectWithoutBlogCategoryInput | BlogPostPublishCreateOrConnectWithoutBlogCategoryInput[]
    upsert?: BlogPostPublishUpsertWithWhereUniqueWithoutBlogCategoryInput | BlogPostPublishUpsertWithWhereUniqueWithoutBlogCategoryInput[]
    createMany?: BlogPostPublishCreateManyBlogCategoryInputEnvelope
    set?: BlogPostPublishWhereUniqueInput | BlogPostPublishWhereUniqueInput[]
    disconnect?: BlogPostPublishWhereUniqueInput | BlogPostPublishWhereUniqueInput[]
    delete?: BlogPostPublishWhereUniqueInput | BlogPostPublishWhereUniqueInput[]
    connect?: BlogPostPublishWhereUniqueInput | BlogPostPublishWhereUniqueInput[]
    update?: BlogPostPublishUpdateWithWhereUniqueWithoutBlogCategoryInput | BlogPostPublishUpdateWithWhereUniqueWithoutBlogCategoryInput[]
    updateMany?: BlogPostPublishUpdateManyWithWhereWithoutBlogCategoryInput | BlogPostPublishUpdateManyWithWhereWithoutBlogCategoryInput[]
    deleteMany?: BlogPostPublishScalarWhereInput | BlogPostPublishScalarWhereInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BlogCategoryUncheckedUpdateManyWithoutUpperCategoryNestedInput = {
    create?: XOR<BlogCategoryCreateWithoutUpperCategoryInput, BlogCategoryUncheckedCreateWithoutUpperCategoryInput> | BlogCategoryCreateWithoutUpperCategoryInput[] | BlogCategoryUncheckedCreateWithoutUpperCategoryInput[]
    connectOrCreate?: BlogCategoryCreateOrConnectWithoutUpperCategoryInput | BlogCategoryCreateOrConnectWithoutUpperCategoryInput[]
    upsert?: BlogCategoryUpsertWithWhereUniqueWithoutUpperCategoryInput | BlogCategoryUpsertWithWhereUniqueWithoutUpperCategoryInput[]
    createMany?: BlogCategoryCreateManyUpperCategoryInputEnvelope
    set?: BlogCategoryWhereUniqueInput | BlogCategoryWhereUniqueInput[]
    disconnect?: BlogCategoryWhereUniqueInput | BlogCategoryWhereUniqueInput[]
    delete?: BlogCategoryWhereUniqueInput | BlogCategoryWhereUniqueInput[]
    connect?: BlogCategoryWhereUniqueInput | BlogCategoryWhereUniqueInput[]
    update?: BlogCategoryUpdateWithWhereUniqueWithoutUpperCategoryInput | BlogCategoryUpdateWithWhereUniqueWithoutUpperCategoryInput[]
    updateMany?: BlogCategoryUpdateManyWithWhereWithoutUpperCategoryInput | BlogCategoryUpdateManyWithWhereWithoutUpperCategoryInput[]
    deleteMany?: BlogCategoryScalarWhereInput | BlogCategoryScalarWhereInput[]
  }

  export type BlogPostPublishUncheckedUpdateManyWithoutBlogCategoryNestedInput = {
    create?: XOR<BlogPostPublishCreateWithoutBlogCategoryInput, BlogPostPublishUncheckedCreateWithoutBlogCategoryInput> | BlogPostPublishCreateWithoutBlogCategoryInput[] | BlogPostPublishUncheckedCreateWithoutBlogCategoryInput[]
    connectOrCreate?: BlogPostPublishCreateOrConnectWithoutBlogCategoryInput | BlogPostPublishCreateOrConnectWithoutBlogCategoryInput[]
    upsert?: BlogPostPublishUpsertWithWhereUniqueWithoutBlogCategoryInput | BlogPostPublishUpsertWithWhereUniqueWithoutBlogCategoryInput[]
    createMany?: BlogPostPublishCreateManyBlogCategoryInputEnvelope
    set?: BlogPostPublishWhereUniqueInput | BlogPostPublishWhereUniqueInput[]
    disconnect?: BlogPostPublishWhereUniqueInput | BlogPostPublishWhereUniqueInput[]
    delete?: BlogPostPublishWhereUniqueInput | BlogPostPublishWhereUniqueInput[]
    connect?: BlogPostPublishWhereUniqueInput | BlogPostPublishWhereUniqueInput[]
    update?: BlogPostPublishUpdateWithWhereUniqueWithoutBlogCategoryInput | BlogPostPublishUpdateWithWhereUniqueWithoutBlogCategoryInput[]
    updateMany?: BlogPostPublishUpdateManyWithWhereWithoutBlogCategoryInput | BlogPostPublishUpdateManyWithWhereWithoutBlogCategoryInput[]
    deleteMany?: BlogPostPublishScalarWhereInput | BlogPostPublishScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutBlogPostMetaInput = {
    create?: XOR<UserCreateWithoutBlogPostMetaInput, UserUncheckedCreateWithoutBlogPostMetaInput>
    connectOrCreate?: UserCreateOrConnectWithoutBlogPostMetaInput
    connect?: UserWhereUniqueInput
  }

  export type BlogExtraFileCreateNestedManyWithoutBlogPostMetaInput = {
    create?: XOR<BlogExtraFileCreateWithoutBlogPostMetaInput, BlogExtraFileUncheckedCreateWithoutBlogPostMetaInput> | BlogExtraFileCreateWithoutBlogPostMetaInput[] | BlogExtraFileUncheckedCreateWithoutBlogPostMetaInput[]
    connectOrCreate?: BlogExtraFileCreateOrConnectWithoutBlogPostMetaInput | BlogExtraFileCreateOrConnectWithoutBlogPostMetaInput[]
    createMany?: BlogExtraFileCreateManyBlogPostMetaInputEnvelope
    connect?: BlogExtraFileWhereUniqueInput | BlogExtraFileWhereUniqueInput[]
  }

  export type BlogPostTagCreateNestedManyWithoutBlogPostMetaInput = {
    create?: XOR<BlogPostTagCreateWithoutBlogPostMetaInput, BlogPostTagUncheckedCreateWithoutBlogPostMetaInput> | BlogPostTagCreateWithoutBlogPostMetaInput[] | BlogPostTagUncheckedCreateWithoutBlogPostMetaInput[]
    connectOrCreate?: BlogPostTagCreateOrConnectWithoutBlogPostMetaInput | BlogPostTagCreateOrConnectWithoutBlogPostMetaInput[]
    createMany?: BlogPostTagCreateManyBlogPostMetaInputEnvelope
    connect?: BlogPostTagWhereUniqueInput | BlogPostTagWhereUniqueInput[]
  }

  export type BlogPostCreateNestedManyWithoutBlogPostMetaInput = {
    create?: XOR<BlogPostCreateWithoutBlogPostMetaInput, BlogPostUncheckedCreateWithoutBlogPostMetaInput> | BlogPostCreateWithoutBlogPostMetaInput[] | BlogPostUncheckedCreateWithoutBlogPostMetaInput[]
    connectOrCreate?: BlogPostCreateOrConnectWithoutBlogPostMetaInput | BlogPostCreateOrConnectWithoutBlogPostMetaInput[]
    createMany?: BlogPostCreateManyBlogPostMetaInputEnvelope
    connect?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
  }

  export type BlogExtraFileUncheckedCreateNestedManyWithoutBlogPostMetaInput = {
    create?: XOR<BlogExtraFileCreateWithoutBlogPostMetaInput, BlogExtraFileUncheckedCreateWithoutBlogPostMetaInput> | BlogExtraFileCreateWithoutBlogPostMetaInput[] | BlogExtraFileUncheckedCreateWithoutBlogPostMetaInput[]
    connectOrCreate?: BlogExtraFileCreateOrConnectWithoutBlogPostMetaInput | BlogExtraFileCreateOrConnectWithoutBlogPostMetaInput[]
    createMany?: BlogExtraFileCreateManyBlogPostMetaInputEnvelope
    connect?: BlogExtraFileWhereUniqueInput | BlogExtraFileWhereUniqueInput[]
  }

  export type BlogPostTagUncheckedCreateNestedManyWithoutBlogPostMetaInput = {
    create?: XOR<BlogPostTagCreateWithoutBlogPostMetaInput, BlogPostTagUncheckedCreateWithoutBlogPostMetaInput> | BlogPostTagCreateWithoutBlogPostMetaInput[] | BlogPostTagUncheckedCreateWithoutBlogPostMetaInput[]
    connectOrCreate?: BlogPostTagCreateOrConnectWithoutBlogPostMetaInput | BlogPostTagCreateOrConnectWithoutBlogPostMetaInput[]
    createMany?: BlogPostTagCreateManyBlogPostMetaInputEnvelope
    connect?: BlogPostTagWhereUniqueInput | BlogPostTagWhereUniqueInput[]
  }

  export type BlogPostUncheckedCreateNestedManyWithoutBlogPostMetaInput = {
    create?: XOR<BlogPostCreateWithoutBlogPostMetaInput, BlogPostUncheckedCreateWithoutBlogPostMetaInput> | BlogPostCreateWithoutBlogPostMetaInput[] | BlogPostUncheckedCreateWithoutBlogPostMetaInput[]
    connectOrCreate?: BlogPostCreateOrConnectWithoutBlogPostMetaInput | BlogPostCreateOrConnectWithoutBlogPostMetaInput[]
    createMany?: BlogPostCreateManyBlogPostMetaInputEnvelope
    connect?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutBlogPostMetaNestedInput = {
    create?: XOR<UserCreateWithoutBlogPostMetaInput, UserUncheckedCreateWithoutBlogPostMetaInput>
    connectOrCreate?: UserCreateOrConnectWithoutBlogPostMetaInput
    upsert?: UserUpsertWithoutBlogPostMetaInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBlogPostMetaInput, UserUpdateWithoutBlogPostMetaInput>, UserUncheckedUpdateWithoutBlogPostMetaInput>
  }

  export type BlogExtraFileUpdateManyWithoutBlogPostMetaNestedInput = {
    create?: XOR<BlogExtraFileCreateWithoutBlogPostMetaInput, BlogExtraFileUncheckedCreateWithoutBlogPostMetaInput> | BlogExtraFileCreateWithoutBlogPostMetaInput[] | BlogExtraFileUncheckedCreateWithoutBlogPostMetaInput[]
    connectOrCreate?: BlogExtraFileCreateOrConnectWithoutBlogPostMetaInput | BlogExtraFileCreateOrConnectWithoutBlogPostMetaInput[]
    upsert?: BlogExtraFileUpsertWithWhereUniqueWithoutBlogPostMetaInput | BlogExtraFileUpsertWithWhereUniqueWithoutBlogPostMetaInput[]
    createMany?: BlogExtraFileCreateManyBlogPostMetaInputEnvelope
    set?: BlogExtraFileWhereUniqueInput | BlogExtraFileWhereUniqueInput[]
    disconnect?: BlogExtraFileWhereUniqueInput | BlogExtraFileWhereUniqueInput[]
    delete?: BlogExtraFileWhereUniqueInput | BlogExtraFileWhereUniqueInput[]
    connect?: BlogExtraFileWhereUniqueInput | BlogExtraFileWhereUniqueInput[]
    update?: BlogExtraFileUpdateWithWhereUniqueWithoutBlogPostMetaInput | BlogExtraFileUpdateWithWhereUniqueWithoutBlogPostMetaInput[]
    updateMany?: BlogExtraFileUpdateManyWithWhereWithoutBlogPostMetaInput | BlogExtraFileUpdateManyWithWhereWithoutBlogPostMetaInput[]
    deleteMany?: BlogExtraFileScalarWhereInput | BlogExtraFileScalarWhereInput[]
  }

  export type BlogPostTagUpdateManyWithoutBlogPostMetaNestedInput = {
    create?: XOR<BlogPostTagCreateWithoutBlogPostMetaInput, BlogPostTagUncheckedCreateWithoutBlogPostMetaInput> | BlogPostTagCreateWithoutBlogPostMetaInput[] | BlogPostTagUncheckedCreateWithoutBlogPostMetaInput[]
    connectOrCreate?: BlogPostTagCreateOrConnectWithoutBlogPostMetaInput | BlogPostTagCreateOrConnectWithoutBlogPostMetaInput[]
    upsert?: BlogPostTagUpsertWithWhereUniqueWithoutBlogPostMetaInput | BlogPostTagUpsertWithWhereUniqueWithoutBlogPostMetaInput[]
    createMany?: BlogPostTagCreateManyBlogPostMetaInputEnvelope
    set?: BlogPostTagWhereUniqueInput | BlogPostTagWhereUniqueInput[]
    disconnect?: BlogPostTagWhereUniqueInput | BlogPostTagWhereUniqueInput[]
    delete?: BlogPostTagWhereUniqueInput | BlogPostTagWhereUniqueInput[]
    connect?: BlogPostTagWhereUniqueInput | BlogPostTagWhereUniqueInput[]
    update?: BlogPostTagUpdateWithWhereUniqueWithoutBlogPostMetaInput | BlogPostTagUpdateWithWhereUniqueWithoutBlogPostMetaInput[]
    updateMany?: BlogPostTagUpdateManyWithWhereWithoutBlogPostMetaInput | BlogPostTagUpdateManyWithWhereWithoutBlogPostMetaInput[]
    deleteMany?: BlogPostTagScalarWhereInput | BlogPostTagScalarWhereInput[]
  }

  export type BlogPostUpdateManyWithoutBlogPostMetaNestedInput = {
    create?: XOR<BlogPostCreateWithoutBlogPostMetaInput, BlogPostUncheckedCreateWithoutBlogPostMetaInput> | BlogPostCreateWithoutBlogPostMetaInput[] | BlogPostUncheckedCreateWithoutBlogPostMetaInput[]
    connectOrCreate?: BlogPostCreateOrConnectWithoutBlogPostMetaInput | BlogPostCreateOrConnectWithoutBlogPostMetaInput[]
    upsert?: BlogPostUpsertWithWhereUniqueWithoutBlogPostMetaInput | BlogPostUpsertWithWhereUniqueWithoutBlogPostMetaInput[]
    createMany?: BlogPostCreateManyBlogPostMetaInputEnvelope
    set?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
    disconnect?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
    delete?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
    connect?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
    update?: BlogPostUpdateWithWhereUniqueWithoutBlogPostMetaInput | BlogPostUpdateWithWhereUniqueWithoutBlogPostMetaInput[]
    updateMany?: BlogPostUpdateManyWithWhereWithoutBlogPostMetaInput | BlogPostUpdateManyWithWhereWithoutBlogPostMetaInput[]
    deleteMany?: BlogPostScalarWhereInput | BlogPostScalarWhereInput[]
  }

  export type BlogExtraFileUncheckedUpdateManyWithoutBlogPostMetaNestedInput = {
    create?: XOR<BlogExtraFileCreateWithoutBlogPostMetaInput, BlogExtraFileUncheckedCreateWithoutBlogPostMetaInput> | BlogExtraFileCreateWithoutBlogPostMetaInput[] | BlogExtraFileUncheckedCreateWithoutBlogPostMetaInput[]
    connectOrCreate?: BlogExtraFileCreateOrConnectWithoutBlogPostMetaInput | BlogExtraFileCreateOrConnectWithoutBlogPostMetaInput[]
    upsert?: BlogExtraFileUpsertWithWhereUniqueWithoutBlogPostMetaInput | BlogExtraFileUpsertWithWhereUniqueWithoutBlogPostMetaInput[]
    createMany?: BlogExtraFileCreateManyBlogPostMetaInputEnvelope
    set?: BlogExtraFileWhereUniqueInput | BlogExtraFileWhereUniqueInput[]
    disconnect?: BlogExtraFileWhereUniqueInput | BlogExtraFileWhereUniqueInput[]
    delete?: BlogExtraFileWhereUniqueInput | BlogExtraFileWhereUniqueInput[]
    connect?: BlogExtraFileWhereUniqueInput | BlogExtraFileWhereUniqueInput[]
    update?: BlogExtraFileUpdateWithWhereUniqueWithoutBlogPostMetaInput | BlogExtraFileUpdateWithWhereUniqueWithoutBlogPostMetaInput[]
    updateMany?: BlogExtraFileUpdateManyWithWhereWithoutBlogPostMetaInput | BlogExtraFileUpdateManyWithWhereWithoutBlogPostMetaInput[]
    deleteMany?: BlogExtraFileScalarWhereInput | BlogExtraFileScalarWhereInput[]
  }

  export type BlogPostTagUncheckedUpdateManyWithoutBlogPostMetaNestedInput = {
    create?: XOR<BlogPostTagCreateWithoutBlogPostMetaInput, BlogPostTagUncheckedCreateWithoutBlogPostMetaInput> | BlogPostTagCreateWithoutBlogPostMetaInput[] | BlogPostTagUncheckedCreateWithoutBlogPostMetaInput[]
    connectOrCreate?: BlogPostTagCreateOrConnectWithoutBlogPostMetaInput | BlogPostTagCreateOrConnectWithoutBlogPostMetaInput[]
    upsert?: BlogPostTagUpsertWithWhereUniqueWithoutBlogPostMetaInput | BlogPostTagUpsertWithWhereUniqueWithoutBlogPostMetaInput[]
    createMany?: BlogPostTagCreateManyBlogPostMetaInputEnvelope
    set?: BlogPostTagWhereUniqueInput | BlogPostTagWhereUniqueInput[]
    disconnect?: BlogPostTagWhereUniqueInput | BlogPostTagWhereUniqueInput[]
    delete?: BlogPostTagWhereUniqueInput | BlogPostTagWhereUniqueInput[]
    connect?: BlogPostTagWhereUniqueInput | BlogPostTagWhereUniqueInput[]
    update?: BlogPostTagUpdateWithWhereUniqueWithoutBlogPostMetaInput | BlogPostTagUpdateWithWhereUniqueWithoutBlogPostMetaInput[]
    updateMany?: BlogPostTagUpdateManyWithWhereWithoutBlogPostMetaInput | BlogPostTagUpdateManyWithWhereWithoutBlogPostMetaInput[]
    deleteMany?: BlogPostTagScalarWhereInput | BlogPostTagScalarWhereInput[]
  }

  export type BlogPostUncheckedUpdateManyWithoutBlogPostMetaNestedInput = {
    create?: XOR<BlogPostCreateWithoutBlogPostMetaInput, BlogPostUncheckedCreateWithoutBlogPostMetaInput> | BlogPostCreateWithoutBlogPostMetaInput[] | BlogPostUncheckedCreateWithoutBlogPostMetaInput[]
    connectOrCreate?: BlogPostCreateOrConnectWithoutBlogPostMetaInput | BlogPostCreateOrConnectWithoutBlogPostMetaInput[]
    upsert?: BlogPostUpsertWithWhereUniqueWithoutBlogPostMetaInput | BlogPostUpsertWithWhereUniqueWithoutBlogPostMetaInput[]
    createMany?: BlogPostCreateManyBlogPostMetaInputEnvelope
    set?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
    disconnect?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
    delete?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
    connect?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
    update?: BlogPostUpdateWithWhereUniqueWithoutBlogPostMetaInput | BlogPostUpdateWithWhereUniqueWithoutBlogPostMetaInput[]
    updateMany?: BlogPostUpdateManyWithWhereWithoutBlogPostMetaInput | BlogPostUpdateManyWithWhereWithoutBlogPostMetaInput[]
    deleteMany?: BlogPostScalarWhereInput | BlogPostScalarWhereInput[]
  }

  export type BlogPostMetaCreateNestedOneWithoutExtraFileInput = {
    create?: XOR<BlogPostMetaCreateWithoutExtraFileInput, BlogPostMetaUncheckedCreateWithoutExtraFileInput>
    connectOrCreate?: BlogPostMetaCreateOrConnectWithoutExtraFileInput
    connect?: BlogPostMetaWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutBlogExtraFileInput = {
    create?: XOR<UserCreateWithoutBlogExtraFileInput, UserUncheckedCreateWithoutBlogExtraFileInput>
    connectOrCreate?: UserCreateOrConnectWithoutBlogExtraFileInput
    connect?: UserWhereUniqueInput
  }

  export type BlogPostMetaUpdateOneRequiredWithoutExtraFileNestedInput = {
    create?: XOR<BlogPostMetaCreateWithoutExtraFileInput, BlogPostMetaUncheckedCreateWithoutExtraFileInput>
    connectOrCreate?: BlogPostMetaCreateOrConnectWithoutExtraFileInput
    upsert?: BlogPostMetaUpsertWithoutExtraFileInput
    connect?: BlogPostMetaWhereUniqueInput
    update?: XOR<XOR<BlogPostMetaUpdateToOneWithWhereWithoutExtraFileInput, BlogPostMetaUpdateWithoutExtraFileInput>, BlogPostMetaUncheckedUpdateWithoutExtraFileInput>
  }

  export type UserUpdateOneRequiredWithoutBlogExtraFileNestedInput = {
    create?: XOR<UserCreateWithoutBlogExtraFileInput, UserUncheckedCreateWithoutBlogExtraFileInput>
    connectOrCreate?: UserCreateOrConnectWithoutBlogExtraFileInput
    upsert?: UserUpsertWithoutBlogExtraFileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBlogExtraFileInput, UserUpdateWithoutBlogExtraFileInput>, UserUncheckedUpdateWithoutBlogExtraFileInput>
  }

  export type TagCreateNestedOneWithoutBlogPostTagInput = {
    create?: XOR<TagCreateWithoutBlogPostTagInput, TagUncheckedCreateWithoutBlogPostTagInput>
    connectOrCreate?: TagCreateOrConnectWithoutBlogPostTagInput
    connect?: TagWhereUniqueInput
  }

  export type BlogPostMetaCreateNestedOneWithoutBlogPostTagInput = {
    create?: XOR<BlogPostMetaCreateWithoutBlogPostTagInput, BlogPostMetaUncheckedCreateWithoutBlogPostTagInput>
    connectOrCreate?: BlogPostMetaCreateOrConnectWithoutBlogPostTagInput
    connect?: BlogPostMetaWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutBlogPostTagInput = {
    create?: XOR<UserCreateWithoutBlogPostTagInput, UserUncheckedCreateWithoutBlogPostTagInput>
    connectOrCreate?: UserCreateOrConnectWithoutBlogPostTagInput
    connect?: UserWhereUniqueInput
  }

  export type TagUpdateOneRequiredWithoutBlogPostTagNestedInput = {
    create?: XOR<TagCreateWithoutBlogPostTagInput, TagUncheckedCreateWithoutBlogPostTagInput>
    connectOrCreate?: TagCreateOrConnectWithoutBlogPostTagInput
    upsert?: TagUpsertWithoutBlogPostTagInput
    connect?: TagWhereUniqueInput
    update?: XOR<XOR<TagUpdateToOneWithWhereWithoutBlogPostTagInput, TagUpdateWithoutBlogPostTagInput>, TagUncheckedUpdateWithoutBlogPostTagInput>
  }

  export type BlogPostMetaUpdateOneRequiredWithoutBlogPostTagNestedInput = {
    create?: XOR<BlogPostMetaCreateWithoutBlogPostTagInput, BlogPostMetaUncheckedCreateWithoutBlogPostTagInput>
    connectOrCreate?: BlogPostMetaCreateOrConnectWithoutBlogPostTagInput
    upsert?: BlogPostMetaUpsertWithoutBlogPostTagInput
    connect?: BlogPostMetaWhereUniqueInput
    update?: XOR<XOR<BlogPostMetaUpdateToOneWithWhereWithoutBlogPostTagInput, BlogPostMetaUpdateWithoutBlogPostTagInput>, BlogPostMetaUncheckedUpdateWithoutBlogPostTagInput>
  }

  export type UserUpdateOneRequiredWithoutBlogPostTagNestedInput = {
    create?: XOR<UserCreateWithoutBlogPostTagInput, UserUncheckedCreateWithoutBlogPostTagInput>
    connectOrCreate?: UserCreateOrConnectWithoutBlogPostTagInput
    upsert?: UserUpsertWithoutBlogPostTagInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBlogPostTagInput, UserUpdateWithoutBlogPostTagInput>, UserUncheckedUpdateWithoutBlogPostTagInput>
  }

  export type UserCreateNestedOneWithoutBlogPostInput = {
    create?: XOR<UserCreateWithoutBlogPostInput, UserUncheckedCreateWithoutBlogPostInput>
    connectOrCreate?: UserCreateOrConnectWithoutBlogPostInput
    connect?: UserWhereUniqueInput
  }

  export type BlogPostMetaCreateNestedOneWithoutBlogPostInput = {
    create?: XOR<BlogPostMetaCreateWithoutBlogPostInput, BlogPostMetaUncheckedCreateWithoutBlogPostInput>
    connectOrCreate?: BlogPostMetaCreateOrConnectWithoutBlogPostInput
    connect?: BlogPostMetaWhereUniqueInput
  }

  export type BlogPostPublishCreateNestedOneWithoutBlogPostInput = {
    create?: XOR<BlogPostPublishCreateWithoutBlogPostInput, BlogPostPublishUncheckedCreateWithoutBlogPostInput>
    connectOrCreate?: BlogPostPublishCreateOrConnectWithoutBlogPostInput
    connect?: BlogPostPublishWhereUniqueInput
  }

  export type BlogPostPublishUncheckedCreateNestedOneWithoutBlogPostInput = {
    create?: XOR<BlogPostPublishCreateWithoutBlogPostInput, BlogPostPublishUncheckedCreateWithoutBlogPostInput>
    connectOrCreate?: BlogPostPublishCreateOrConnectWithoutBlogPostInput
    connect?: BlogPostPublishWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutBlogPostNestedInput = {
    create?: XOR<UserCreateWithoutBlogPostInput, UserUncheckedCreateWithoutBlogPostInput>
    connectOrCreate?: UserCreateOrConnectWithoutBlogPostInput
    upsert?: UserUpsertWithoutBlogPostInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBlogPostInput, UserUpdateWithoutBlogPostInput>, UserUncheckedUpdateWithoutBlogPostInput>
  }

  export type BlogPostMetaUpdateOneRequiredWithoutBlogPostNestedInput = {
    create?: XOR<BlogPostMetaCreateWithoutBlogPostInput, BlogPostMetaUncheckedCreateWithoutBlogPostInput>
    connectOrCreate?: BlogPostMetaCreateOrConnectWithoutBlogPostInput
    upsert?: BlogPostMetaUpsertWithoutBlogPostInput
    connect?: BlogPostMetaWhereUniqueInput
    update?: XOR<XOR<BlogPostMetaUpdateToOneWithWhereWithoutBlogPostInput, BlogPostMetaUpdateWithoutBlogPostInput>, BlogPostMetaUncheckedUpdateWithoutBlogPostInput>
  }

  export type BlogPostPublishUpdateOneWithoutBlogPostNestedInput = {
    create?: XOR<BlogPostPublishCreateWithoutBlogPostInput, BlogPostPublishUncheckedCreateWithoutBlogPostInput>
    connectOrCreate?: BlogPostPublishCreateOrConnectWithoutBlogPostInput
    upsert?: BlogPostPublishUpsertWithoutBlogPostInput
    disconnect?: BlogPostPublishWhereInput | boolean
    delete?: BlogPostPublishWhereInput | boolean
    connect?: BlogPostPublishWhereUniqueInput
    update?: XOR<XOR<BlogPostPublishUpdateToOneWithWhereWithoutBlogPostInput, BlogPostPublishUpdateWithoutBlogPostInput>, BlogPostPublishUncheckedUpdateWithoutBlogPostInput>
  }

  export type BlogPostPublishUncheckedUpdateOneWithoutBlogPostNestedInput = {
    create?: XOR<BlogPostPublishCreateWithoutBlogPostInput, BlogPostPublishUncheckedCreateWithoutBlogPostInput>
    connectOrCreate?: BlogPostPublishCreateOrConnectWithoutBlogPostInput
    upsert?: BlogPostPublishUpsertWithoutBlogPostInput
    disconnect?: BlogPostPublishWhereInput | boolean
    delete?: BlogPostPublishWhereInput | boolean
    connect?: BlogPostPublishWhereUniqueInput
    update?: XOR<XOR<BlogPostPublishUpdateToOneWithWhereWithoutBlogPostInput, BlogPostPublishUpdateWithoutBlogPostInput>, BlogPostPublishUncheckedUpdateWithoutBlogPostInput>
  }

  export type BlogPostCreateNestedOneWithoutBlogPostPublishInput = {
    create?: XOR<BlogPostCreateWithoutBlogPostPublishInput, BlogPostUncheckedCreateWithoutBlogPostPublishInput>
    connectOrCreate?: BlogPostCreateOrConnectWithoutBlogPostPublishInput
    connect?: BlogPostWhereUniqueInput
  }

  export type BlogCategoryCreateNestedOneWithoutBlogPostPublishInput = {
    create?: XOR<BlogCategoryCreateWithoutBlogPostPublishInput, BlogCategoryUncheckedCreateWithoutBlogPostPublishInput>
    connectOrCreate?: BlogCategoryCreateOrConnectWithoutBlogPostPublishInput
    connect?: BlogCategoryWhereUniqueInput
  }

  export type BlogPostUpdateOneRequiredWithoutBlogPostPublishNestedInput = {
    create?: XOR<BlogPostCreateWithoutBlogPostPublishInput, BlogPostUncheckedCreateWithoutBlogPostPublishInput>
    connectOrCreate?: BlogPostCreateOrConnectWithoutBlogPostPublishInput
    upsert?: BlogPostUpsertWithoutBlogPostPublishInput
    connect?: BlogPostWhereUniqueInput
    update?: XOR<XOR<BlogPostUpdateToOneWithWhereWithoutBlogPostPublishInput, BlogPostUpdateWithoutBlogPostPublishInput>, BlogPostUncheckedUpdateWithoutBlogPostPublishInput>
  }

  export type BlogCategoryUpdateOneRequiredWithoutBlogPostPublishNestedInput = {
    create?: XOR<BlogCategoryCreateWithoutBlogPostPublishInput, BlogCategoryUncheckedCreateWithoutBlogPostPublishInput>
    connectOrCreate?: BlogCategoryCreateOrConnectWithoutBlogPostPublishInput
    upsert?: BlogCategoryUpsertWithoutBlogPostPublishInput
    connect?: BlogCategoryWhereUniqueInput
    update?: XOR<XOR<BlogCategoryUpdateToOneWithWhereWithoutBlogPostPublishInput, BlogCategoryUpdateWithoutBlogPostPublishInput>, BlogCategoryUncheckedUpdateWithoutBlogPostPublishInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type TagCreateWithoutUserInput = {
    tagName: string
    blogPostTag?: BlogPostTagCreateNestedManyWithoutTagInput
  }

  export type TagUncheckedCreateWithoutUserInput = {
    tagName: string
    blogPostTag?: BlogPostTagUncheckedCreateNestedManyWithoutTagInput
  }

  export type TagCreateOrConnectWithoutUserInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutUserInput, TagUncheckedCreateWithoutUserInput>
  }

  export type TagCreateManyUserInputEnvelope = {
    data: TagCreateManyUserInput | TagCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BlogCategoryCreateWithoutUserInput = {
    categoryName: string
    privateCount?: bigint | number
    publicCount?: bigint | number
    categoryDepth?: number
    upperCategory?: BlogCategoryCreateNestedOneWithoutLowerCategoriesInput
    lowerCategories?: BlogCategoryCreateNestedManyWithoutUpperCategoryInput
    blogPostPublish?: BlogPostPublishCreateNestedManyWithoutBlogCategoryInput
  }

  export type BlogCategoryUncheckedCreateWithoutUserInput = {
    categoryName: string
    privateCount?: bigint | number
    publicCount?: bigint | number
    categoryDepth?: number
    upperCategoryName?: string | null
    lowerCategories?: BlogCategoryUncheckedCreateNestedManyWithoutUpperCategoryInput
    blogPostPublish?: BlogPostPublishUncheckedCreateNestedManyWithoutBlogCategoryInput
  }

  export type BlogCategoryCreateOrConnectWithoutUserInput = {
    where: BlogCategoryWhereUniqueInput
    create: XOR<BlogCategoryCreateWithoutUserInput, BlogCategoryUncheckedCreateWithoutUserInput>
  }

  export type BlogCategoryCreateManyUserInputEnvelope = {
    data: BlogCategoryCreateManyUserInput | BlogCategoryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BlogPostMetaCreateWithoutUserInput = {
    postHash: string
    postDelete?: boolean
    postViewCount?: number
    postLikeCount?: number
    postMainImageUrl?: string | null
    extraFile?: BlogExtraFileCreateNestedManyWithoutBlogPostMetaInput
    blogPostTag?: BlogPostTagCreateNestedManyWithoutBlogPostMetaInput
    blogPost?: BlogPostCreateNestedManyWithoutBlogPostMetaInput
  }

  export type BlogPostMetaUncheckedCreateWithoutUserInput = {
    postHash: string
    postDelete?: boolean
    postViewCount?: number
    postLikeCount?: number
    postMainImageUrl?: string | null
    extraFile?: BlogExtraFileUncheckedCreateNestedManyWithoutBlogPostMetaInput
    blogPostTag?: BlogPostTagUncheckedCreateNestedManyWithoutBlogPostMetaInput
    blogPost?: BlogPostUncheckedCreateNestedManyWithoutBlogPostMetaInput
  }

  export type BlogPostMetaCreateOrConnectWithoutUserInput = {
    where: BlogPostMetaWhereUniqueInput
    create: XOR<BlogPostMetaCreateWithoutUserInput, BlogPostMetaUncheckedCreateWithoutUserInput>
  }

  export type BlogPostMetaCreateManyUserInputEnvelope = {
    data: BlogPostMetaCreateManyUserInput | BlogPostMetaCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BlogPostTagCreateWithoutUserInput = {
    tag: TagCreateNestedOneWithoutBlogPostTagInput
    blogPostMeta: BlogPostMetaCreateNestedOneWithoutBlogPostTagInput
  }

  export type BlogPostTagUncheckedCreateWithoutUserInput = {
    tagName: string
    postHash: string
  }

  export type BlogPostTagCreateOrConnectWithoutUserInput = {
    where: BlogPostTagWhereUniqueInput
    create: XOR<BlogPostTagCreateWithoutUserInput, BlogPostTagUncheckedCreateWithoutUserInput>
  }

  export type BlogPostTagCreateManyUserInputEnvelope = {
    data: BlogPostTagCreateManyUserInput | BlogPostTagCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BlogExtraFileCreateWithoutUserInput = {
    extraFileUrl: string
    extraFileAlt: string
    blogPostMeta: BlogPostMetaCreateNestedOneWithoutExtraFileInput
  }

  export type BlogExtraFileUncheckedCreateWithoutUserInput = {
    extraFileId?: number
    postHash: string
    extraFileUrl: string
    extraFileAlt: string
  }

  export type BlogExtraFileCreateOrConnectWithoutUserInput = {
    where: BlogExtraFileWhereUniqueInput
    create: XOR<BlogExtraFileCreateWithoutUserInput, BlogExtraFileUncheckedCreateWithoutUserInput>
  }

  export type BlogExtraFileCreateManyUserInputEnvelope = {
    data: BlogExtraFileCreateManyUserInput | BlogExtraFileCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BlogPostCreateWithoutUserInput = {
    revisionHash: string
    postTitle: string
    postContent: string
    postDraft?: boolean
    postCreatedAt?: Date | string
    postUpdatedAt?: Date | string
    postPublished?: Date | string | null
    postReadTimeSeconds?: number
    blogPostMeta: BlogPostMetaCreateNestedOneWithoutBlogPostInput
    blogPostPublish?: BlogPostPublishCreateNestedOneWithoutBlogPostInput
  }

  export type BlogPostUncheckedCreateWithoutUserInput = {
    revisionHash: string
    postHash: string
    postTitle: string
    postContent: string
    postDraft?: boolean
    postCreatedAt?: Date | string
    postUpdatedAt?: Date | string
    postPublished?: Date | string | null
    postReadTimeSeconds?: number
    blogPostPublish?: BlogPostPublishUncheckedCreateNestedOneWithoutBlogPostInput
  }

  export type BlogPostCreateOrConnectWithoutUserInput = {
    where: BlogPostWhereUniqueInput
    create: XOR<BlogPostCreateWithoutUserInput, BlogPostUncheckedCreateWithoutUserInput>
  }

  export type BlogPostCreateManyUserInputEnvelope = {
    data: BlogPostCreateManyUserInput | BlogPostCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TagUpsertWithWhereUniqueWithoutUserInput = {
    where: TagWhereUniqueInput
    update: XOR<TagUpdateWithoutUserInput, TagUncheckedUpdateWithoutUserInput>
    create: XOR<TagCreateWithoutUserInput, TagUncheckedCreateWithoutUserInput>
  }

  export type TagUpdateWithWhereUniqueWithoutUserInput = {
    where: TagWhereUniqueInput
    data: XOR<TagUpdateWithoutUserInput, TagUncheckedUpdateWithoutUserInput>
  }

  export type TagUpdateManyWithWhereWithoutUserInput = {
    where: TagScalarWhereInput
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyWithoutUserInput>
  }

  export type TagScalarWhereInput = {
    AND?: TagScalarWhereInput | TagScalarWhereInput[]
    OR?: TagScalarWhereInput[]
    NOT?: TagScalarWhereInput | TagScalarWhereInput[]
    tagName?: StringFilter<"Tag"> | string
    userId?: StringFilter<"Tag"> | string
  }

  export type BlogCategoryUpsertWithWhereUniqueWithoutUserInput = {
    where: BlogCategoryWhereUniqueInput
    update: XOR<BlogCategoryUpdateWithoutUserInput, BlogCategoryUncheckedUpdateWithoutUserInput>
    create: XOR<BlogCategoryCreateWithoutUserInput, BlogCategoryUncheckedCreateWithoutUserInput>
  }

  export type BlogCategoryUpdateWithWhereUniqueWithoutUserInput = {
    where: BlogCategoryWhereUniqueInput
    data: XOR<BlogCategoryUpdateWithoutUserInput, BlogCategoryUncheckedUpdateWithoutUserInput>
  }

  export type BlogCategoryUpdateManyWithWhereWithoutUserInput = {
    where: BlogCategoryScalarWhereInput
    data: XOR<BlogCategoryUpdateManyMutationInput, BlogCategoryUncheckedUpdateManyWithoutUserInput>
  }

  export type BlogCategoryScalarWhereInput = {
    AND?: BlogCategoryScalarWhereInput | BlogCategoryScalarWhereInput[]
    OR?: BlogCategoryScalarWhereInput[]
    NOT?: BlogCategoryScalarWhereInput | BlogCategoryScalarWhereInput[]
    categoryName?: StringFilter<"BlogCategory"> | string
    userId?: StringFilter<"BlogCategory"> | string
    privateCount?: BigIntFilter<"BlogCategory"> | bigint | number
    publicCount?: BigIntFilter<"BlogCategory"> | bigint | number
    categoryDepth?: IntFilter<"BlogCategory"> | number
    upperCategoryName?: StringNullableFilter<"BlogCategory"> | string | null
  }

  export type BlogPostMetaUpsertWithWhereUniqueWithoutUserInput = {
    where: BlogPostMetaWhereUniqueInput
    update: XOR<BlogPostMetaUpdateWithoutUserInput, BlogPostMetaUncheckedUpdateWithoutUserInput>
    create: XOR<BlogPostMetaCreateWithoutUserInput, BlogPostMetaUncheckedCreateWithoutUserInput>
  }

  export type BlogPostMetaUpdateWithWhereUniqueWithoutUserInput = {
    where: BlogPostMetaWhereUniqueInput
    data: XOR<BlogPostMetaUpdateWithoutUserInput, BlogPostMetaUncheckedUpdateWithoutUserInput>
  }

  export type BlogPostMetaUpdateManyWithWhereWithoutUserInput = {
    where: BlogPostMetaScalarWhereInput
    data: XOR<BlogPostMetaUpdateManyMutationInput, BlogPostMetaUncheckedUpdateManyWithoutUserInput>
  }

  export type BlogPostMetaScalarWhereInput = {
    AND?: BlogPostMetaScalarWhereInput | BlogPostMetaScalarWhereInput[]
    OR?: BlogPostMetaScalarWhereInput[]
    NOT?: BlogPostMetaScalarWhereInput | BlogPostMetaScalarWhereInput[]
    postHash?: StringFilter<"BlogPostMeta"> | string
    userId?: StringFilter<"BlogPostMeta"> | string
    postDelete?: BoolFilter<"BlogPostMeta"> | boolean
    postViewCount?: IntFilter<"BlogPostMeta"> | number
    postLikeCount?: IntFilter<"BlogPostMeta"> | number
    postMainImageUrl?: StringNullableFilter<"BlogPostMeta"> | string | null
  }

  export type BlogPostTagUpsertWithWhereUniqueWithoutUserInput = {
    where: BlogPostTagWhereUniqueInput
    update: XOR<BlogPostTagUpdateWithoutUserInput, BlogPostTagUncheckedUpdateWithoutUserInput>
    create: XOR<BlogPostTagCreateWithoutUserInput, BlogPostTagUncheckedCreateWithoutUserInput>
  }

  export type BlogPostTagUpdateWithWhereUniqueWithoutUserInput = {
    where: BlogPostTagWhereUniqueInput
    data: XOR<BlogPostTagUpdateWithoutUserInput, BlogPostTagUncheckedUpdateWithoutUserInput>
  }

  export type BlogPostTagUpdateManyWithWhereWithoutUserInput = {
    where: BlogPostTagScalarWhereInput
    data: XOR<BlogPostTagUpdateManyMutationInput, BlogPostTagUncheckedUpdateManyWithoutUserInput>
  }

  export type BlogPostTagScalarWhereInput = {
    AND?: BlogPostTagScalarWhereInput | BlogPostTagScalarWhereInput[]
    OR?: BlogPostTagScalarWhereInput[]
    NOT?: BlogPostTagScalarWhereInput | BlogPostTagScalarWhereInput[]
    tagName?: StringFilter<"BlogPostTag"> | string
    postHash?: StringFilter<"BlogPostTag"> | string
    userId?: StringFilter<"BlogPostTag"> | string
  }

  export type BlogExtraFileUpsertWithWhereUniqueWithoutUserInput = {
    where: BlogExtraFileWhereUniqueInput
    update: XOR<BlogExtraFileUpdateWithoutUserInput, BlogExtraFileUncheckedUpdateWithoutUserInput>
    create: XOR<BlogExtraFileCreateWithoutUserInput, BlogExtraFileUncheckedCreateWithoutUserInput>
  }

  export type BlogExtraFileUpdateWithWhereUniqueWithoutUserInput = {
    where: BlogExtraFileWhereUniqueInput
    data: XOR<BlogExtraFileUpdateWithoutUserInput, BlogExtraFileUncheckedUpdateWithoutUserInput>
  }

  export type BlogExtraFileUpdateManyWithWhereWithoutUserInput = {
    where: BlogExtraFileScalarWhereInput
    data: XOR<BlogExtraFileUpdateManyMutationInput, BlogExtraFileUncheckedUpdateManyWithoutUserInput>
  }

  export type BlogExtraFileScalarWhereInput = {
    AND?: BlogExtraFileScalarWhereInput | BlogExtraFileScalarWhereInput[]
    OR?: BlogExtraFileScalarWhereInput[]
    NOT?: BlogExtraFileScalarWhereInput | BlogExtraFileScalarWhereInput[]
    extraFileId?: IntFilter<"BlogExtraFile"> | number
    postHash?: StringFilter<"BlogExtraFile"> | string
    userId?: StringFilter<"BlogExtraFile"> | string
    extraFileUrl?: StringFilter<"BlogExtraFile"> | string
    extraFileAlt?: StringFilter<"BlogExtraFile"> | string
  }

  export type BlogPostUpsertWithWhereUniqueWithoutUserInput = {
    where: BlogPostWhereUniqueInput
    update: XOR<BlogPostUpdateWithoutUserInput, BlogPostUncheckedUpdateWithoutUserInput>
    create: XOR<BlogPostCreateWithoutUserInput, BlogPostUncheckedCreateWithoutUserInput>
  }

  export type BlogPostUpdateWithWhereUniqueWithoutUserInput = {
    where: BlogPostWhereUniqueInput
    data: XOR<BlogPostUpdateWithoutUserInput, BlogPostUncheckedUpdateWithoutUserInput>
  }

  export type BlogPostUpdateManyWithWhereWithoutUserInput = {
    where: BlogPostScalarWhereInput
    data: XOR<BlogPostUpdateManyMutationInput, BlogPostUncheckedUpdateManyWithoutUserInput>
  }

  export type BlogPostScalarWhereInput = {
    AND?: BlogPostScalarWhereInput | BlogPostScalarWhereInput[]
    OR?: BlogPostScalarWhereInput[]
    NOT?: BlogPostScalarWhereInput | BlogPostScalarWhereInput[]
    revisionHash?: StringFilter<"BlogPost"> | string
    postHash?: StringFilter<"BlogPost"> | string
    userId?: StringFilter<"BlogPost"> | string
    postTitle?: StringFilter<"BlogPost"> | string
    postContent?: StringFilter<"BlogPost"> | string
    postDraft?: BoolFilter<"BlogPost"> | boolean
    postCreatedAt?: DateTimeFilter<"BlogPost"> | Date | string
    postUpdatedAt?: DateTimeFilter<"BlogPost"> | Date | string
    postPublished?: DateTimeNullableFilter<"BlogPost"> | Date | string | null
    postReadTimeSeconds?: IntFilter<"BlogPost"> | number
  }

  export type UserCreateWithoutTagInput = {
    userId: string
    userName: string
    userPassword: string
    createdAt?: Date | string
    updatedAt?: Date | string
    blogCategory?: BlogCategoryCreateNestedManyWithoutUserInput
    blogPostMeta?: BlogPostMetaCreateNestedManyWithoutUserInput
    blogPostTag?: BlogPostTagCreateNestedManyWithoutUserInput
    blogExtraFile?: BlogExtraFileCreateNestedManyWithoutUserInput
    blogPost?: BlogPostCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTagInput = {
    userId: string
    userName: string
    userPassword: string
    createdAt?: Date | string
    updatedAt?: Date | string
    blogCategory?: BlogCategoryUncheckedCreateNestedManyWithoutUserInput
    blogPostMeta?: BlogPostMetaUncheckedCreateNestedManyWithoutUserInput
    blogPostTag?: BlogPostTagUncheckedCreateNestedManyWithoutUserInput
    blogExtraFile?: BlogExtraFileUncheckedCreateNestedManyWithoutUserInput
    blogPost?: BlogPostUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTagInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTagInput, UserUncheckedCreateWithoutTagInput>
  }

  export type BlogPostTagCreateWithoutTagInput = {
    blogPostMeta: BlogPostMetaCreateNestedOneWithoutBlogPostTagInput
    user: UserCreateNestedOneWithoutBlogPostTagInput
  }

  export type BlogPostTagUncheckedCreateWithoutTagInput = {
    postHash: string
  }

  export type BlogPostTagCreateOrConnectWithoutTagInput = {
    where: BlogPostTagWhereUniqueInput
    create: XOR<BlogPostTagCreateWithoutTagInput, BlogPostTagUncheckedCreateWithoutTagInput>
  }

  export type BlogPostTagCreateManyTagInputEnvelope = {
    data: BlogPostTagCreateManyTagInput | BlogPostTagCreateManyTagInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutTagInput = {
    update: XOR<UserUpdateWithoutTagInput, UserUncheckedUpdateWithoutTagInput>
    create: XOR<UserCreateWithoutTagInput, UserUncheckedCreateWithoutTagInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTagInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTagInput, UserUncheckedUpdateWithoutTagInput>
  }

  export type UserUpdateWithoutTagInput = {
    userId?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    userPassword?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blogCategory?: BlogCategoryUpdateManyWithoutUserNestedInput
    blogPostMeta?: BlogPostMetaUpdateManyWithoutUserNestedInput
    blogPostTag?: BlogPostTagUpdateManyWithoutUserNestedInput
    blogExtraFile?: BlogExtraFileUpdateManyWithoutUserNestedInput
    blogPost?: BlogPostUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTagInput = {
    userId?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    userPassword?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blogCategory?: BlogCategoryUncheckedUpdateManyWithoutUserNestedInput
    blogPostMeta?: BlogPostMetaUncheckedUpdateManyWithoutUserNestedInput
    blogPostTag?: BlogPostTagUncheckedUpdateManyWithoutUserNestedInput
    blogExtraFile?: BlogExtraFileUncheckedUpdateManyWithoutUserNestedInput
    blogPost?: BlogPostUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BlogPostTagUpsertWithWhereUniqueWithoutTagInput = {
    where: BlogPostTagWhereUniqueInput
    update: XOR<BlogPostTagUpdateWithoutTagInput, BlogPostTagUncheckedUpdateWithoutTagInput>
    create: XOR<BlogPostTagCreateWithoutTagInput, BlogPostTagUncheckedCreateWithoutTagInput>
  }

  export type BlogPostTagUpdateWithWhereUniqueWithoutTagInput = {
    where: BlogPostTagWhereUniqueInput
    data: XOR<BlogPostTagUpdateWithoutTagInput, BlogPostTagUncheckedUpdateWithoutTagInput>
  }

  export type BlogPostTagUpdateManyWithWhereWithoutTagInput = {
    where: BlogPostTagScalarWhereInput
    data: XOR<BlogPostTagUpdateManyMutationInput, BlogPostTagUncheckedUpdateManyWithoutTagInput>
  }

  export type UserCreateWithoutBlogCategoryInput = {
    userId: string
    userName: string
    userPassword: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tag?: TagCreateNestedManyWithoutUserInput
    blogPostMeta?: BlogPostMetaCreateNestedManyWithoutUserInput
    blogPostTag?: BlogPostTagCreateNestedManyWithoutUserInput
    blogExtraFile?: BlogExtraFileCreateNestedManyWithoutUserInput
    blogPost?: BlogPostCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBlogCategoryInput = {
    userId: string
    userName: string
    userPassword: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tag?: TagUncheckedCreateNestedManyWithoutUserInput
    blogPostMeta?: BlogPostMetaUncheckedCreateNestedManyWithoutUserInput
    blogPostTag?: BlogPostTagUncheckedCreateNestedManyWithoutUserInput
    blogExtraFile?: BlogExtraFileUncheckedCreateNestedManyWithoutUserInput
    blogPost?: BlogPostUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBlogCategoryInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBlogCategoryInput, UserUncheckedCreateWithoutBlogCategoryInput>
  }

  export type BlogCategoryCreateWithoutLowerCategoriesInput = {
    categoryName: string
    privateCount?: bigint | number
    publicCount?: bigint | number
    categoryDepth?: number
    user: UserCreateNestedOneWithoutBlogCategoryInput
    upperCategory?: BlogCategoryCreateNestedOneWithoutLowerCategoriesInput
    blogPostPublish?: BlogPostPublishCreateNestedManyWithoutBlogCategoryInput
  }

  export type BlogCategoryUncheckedCreateWithoutLowerCategoriesInput = {
    categoryName: string
    userId: string
    privateCount?: bigint | number
    publicCount?: bigint | number
    categoryDepth?: number
    upperCategoryName?: string | null
    blogPostPublish?: BlogPostPublishUncheckedCreateNestedManyWithoutBlogCategoryInput
  }

  export type BlogCategoryCreateOrConnectWithoutLowerCategoriesInput = {
    where: BlogCategoryWhereUniqueInput
    create: XOR<BlogCategoryCreateWithoutLowerCategoriesInput, BlogCategoryUncheckedCreateWithoutLowerCategoriesInput>
  }

  export type BlogCategoryCreateWithoutUpperCategoryInput = {
    categoryName: string
    privateCount?: bigint | number
    publicCount?: bigint | number
    categoryDepth?: number
    user: UserCreateNestedOneWithoutBlogCategoryInput
    lowerCategories?: BlogCategoryCreateNestedManyWithoutUpperCategoryInput
    blogPostPublish?: BlogPostPublishCreateNestedManyWithoutBlogCategoryInput
  }

  export type BlogCategoryUncheckedCreateWithoutUpperCategoryInput = {
    categoryName: string
    userId: string
    privateCount?: bigint | number
    publicCount?: bigint | number
    categoryDepth?: number
    lowerCategories?: BlogCategoryUncheckedCreateNestedManyWithoutUpperCategoryInput
    blogPostPublish?: BlogPostPublishUncheckedCreateNestedManyWithoutBlogCategoryInput
  }

  export type BlogCategoryCreateOrConnectWithoutUpperCategoryInput = {
    where: BlogCategoryWhereUniqueInput
    create: XOR<BlogCategoryCreateWithoutUpperCategoryInput, BlogCategoryUncheckedCreateWithoutUpperCategoryInput>
  }

  export type BlogCategoryCreateManyUpperCategoryInputEnvelope = {
    data: BlogCategoryCreateManyUpperCategoryInput | BlogCategoryCreateManyUpperCategoryInput[]
    skipDuplicates?: boolean
  }

  export type BlogPostPublishCreateWithoutBlogCategoryInput = {
    postVisibility?: boolean
    blogPost: BlogPostCreateNestedOneWithoutBlogPostPublishInput
  }

  export type BlogPostPublishUncheckedCreateWithoutBlogCategoryInput = {
    revisionHash: string
    userId: string
    postHash: string
    postVisibility?: boolean
  }

  export type BlogPostPublishCreateOrConnectWithoutBlogCategoryInput = {
    where: BlogPostPublishWhereUniqueInput
    create: XOR<BlogPostPublishCreateWithoutBlogCategoryInput, BlogPostPublishUncheckedCreateWithoutBlogCategoryInput>
  }

  export type BlogPostPublishCreateManyBlogCategoryInputEnvelope = {
    data: BlogPostPublishCreateManyBlogCategoryInput | BlogPostPublishCreateManyBlogCategoryInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutBlogCategoryInput = {
    update: XOR<UserUpdateWithoutBlogCategoryInput, UserUncheckedUpdateWithoutBlogCategoryInput>
    create: XOR<UserCreateWithoutBlogCategoryInput, UserUncheckedCreateWithoutBlogCategoryInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBlogCategoryInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBlogCategoryInput, UserUncheckedUpdateWithoutBlogCategoryInput>
  }

  export type UserUpdateWithoutBlogCategoryInput = {
    userId?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    userPassword?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tag?: TagUpdateManyWithoutUserNestedInput
    blogPostMeta?: BlogPostMetaUpdateManyWithoutUserNestedInput
    blogPostTag?: BlogPostTagUpdateManyWithoutUserNestedInput
    blogExtraFile?: BlogExtraFileUpdateManyWithoutUserNestedInput
    blogPost?: BlogPostUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBlogCategoryInput = {
    userId?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    userPassword?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tag?: TagUncheckedUpdateManyWithoutUserNestedInput
    blogPostMeta?: BlogPostMetaUncheckedUpdateManyWithoutUserNestedInput
    blogPostTag?: BlogPostTagUncheckedUpdateManyWithoutUserNestedInput
    blogExtraFile?: BlogExtraFileUncheckedUpdateManyWithoutUserNestedInput
    blogPost?: BlogPostUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BlogCategoryUpsertWithoutLowerCategoriesInput = {
    update: XOR<BlogCategoryUpdateWithoutLowerCategoriesInput, BlogCategoryUncheckedUpdateWithoutLowerCategoriesInput>
    create: XOR<BlogCategoryCreateWithoutLowerCategoriesInput, BlogCategoryUncheckedCreateWithoutLowerCategoriesInput>
    where?: BlogCategoryWhereInput
  }

  export type BlogCategoryUpdateToOneWithWhereWithoutLowerCategoriesInput = {
    where?: BlogCategoryWhereInput
    data: XOR<BlogCategoryUpdateWithoutLowerCategoriesInput, BlogCategoryUncheckedUpdateWithoutLowerCategoriesInput>
  }

  export type BlogCategoryUpdateWithoutLowerCategoriesInput = {
    categoryName?: StringFieldUpdateOperationsInput | string
    privateCount?: BigIntFieldUpdateOperationsInput | bigint | number
    publicCount?: BigIntFieldUpdateOperationsInput | bigint | number
    categoryDepth?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutBlogCategoryNestedInput
    upperCategory?: BlogCategoryUpdateOneWithoutLowerCategoriesNestedInput
    blogPostPublish?: BlogPostPublishUpdateManyWithoutBlogCategoryNestedInput
  }

  export type BlogCategoryUncheckedUpdateWithoutLowerCategoriesInput = {
    categoryName?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    privateCount?: BigIntFieldUpdateOperationsInput | bigint | number
    publicCount?: BigIntFieldUpdateOperationsInput | bigint | number
    categoryDepth?: IntFieldUpdateOperationsInput | number
    upperCategoryName?: NullableStringFieldUpdateOperationsInput | string | null
    blogPostPublish?: BlogPostPublishUncheckedUpdateManyWithoutBlogCategoryNestedInput
  }

  export type BlogCategoryUpsertWithWhereUniqueWithoutUpperCategoryInput = {
    where: BlogCategoryWhereUniqueInput
    update: XOR<BlogCategoryUpdateWithoutUpperCategoryInput, BlogCategoryUncheckedUpdateWithoutUpperCategoryInput>
    create: XOR<BlogCategoryCreateWithoutUpperCategoryInput, BlogCategoryUncheckedCreateWithoutUpperCategoryInput>
  }

  export type BlogCategoryUpdateWithWhereUniqueWithoutUpperCategoryInput = {
    where: BlogCategoryWhereUniqueInput
    data: XOR<BlogCategoryUpdateWithoutUpperCategoryInput, BlogCategoryUncheckedUpdateWithoutUpperCategoryInput>
  }

  export type BlogCategoryUpdateManyWithWhereWithoutUpperCategoryInput = {
    where: BlogCategoryScalarWhereInput
    data: XOR<BlogCategoryUpdateManyMutationInput, BlogCategoryUncheckedUpdateManyWithoutUpperCategoryInput>
  }

  export type BlogPostPublishUpsertWithWhereUniqueWithoutBlogCategoryInput = {
    where: BlogPostPublishWhereUniqueInput
    update: XOR<BlogPostPublishUpdateWithoutBlogCategoryInput, BlogPostPublishUncheckedUpdateWithoutBlogCategoryInput>
    create: XOR<BlogPostPublishCreateWithoutBlogCategoryInput, BlogPostPublishUncheckedCreateWithoutBlogCategoryInput>
  }

  export type BlogPostPublishUpdateWithWhereUniqueWithoutBlogCategoryInput = {
    where: BlogPostPublishWhereUniqueInput
    data: XOR<BlogPostPublishUpdateWithoutBlogCategoryInput, BlogPostPublishUncheckedUpdateWithoutBlogCategoryInput>
  }

  export type BlogPostPublishUpdateManyWithWhereWithoutBlogCategoryInput = {
    where: BlogPostPublishScalarWhereInput
    data: XOR<BlogPostPublishUpdateManyMutationInput, BlogPostPublishUncheckedUpdateManyWithoutBlogCategoryInput>
  }

  export type BlogPostPublishScalarWhereInput = {
    AND?: BlogPostPublishScalarWhereInput | BlogPostPublishScalarWhereInput[]
    OR?: BlogPostPublishScalarWhereInput[]
    NOT?: BlogPostPublishScalarWhereInput | BlogPostPublishScalarWhereInput[]
    revisionHash?: StringFilter<"BlogPostPublish"> | string
    categoryName?: StringFilter<"BlogPostPublish"> | string
    userId?: StringFilter<"BlogPostPublish"> | string
    postHash?: StringFilter<"BlogPostPublish"> | string
    postVisibility?: BoolFilter<"BlogPostPublish"> | boolean
  }

  export type UserCreateWithoutBlogPostMetaInput = {
    userId: string
    userName: string
    userPassword: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tag?: TagCreateNestedManyWithoutUserInput
    blogCategory?: BlogCategoryCreateNestedManyWithoutUserInput
    blogPostTag?: BlogPostTagCreateNestedManyWithoutUserInput
    blogExtraFile?: BlogExtraFileCreateNestedManyWithoutUserInput
    blogPost?: BlogPostCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBlogPostMetaInput = {
    userId: string
    userName: string
    userPassword: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tag?: TagUncheckedCreateNestedManyWithoutUserInput
    blogCategory?: BlogCategoryUncheckedCreateNestedManyWithoutUserInput
    blogPostTag?: BlogPostTagUncheckedCreateNestedManyWithoutUserInput
    blogExtraFile?: BlogExtraFileUncheckedCreateNestedManyWithoutUserInput
    blogPost?: BlogPostUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBlogPostMetaInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBlogPostMetaInput, UserUncheckedCreateWithoutBlogPostMetaInput>
  }

  export type BlogExtraFileCreateWithoutBlogPostMetaInput = {
    extraFileUrl: string
    extraFileAlt: string
    user: UserCreateNestedOneWithoutBlogExtraFileInput
  }

  export type BlogExtraFileUncheckedCreateWithoutBlogPostMetaInput = {
    extraFileId?: number
    userId: string
    extraFileUrl: string
    extraFileAlt: string
  }

  export type BlogExtraFileCreateOrConnectWithoutBlogPostMetaInput = {
    where: BlogExtraFileWhereUniqueInput
    create: XOR<BlogExtraFileCreateWithoutBlogPostMetaInput, BlogExtraFileUncheckedCreateWithoutBlogPostMetaInput>
  }

  export type BlogExtraFileCreateManyBlogPostMetaInputEnvelope = {
    data: BlogExtraFileCreateManyBlogPostMetaInput | BlogExtraFileCreateManyBlogPostMetaInput[]
    skipDuplicates?: boolean
  }

  export type BlogPostTagCreateWithoutBlogPostMetaInput = {
    tag: TagCreateNestedOneWithoutBlogPostTagInput
    user: UserCreateNestedOneWithoutBlogPostTagInput
  }

  export type BlogPostTagUncheckedCreateWithoutBlogPostMetaInput = {
    tagName: string
    userId: string
  }

  export type BlogPostTagCreateOrConnectWithoutBlogPostMetaInput = {
    where: BlogPostTagWhereUniqueInput
    create: XOR<BlogPostTagCreateWithoutBlogPostMetaInput, BlogPostTagUncheckedCreateWithoutBlogPostMetaInput>
  }

  export type BlogPostTagCreateManyBlogPostMetaInputEnvelope = {
    data: BlogPostTagCreateManyBlogPostMetaInput | BlogPostTagCreateManyBlogPostMetaInput[]
    skipDuplicates?: boolean
  }

  export type BlogPostCreateWithoutBlogPostMetaInput = {
    revisionHash: string
    postTitle: string
    postContent: string
    postDraft?: boolean
    postCreatedAt?: Date | string
    postUpdatedAt?: Date | string
    postPublished?: Date | string | null
    postReadTimeSeconds?: number
    user: UserCreateNestedOneWithoutBlogPostInput
    blogPostPublish?: BlogPostPublishCreateNestedOneWithoutBlogPostInput
  }

  export type BlogPostUncheckedCreateWithoutBlogPostMetaInput = {
    revisionHash: string
    userId: string
    postTitle: string
    postContent: string
    postDraft?: boolean
    postCreatedAt?: Date | string
    postUpdatedAt?: Date | string
    postPublished?: Date | string | null
    postReadTimeSeconds?: number
    blogPostPublish?: BlogPostPublishUncheckedCreateNestedOneWithoutBlogPostInput
  }

  export type BlogPostCreateOrConnectWithoutBlogPostMetaInput = {
    where: BlogPostWhereUniqueInput
    create: XOR<BlogPostCreateWithoutBlogPostMetaInput, BlogPostUncheckedCreateWithoutBlogPostMetaInput>
  }

  export type BlogPostCreateManyBlogPostMetaInputEnvelope = {
    data: BlogPostCreateManyBlogPostMetaInput | BlogPostCreateManyBlogPostMetaInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutBlogPostMetaInput = {
    update: XOR<UserUpdateWithoutBlogPostMetaInput, UserUncheckedUpdateWithoutBlogPostMetaInput>
    create: XOR<UserCreateWithoutBlogPostMetaInput, UserUncheckedCreateWithoutBlogPostMetaInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBlogPostMetaInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBlogPostMetaInput, UserUncheckedUpdateWithoutBlogPostMetaInput>
  }

  export type UserUpdateWithoutBlogPostMetaInput = {
    userId?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    userPassword?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tag?: TagUpdateManyWithoutUserNestedInput
    blogCategory?: BlogCategoryUpdateManyWithoutUserNestedInput
    blogPostTag?: BlogPostTagUpdateManyWithoutUserNestedInput
    blogExtraFile?: BlogExtraFileUpdateManyWithoutUserNestedInput
    blogPost?: BlogPostUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBlogPostMetaInput = {
    userId?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    userPassword?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tag?: TagUncheckedUpdateManyWithoutUserNestedInput
    blogCategory?: BlogCategoryUncheckedUpdateManyWithoutUserNestedInput
    blogPostTag?: BlogPostTagUncheckedUpdateManyWithoutUserNestedInput
    blogExtraFile?: BlogExtraFileUncheckedUpdateManyWithoutUserNestedInput
    blogPost?: BlogPostUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BlogExtraFileUpsertWithWhereUniqueWithoutBlogPostMetaInput = {
    where: BlogExtraFileWhereUniqueInput
    update: XOR<BlogExtraFileUpdateWithoutBlogPostMetaInput, BlogExtraFileUncheckedUpdateWithoutBlogPostMetaInput>
    create: XOR<BlogExtraFileCreateWithoutBlogPostMetaInput, BlogExtraFileUncheckedCreateWithoutBlogPostMetaInput>
  }

  export type BlogExtraFileUpdateWithWhereUniqueWithoutBlogPostMetaInput = {
    where: BlogExtraFileWhereUniqueInput
    data: XOR<BlogExtraFileUpdateWithoutBlogPostMetaInput, BlogExtraFileUncheckedUpdateWithoutBlogPostMetaInput>
  }

  export type BlogExtraFileUpdateManyWithWhereWithoutBlogPostMetaInput = {
    where: BlogExtraFileScalarWhereInput
    data: XOR<BlogExtraFileUpdateManyMutationInput, BlogExtraFileUncheckedUpdateManyWithoutBlogPostMetaInput>
  }

  export type BlogPostTagUpsertWithWhereUniqueWithoutBlogPostMetaInput = {
    where: BlogPostTagWhereUniqueInput
    update: XOR<BlogPostTagUpdateWithoutBlogPostMetaInput, BlogPostTagUncheckedUpdateWithoutBlogPostMetaInput>
    create: XOR<BlogPostTagCreateWithoutBlogPostMetaInput, BlogPostTagUncheckedCreateWithoutBlogPostMetaInput>
  }

  export type BlogPostTagUpdateWithWhereUniqueWithoutBlogPostMetaInput = {
    where: BlogPostTagWhereUniqueInput
    data: XOR<BlogPostTagUpdateWithoutBlogPostMetaInput, BlogPostTagUncheckedUpdateWithoutBlogPostMetaInput>
  }

  export type BlogPostTagUpdateManyWithWhereWithoutBlogPostMetaInput = {
    where: BlogPostTagScalarWhereInput
    data: XOR<BlogPostTagUpdateManyMutationInput, BlogPostTagUncheckedUpdateManyWithoutBlogPostMetaInput>
  }

  export type BlogPostUpsertWithWhereUniqueWithoutBlogPostMetaInput = {
    where: BlogPostWhereUniqueInput
    update: XOR<BlogPostUpdateWithoutBlogPostMetaInput, BlogPostUncheckedUpdateWithoutBlogPostMetaInput>
    create: XOR<BlogPostCreateWithoutBlogPostMetaInput, BlogPostUncheckedCreateWithoutBlogPostMetaInput>
  }

  export type BlogPostUpdateWithWhereUniqueWithoutBlogPostMetaInput = {
    where: BlogPostWhereUniqueInput
    data: XOR<BlogPostUpdateWithoutBlogPostMetaInput, BlogPostUncheckedUpdateWithoutBlogPostMetaInput>
  }

  export type BlogPostUpdateManyWithWhereWithoutBlogPostMetaInput = {
    where: BlogPostScalarWhereInput
    data: XOR<BlogPostUpdateManyMutationInput, BlogPostUncheckedUpdateManyWithoutBlogPostMetaInput>
  }

  export type BlogPostMetaCreateWithoutExtraFileInput = {
    postHash: string
    postDelete?: boolean
    postViewCount?: number
    postLikeCount?: number
    postMainImageUrl?: string | null
    user: UserCreateNestedOneWithoutBlogPostMetaInput
    blogPostTag?: BlogPostTagCreateNestedManyWithoutBlogPostMetaInput
    blogPost?: BlogPostCreateNestedManyWithoutBlogPostMetaInput
  }

  export type BlogPostMetaUncheckedCreateWithoutExtraFileInput = {
    postHash: string
    userId: string
    postDelete?: boolean
    postViewCount?: number
    postLikeCount?: number
    postMainImageUrl?: string | null
    blogPostTag?: BlogPostTagUncheckedCreateNestedManyWithoutBlogPostMetaInput
    blogPost?: BlogPostUncheckedCreateNestedManyWithoutBlogPostMetaInput
  }

  export type BlogPostMetaCreateOrConnectWithoutExtraFileInput = {
    where: BlogPostMetaWhereUniqueInput
    create: XOR<BlogPostMetaCreateWithoutExtraFileInput, BlogPostMetaUncheckedCreateWithoutExtraFileInput>
  }

  export type UserCreateWithoutBlogExtraFileInput = {
    userId: string
    userName: string
    userPassword: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tag?: TagCreateNestedManyWithoutUserInput
    blogCategory?: BlogCategoryCreateNestedManyWithoutUserInput
    blogPostMeta?: BlogPostMetaCreateNestedManyWithoutUserInput
    blogPostTag?: BlogPostTagCreateNestedManyWithoutUserInput
    blogPost?: BlogPostCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBlogExtraFileInput = {
    userId: string
    userName: string
    userPassword: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tag?: TagUncheckedCreateNestedManyWithoutUserInput
    blogCategory?: BlogCategoryUncheckedCreateNestedManyWithoutUserInput
    blogPostMeta?: BlogPostMetaUncheckedCreateNestedManyWithoutUserInput
    blogPostTag?: BlogPostTagUncheckedCreateNestedManyWithoutUserInput
    blogPost?: BlogPostUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBlogExtraFileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBlogExtraFileInput, UserUncheckedCreateWithoutBlogExtraFileInput>
  }

  export type BlogPostMetaUpsertWithoutExtraFileInput = {
    update: XOR<BlogPostMetaUpdateWithoutExtraFileInput, BlogPostMetaUncheckedUpdateWithoutExtraFileInput>
    create: XOR<BlogPostMetaCreateWithoutExtraFileInput, BlogPostMetaUncheckedCreateWithoutExtraFileInput>
    where?: BlogPostMetaWhereInput
  }

  export type BlogPostMetaUpdateToOneWithWhereWithoutExtraFileInput = {
    where?: BlogPostMetaWhereInput
    data: XOR<BlogPostMetaUpdateWithoutExtraFileInput, BlogPostMetaUncheckedUpdateWithoutExtraFileInput>
  }

  export type BlogPostMetaUpdateWithoutExtraFileInput = {
    postHash?: StringFieldUpdateOperationsInput | string
    postDelete?: BoolFieldUpdateOperationsInput | boolean
    postViewCount?: IntFieldUpdateOperationsInput | number
    postLikeCount?: IntFieldUpdateOperationsInput | number
    postMainImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutBlogPostMetaNestedInput
    blogPostTag?: BlogPostTagUpdateManyWithoutBlogPostMetaNestedInput
    blogPost?: BlogPostUpdateManyWithoutBlogPostMetaNestedInput
  }

  export type BlogPostMetaUncheckedUpdateWithoutExtraFileInput = {
    postHash?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    postDelete?: BoolFieldUpdateOperationsInput | boolean
    postViewCount?: IntFieldUpdateOperationsInput | number
    postLikeCount?: IntFieldUpdateOperationsInput | number
    postMainImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    blogPostTag?: BlogPostTagUncheckedUpdateManyWithoutBlogPostMetaNestedInput
    blogPost?: BlogPostUncheckedUpdateManyWithoutBlogPostMetaNestedInput
  }

  export type UserUpsertWithoutBlogExtraFileInput = {
    update: XOR<UserUpdateWithoutBlogExtraFileInput, UserUncheckedUpdateWithoutBlogExtraFileInput>
    create: XOR<UserCreateWithoutBlogExtraFileInput, UserUncheckedCreateWithoutBlogExtraFileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBlogExtraFileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBlogExtraFileInput, UserUncheckedUpdateWithoutBlogExtraFileInput>
  }

  export type UserUpdateWithoutBlogExtraFileInput = {
    userId?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    userPassword?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tag?: TagUpdateManyWithoutUserNestedInput
    blogCategory?: BlogCategoryUpdateManyWithoutUserNestedInput
    blogPostMeta?: BlogPostMetaUpdateManyWithoutUserNestedInput
    blogPostTag?: BlogPostTagUpdateManyWithoutUserNestedInput
    blogPost?: BlogPostUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBlogExtraFileInput = {
    userId?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    userPassword?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tag?: TagUncheckedUpdateManyWithoutUserNestedInput
    blogCategory?: BlogCategoryUncheckedUpdateManyWithoutUserNestedInput
    blogPostMeta?: BlogPostMetaUncheckedUpdateManyWithoutUserNestedInput
    blogPostTag?: BlogPostTagUncheckedUpdateManyWithoutUserNestedInput
    blogPost?: BlogPostUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TagCreateWithoutBlogPostTagInput = {
    tagName: string
    user: UserCreateNestedOneWithoutTagInput
  }

  export type TagUncheckedCreateWithoutBlogPostTagInput = {
    tagName: string
    userId: string
  }

  export type TagCreateOrConnectWithoutBlogPostTagInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutBlogPostTagInput, TagUncheckedCreateWithoutBlogPostTagInput>
  }

  export type BlogPostMetaCreateWithoutBlogPostTagInput = {
    postHash: string
    postDelete?: boolean
    postViewCount?: number
    postLikeCount?: number
    postMainImageUrl?: string | null
    user: UserCreateNestedOneWithoutBlogPostMetaInput
    extraFile?: BlogExtraFileCreateNestedManyWithoutBlogPostMetaInput
    blogPost?: BlogPostCreateNestedManyWithoutBlogPostMetaInput
  }

  export type BlogPostMetaUncheckedCreateWithoutBlogPostTagInput = {
    postHash: string
    userId: string
    postDelete?: boolean
    postViewCount?: number
    postLikeCount?: number
    postMainImageUrl?: string | null
    extraFile?: BlogExtraFileUncheckedCreateNestedManyWithoutBlogPostMetaInput
    blogPost?: BlogPostUncheckedCreateNestedManyWithoutBlogPostMetaInput
  }

  export type BlogPostMetaCreateOrConnectWithoutBlogPostTagInput = {
    where: BlogPostMetaWhereUniqueInput
    create: XOR<BlogPostMetaCreateWithoutBlogPostTagInput, BlogPostMetaUncheckedCreateWithoutBlogPostTagInput>
  }

  export type UserCreateWithoutBlogPostTagInput = {
    userId: string
    userName: string
    userPassword: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tag?: TagCreateNestedManyWithoutUserInput
    blogCategory?: BlogCategoryCreateNestedManyWithoutUserInput
    blogPostMeta?: BlogPostMetaCreateNestedManyWithoutUserInput
    blogExtraFile?: BlogExtraFileCreateNestedManyWithoutUserInput
    blogPost?: BlogPostCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBlogPostTagInput = {
    userId: string
    userName: string
    userPassword: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tag?: TagUncheckedCreateNestedManyWithoutUserInput
    blogCategory?: BlogCategoryUncheckedCreateNestedManyWithoutUserInput
    blogPostMeta?: BlogPostMetaUncheckedCreateNestedManyWithoutUserInput
    blogExtraFile?: BlogExtraFileUncheckedCreateNestedManyWithoutUserInput
    blogPost?: BlogPostUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBlogPostTagInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBlogPostTagInput, UserUncheckedCreateWithoutBlogPostTagInput>
  }

  export type TagUpsertWithoutBlogPostTagInput = {
    update: XOR<TagUpdateWithoutBlogPostTagInput, TagUncheckedUpdateWithoutBlogPostTagInput>
    create: XOR<TagCreateWithoutBlogPostTagInput, TagUncheckedCreateWithoutBlogPostTagInput>
    where?: TagWhereInput
  }

  export type TagUpdateToOneWithWhereWithoutBlogPostTagInput = {
    where?: TagWhereInput
    data: XOR<TagUpdateWithoutBlogPostTagInput, TagUncheckedUpdateWithoutBlogPostTagInput>
  }

  export type TagUpdateWithoutBlogPostTagInput = {
    tagName?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutTagNestedInput
  }

  export type TagUncheckedUpdateWithoutBlogPostTagInput = {
    tagName?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type BlogPostMetaUpsertWithoutBlogPostTagInput = {
    update: XOR<BlogPostMetaUpdateWithoutBlogPostTagInput, BlogPostMetaUncheckedUpdateWithoutBlogPostTagInput>
    create: XOR<BlogPostMetaCreateWithoutBlogPostTagInput, BlogPostMetaUncheckedCreateWithoutBlogPostTagInput>
    where?: BlogPostMetaWhereInput
  }

  export type BlogPostMetaUpdateToOneWithWhereWithoutBlogPostTagInput = {
    where?: BlogPostMetaWhereInput
    data: XOR<BlogPostMetaUpdateWithoutBlogPostTagInput, BlogPostMetaUncheckedUpdateWithoutBlogPostTagInput>
  }

  export type BlogPostMetaUpdateWithoutBlogPostTagInput = {
    postHash?: StringFieldUpdateOperationsInput | string
    postDelete?: BoolFieldUpdateOperationsInput | boolean
    postViewCount?: IntFieldUpdateOperationsInput | number
    postLikeCount?: IntFieldUpdateOperationsInput | number
    postMainImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutBlogPostMetaNestedInput
    extraFile?: BlogExtraFileUpdateManyWithoutBlogPostMetaNestedInput
    blogPost?: BlogPostUpdateManyWithoutBlogPostMetaNestedInput
  }

  export type BlogPostMetaUncheckedUpdateWithoutBlogPostTagInput = {
    postHash?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    postDelete?: BoolFieldUpdateOperationsInput | boolean
    postViewCount?: IntFieldUpdateOperationsInput | number
    postLikeCount?: IntFieldUpdateOperationsInput | number
    postMainImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    extraFile?: BlogExtraFileUncheckedUpdateManyWithoutBlogPostMetaNestedInput
    blogPost?: BlogPostUncheckedUpdateManyWithoutBlogPostMetaNestedInput
  }

  export type UserUpsertWithoutBlogPostTagInput = {
    update: XOR<UserUpdateWithoutBlogPostTagInput, UserUncheckedUpdateWithoutBlogPostTagInput>
    create: XOR<UserCreateWithoutBlogPostTagInput, UserUncheckedCreateWithoutBlogPostTagInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBlogPostTagInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBlogPostTagInput, UserUncheckedUpdateWithoutBlogPostTagInput>
  }

  export type UserUpdateWithoutBlogPostTagInput = {
    userId?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    userPassword?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tag?: TagUpdateManyWithoutUserNestedInput
    blogCategory?: BlogCategoryUpdateManyWithoutUserNestedInput
    blogPostMeta?: BlogPostMetaUpdateManyWithoutUserNestedInput
    blogExtraFile?: BlogExtraFileUpdateManyWithoutUserNestedInput
    blogPost?: BlogPostUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBlogPostTagInput = {
    userId?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    userPassword?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tag?: TagUncheckedUpdateManyWithoutUserNestedInput
    blogCategory?: BlogCategoryUncheckedUpdateManyWithoutUserNestedInput
    blogPostMeta?: BlogPostMetaUncheckedUpdateManyWithoutUserNestedInput
    blogExtraFile?: BlogExtraFileUncheckedUpdateManyWithoutUserNestedInput
    blogPost?: BlogPostUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutBlogPostInput = {
    userId: string
    userName: string
    userPassword: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tag?: TagCreateNestedManyWithoutUserInput
    blogCategory?: BlogCategoryCreateNestedManyWithoutUserInput
    blogPostMeta?: BlogPostMetaCreateNestedManyWithoutUserInput
    blogPostTag?: BlogPostTagCreateNestedManyWithoutUserInput
    blogExtraFile?: BlogExtraFileCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBlogPostInput = {
    userId: string
    userName: string
    userPassword: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tag?: TagUncheckedCreateNestedManyWithoutUserInput
    blogCategory?: BlogCategoryUncheckedCreateNestedManyWithoutUserInput
    blogPostMeta?: BlogPostMetaUncheckedCreateNestedManyWithoutUserInput
    blogPostTag?: BlogPostTagUncheckedCreateNestedManyWithoutUserInput
    blogExtraFile?: BlogExtraFileUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBlogPostInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBlogPostInput, UserUncheckedCreateWithoutBlogPostInput>
  }

  export type BlogPostMetaCreateWithoutBlogPostInput = {
    postHash: string
    postDelete?: boolean
    postViewCount?: number
    postLikeCount?: number
    postMainImageUrl?: string | null
    user: UserCreateNestedOneWithoutBlogPostMetaInput
    extraFile?: BlogExtraFileCreateNestedManyWithoutBlogPostMetaInput
    blogPostTag?: BlogPostTagCreateNestedManyWithoutBlogPostMetaInput
  }

  export type BlogPostMetaUncheckedCreateWithoutBlogPostInput = {
    postHash: string
    userId: string
    postDelete?: boolean
    postViewCount?: number
    postLikeCount?: number
    postMainImageUrl?: string | null
    extraFile?: BlogExtraFileUncheckedCreateNestedManyWithoutBlogPostMetaInput
    blogPostTag?: BlogPostTagUncheckedCreateNestedManyWithoutBlogPostMetaInput
  }

  export type BlogPostMetaCreateOrConnectWithoutBlogPostInput = {
    where: BlogPostMetaWhereUniqueInput
    create: XOR<BlogPostMetaCreateWithoutBlogPostInput, BlogPostMetaUncheckedCreateWithoutBlogPostInput>
  }

  export type BlogPostPublishCreateWithoutBlogPostInput = {
    postVisibility?: boolean
    blogCategory: BlogCategoryCreateNestedOneWithoutBlogPostPublishInput
  }

  export type BlogPostPublishUncheckedCreateWithoutBlogPostInput = {
    categoryName: string
    postVisibility?: boolean
  }

  export type BlogPostPublishCreateOrConnectWithoutBlogPostInput = {
    where: BlogPostPublishWhereUniqueInput
    create: XOR<BlogPostPublishCreateWithoutBlogPostInput, BlogPostPublishUncheckedCreateWithoutBlogPostInput>
  }

  export type UserUpsertWithoutBlogPostInput = {
    update: XOR<UserUpdateWithoutBlogPostInput, UserUncheckedUpdateWithoutBlogPostInput>
    create: XOR<UserCreateWithoutBlogPostInput, UserUncheckedCreateWithoutBlogPostInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBlogPostInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBlogPostInput, UserUncheckedUpdateWithoutBlogPostInput>
  }

  export type UserUpdateWithoutBlogPostInput = {
    userId?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    userPassword?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tag?: TagUpdateManyWithoutUserNestedInput
    blogCategory?: BlogCategoryUpdateManyWithoutUserNestedInput
    blogPostMeta?: BlogPostMetaUpdateManyWithoutUserNestedInput
    blogPostTag?: BlogPostTagUpdateManyWithoutUserNestedInput
    blogExtraFile?: BlogExtraFileUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBlogPostInput = {
    userId?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    userPassword?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tag?: TagUncheckedUpdateManyWithoutUserNestedInput
    blogCategory?: BlogCategoryUncheckedUpdateManyWithoutUserNestedInput
    blogPostMeta?: BlogPostMetaUncheckedUpdateManyWithoutUserNestedInput
    blogPostTag?: BlogPostTagUncheckedUpdateManyWithoutUserNestedInput
    blogExtraFile?: BlogExtraFileUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BlogPostMetaUpsertWithoutBlogPostInput = {
    update: XOR<BlogPostMetaUpdateWithoutBlogPostInput, BlogPostMetaUncheckedUpdateWithoutBlogPostInput>
    create: XOR<BlogPostMetaCreateWithoutBlogPostInput, BlogPostMetaUncheckedCreateWithoutBlogPostInput>
    where?: BlogPostMetaWhereInput
  }

  export type BlogPostMetaUpdateToOneWithWhereWithoutBlogPostInput = {
    where?: BlogPostMetaWhereInput
    data: XOR<BlogPostMetaUpdateWithoutBlogPostInput, BlogPostMetaUncheckedUpdateWithoutBlogPostInput>
  }

  export type BlogPostMetaUpdateWithoutBlogPostInput = {
    postHash?: StringFieldUpdateOperationsInput | string
    postDelete?: BoolFieldUpdateOperationsInput | boolean
    postViewCount?: IntFieldUpdateOperationsInput | number
    postLikeCount?: IntFieldUpdateOperationsInput | number
    postMainImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutBlogPostMetaNestedInput
    extraFile?: BlogExtraFileUpdateManyWithoutBlogPostMetaNestedInput
    blogPostTag?: BlogPostTagUpdateManyWithoutBlogPostMetaNestedInput
  }

  export type BlogPostMetaUncheckedUpdateWithoutBlogPostInput = {
    postHash?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    postDelete?: BoolFieldUpdateOperationsInput | boolean
    postViewCount?: IntFieldUpdateOperationsInput | number
    postLikeCount?: IntFieldUpdateOperationsInput | number
    postMainImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    extraFile?: BlogExtraFileUncheckedUpdateManyWithoutBlogPostMetaNestedInput
    blogPostTag?: BlogPostTagUncheckedUpdateManyWithoutBlogPostMetaNestedInput
  }

  export type BlogPostPublishUpsertWithoutBlogPostInput = {
    update: XOR<BlogPostPublishUpdateWithoutBlogPostInput, BlogPostPublishUncheckedUpdateWithoutBlogPostInput>
    create: XOR<BlogPostPublishCreateWithoutBlogPostInput, BlogPostPublishUncheckedCreateWithoutBlogPostInput>
    where?: BlogPostPublishWhereInput
  }

  export type BlogPostPublishUpdateToOneWithWhereWithoutBlogPostInput = {
    where?: BlogPostPublishWhereInput
    data: XOR<BlogPostPublishUpdateWithoutBlogPostInput, BlogPostPublishUncheckedUpdateWithoutBlogPostInput>
  }

  export type BlogPostPublishUpdateWithoutBlogPostInput = {
    postVisibility?: BoolFieldUpdateOperationsInput | boolean
    blogCategory?: BlogCategoryUpdateOneRequiredWithoutBlogPostPublishNestedInput
  }

  export type BlogPostPublishUncheckedUpdateWithoutBlogPostInput = {
    categoryName?: StringFieldUpdateOperationsInput | string
    postVisibility?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BlogPostCreateWithoutBlogPostPublishInput = {
    revisionHash: string
    postTitle: string
    postContent: string
    postDraft?: boolean
    postCreatedAt?: Date | string
    postUpdatedAt?: Date | string
    postPublished?: Date | string | null
    postReadTimeSeconds?: number
    user: UserCreateNestedOneWithoutBlogPostInput
    blogPostMeta: BlogPostMetaCreateNestedOneWithoutBlogPostInput
  }

  export type BlogPostUncheckedCreateWithoutBlogPostPublishInput = {
    revisionHash: string
    postHash: string
    userId: string
    postTitle: string
    postContent: string
    postDraft?: boolean
    postCreatedAt?: Date | string
    postUpdatedAt?: Date | string
    postPublished?: Date | string | null
    postReadTimeSeconds?: number
  }

  export type BlogPostCreateOrConnectWithoutBlogPostPublishInput = {
    where: BlogPostWhereUniqueInput
    create: XOR<BlogPostCreateWithoutBlogPostPublishInput, BlogPostUncheckedCreateWithoutBlogPostPublishInput>
  }

  export type BlogCategoryCreateWithoutBlogPostPublishInput = {
    categoryName: string
    privateCount?: bigint | number
    publicCount?: bigint | number
    categoryDepth?: number
    user: UserCreateNestedOneWithoutBlogCategoryInput
    upperCategory?: BlogCategoryCreateNestedOneWithoutLowerCategoriesInput
    lowerCategories?: BlogCategoryCreateNestedManyWithoutUpperCategoryInput
  }

  export type BlogCategoryUncheckedCreateWithoutBlogPostPublishInput = {
    categoryName: string
    userId: string
    privateCount?: bigint | number
    publicCount?: bigint | number
    categoryDepth?: number
    upperCategoryName?: string | null
    lowerCategories?: BlogCategoryUncheckedCreateNestedManyWithoutUpperCategoryInput
  }

  export type BlogCategoryCreateOrConnectWithoutBlogPostPublishInput = {
    where: BlogCategoryWhereUniqueInput
    create: XOR<BlogCategoryCreateWithoutBlogPostPublishInput, BlogCategoryUncheckedCreateWithoutBlogPostPublishInput>
  }

  export type BlogPostUpsertWithoutBlogPostPublishInput = {
    update: XOR<BlogPostUpdateWithoutBlogPostPublishInput, BlogPostUncheckedUpdateWithoutBlogPostPublishInput>
    create: XOR<BlogPostCreateWithoutBlogPostPublishInput, BlogPostUncheckedCreateWithoutBlogPostPublishInput>
    where?: BlogPostWhereInput
  }

  export type BlogPostUpdateToOneWithWhereWithoutBlogPostPublishInput = {
    where?: BlogPostWhereInput
    data: XOR<BlogPostUpdateWithoutBlogPostPublishInput, BlogPostUncheckedUpdateWithoutBlogPostPublishInput>
  }

  export type BlogPostUpdateWithoutBlogPostPublishInput = {
    revisionHash?: StringFieldUpdateOperationsInput | string
    postTitle?: StringFieldUpdateOperationsInput | string
    postContent?: StringFieldUpdateOperationsInput | string
    postDraft?: BoolFieldUpdateOperationsInput | boolean
    postCreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postPublished?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    postReadTimeSeconds?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutBlogPostNestedInput
    blogPostMeta?: BlogPostMetaUpdateOneRequiredWithoutBlogPostNestedInput
  }

  export type BlogPostUncheckedUpdateWithoutBlogPostPublishInput = {
    revisionHash?: StringFieldUpdateOperationsInput | string
    postHash?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    postTitle?: StringFieldUpdateOperationsInput | string
    postContent?: StringFieldUpdateOperationsInput | string
    postDraft?: BoolFieldUpdateOperationsInput | boolean
    postCreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postPublished?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    postReadTimeSeconds?: IntFieldUpdateOperationsInput | number
  }

  export type BlogCategoryUpsertWithoutBlogPostPublishInput = {
    update: XOR<BlogCategoryUpdateWithoutBlogPostPublishInput, BlogCategoryUncheckedUpdateWithoutBlogPostPublishInput>
    create: XOR<BlogCategoryCreateWithoutBlogPostPublishInput, BlogCategoryUncheckedCreateWithoutBlogPostPublishInput>
    where?: BlogCategoryWhereInput
  }

  export type BlogCategoryUpdateToOneWithWhereWithoutBlogPostPublishInput = {
    where?: BlogCategoryWhereInput
    data: XOR<BlogCategoryUpdateWithoutBlogPostPublishInput, BlogCategoryUncheckedUpdateWithoutBlogPostPublishInput>
  }

  export type BlogCategoryUpdateWithoutBlogPostPublishInput = {
    categoryName?: StringFieldUpdateOperationsInput | string
    privateCount?: BigIntFieldUpdateOperationsInput | bigint | number
    publicCount?: BigIntFieldUpdateOperationsInput | bigint | number
    categoryDepth?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutBlogCategoryNestedInput
    upperCategory?: BlogCategoryUpdateOneWithoutLowerCategoriesNestedInput
    lowerCategories?: BlogCategoryUpdateManyWithoutUpperCategoryNestedInput
  }

  export type BlogCategoryUncheckedUpdateWithoutBlogPostPublishInput = {
    categoryName?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    privateCount?: BigIntFieldUpdateOperationsInput | bigint | number
    publicCount?: BigIntFieldUpdateOperationsInput | bigint | number
    categoryDepth?: IntFieldUpdateOperationsInput | number
    upperCategoryName?: NullableStringFieldUpdateOperationsInput | string | null
    lowerCategories?: BlogCategoryUncheckedUpdateManyWithoutUpperCategoryNestedInput
  }

  export type TagCreateManyUserInput = {
    tagName: string
  }

  export type BlogCategoryCreateManyUserInput = {
    categoryName: string
    privateCount?: bigint | number
    publicCount?: bigint | number
    categoryDepth?: number
    upperCategoryName?: string | null
  }

  export type BlogPostMetaCreateManyUserInput = {
    postHash: string
    postDelete?: boolean
    postViewCount?: number
    postLikeCount?: number
    postMainImageUrl?: string | null
  }

  export type BlogPostTagCreateManyUserInput = {
    tagName: string
    postHash: string
  }

  export type BlogExtraFileCreateManyUserInput = {
    extraFileId?: number
    postHash: string
    extraFileUrl: string
    extraFileAlt: string
  }

  export type BlogPostCreateManyUserInput = {
    revisionHash: string
    postHash: string
    postTitle: string
    postContent: string
    postDraft?: boolean
    postCreatedAt?: Date | string
    postUpdatedAt?: Date | string
    postPublished?: Date | string | null
    postReadTimeSeconds?: number
  }

  export type TagUpdateWithoutUserInput = {
    tagName?: StringFieldUpdateOperationsInput | string
    blogPostTag?: BlogPostTagUpdateManyWithoutTagNestedInput
  }

  export type TagUncheckedUpdateWithoutUserInput = {
    tagName?: StringFieldUpdateOperationsInput | string
    blogPostTag?: BlogPostTagUncheckedUpdateManyWithoutTagNestedInput
  }

  export type TagUncheckedUpdateManyWithoutUserInput = {
    tagName?: StringFieldUpdateOperationsInput | string
  }

  export type BlogCategoryUpdateWithoutUserInput = {
    categoryName?: StringFieldUpdateOperationsInput | string
    privateCount?: BigIntFieldUpdateOperationsInput | bigint | number
    publicCount?: BigIntFieldUpdateOperationsInput | bigint | number
    categoryDepth?: IntFieldUpdateOperationsInput | number
    upperCategory?: BlogCategoryUpdateOneWithoutLowerCategoriesNestedInput
    lowerCategories?: BlogCategoryUpdateManyWithoutUpperCategoryNestedInput
    blogPostPublish?: BlogPostPublishUpdateManyWithoutBlogCategoryNestedInput
  }

  export type BlogCategoryUncheckedUpdateWithoutUserInput = {
    categoryName?: StringFieldUpdateOperationsInput | string
    privateCount?: BigIntFieldUpdateOperationsInput | bigint | number
    publicCount?: BigIntFieldUpdateOperationsInput | bigint | number
    categoryDepth?: IntFieldUpdateOperationsInput | number
    upperCategoryName?: NullableStringFieldUpdateOperationsInput | string | null
    lowerCategories?: BlogCategoryUncheckedUpdateManyWithoutUpperCategoryNestedInput
    blogPostPublish?: BlogPostPublishUncheckedUpdateManyWithoutBlogCategoryNestedInput
  }

  export type BlogCategoryUncheckedUpdateManyWithoutUserInput = {
    categoryName?: StringFieldUpdateOperationsInput | string
    privateCount?: BigIntFieldUpdateOperationsInput | bigint | number
    publicCount?: BigIntFieldUpdateOperationsInput | bigint | number
    categoryDepth?: IntFieldUpdateOperationsInput | number
    upperCategoryName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BlogPostMetaUpdateWithoutUserInput = {
    postHash?: StringFieldUpdateOperationsInput | string
    postDelete?: BoolFieldUpdateOperationsInput | boolean
    postViewCount?: IntFieldUpdateOperationsInput | number
    postLikeCount?: IntFieldUpdateOperationsInput | number
    postMainImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    extraFile?: BlogExtraFileUpdateManyWithoutBlogPostMetaNestedInput
    blogPostTag?: BlogPostTagUpdateManyWithoutBlogPostMetaNestedInput
    blogPost?: BlogPostUpdateManyWithoutBlogPostMetaNestedInput
  }

  export type BlogPostMetaUncheckedUpdateWithoutUserInput = {
    postHash?: StringFieldUpdateOperationsInput | string
    postDelete?: BoolFieldUpdateOperationsInput | boolean
    postViewCount?: IntFieldUpdateOperationsInput | number
    postLikeCount?: IntFieldUpdateOperationsInput | number
    postMainImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    extraFile?: BlogExtraFileUncheckedUpdateManyWithoutBlogPostMetaNestedInput
    blogPostTag?: BlogPostTagUncheckedUpdateManyWithoutBlogPostMetaNestedInput
    blogPost?: BlogPostUncheckedUpdateManyWithoutBlogPostMetaNestedInput
  }

  export type BlogPostMetaUncheckedUpdateManyWithoutUserInput = {
    postHash?: StringFieldUpdateOperationsInput | string
    postDelete?: BoolFieldUpdateOperationsInput | boolean
    postViewCount?: IntFieldUpdateOperationsInput | number
    postLikeCount?: IntFieldUpdateOperationsInput | number
    postMainImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BlogPostTagUpdateWithoutUserInput = {
    tag?: TagUpdateOneRequiredWithoutBlogPostTagNestedInput
    blogPostMeta?: BlogPostMetaUpdateOneRequiredWithoutBlogPostTagNestedInput
  }

  export type BlogPostTagUncheckedUpdateWithoutUserInput = {
    tagName?: StringFieldUpdateOperationsInput | string
    postHash?: StringFieldUpdateOperationsInput | string
  }

  export type BlogPostTagUncheckedUpdateManyWithoutUserInput = {
    tagName?: StringFieldUpdateOperationsInput | string
    postHash?: StringFieldUpdateOperationsInput | string
  }

  export type BlogExtraFileUpdateWithoutUserInput = {
    extraFileUrl?: StringFieldUpdateOperationsInput | string
    extraFileAlt?: StringFieldUpdateOperationsInput | string
    blogPostMeta?: BlogPostMetaUpdateOneRequiredWithoutExtraFileNestedInput
  }

  export type BlogExtraFileUncheckedUpdateWithoutUserInput = {
    extraFileId?: IntFieldUpdateOperationsInput | number
    postHash?: StringFieldUpdateOperationsInput | string
    extraFileUrl?: StringFieldUpdateOperationsInput | string
    extraFileAlt?: StringFieldUpdateOperationsInput | string
  }

  export type BlogExtraFileUncheckedUpdateManyWithoutUserInput = {
    extraFileId?: IntFieldUpdateOperationsInput | number
    postHash?: StringFieldUpdateOperationsInput | string
    extraFileUrl?: StringFieldUpdateOperationsInput | string
    extraFileAlt?: StringFieldUpdateOperationsInput | string
  }

  export type BlogPostUpdateWithoutUserInput = {
    revisionHash?: StringFieldUpdateOperationsInput | string
    postTitle?: StringFieldUpdateOperationsInput | string
    postContent?: StringFieldUpdateOperationsInput | string
    postDraft?: BoolFieldUpdateOperationsInput | boolean
    postCreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postPublished?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    postReadTimeSeconds?: IntFieldUpdateOperationsInput | number
    blogPostMeta?: BlogPostMetaUpdateOneRequiredWithoutBlogPostNestedInput
    blogPostPublish?: BlogPostPublishUpdateOneWithoutBlogPostNestedInput
  }

  export type BlogPostUncheckedUpdateWithoutUserInput = {
    revisionHash?: StringFieldUpdateOperationsInput | string
    postHash?: StringFieldUpdateOperationsInput | string
    postTitle?: StringFieldUpdateOperationsInput | string
    postContent?: StringFieldUpdateOperationsInput | string
    postDraft?: BoolFieldUpdateOperationsInput | boolean
    postCreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postPublished?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    postReadTimeSeconds?: IntFieldUpdateOperationsInput | number
    blogPostPublish?: BlogPostPublishUncheckedUpdateOneWithoutBlogPostNestedInput
  }

  export type BlogPostUncheckedUpdateManyWithoutUserInput = {
    revisionHash?: StringFieldUpdateOperationsInput | string
    postHash?: StringFieldUpdateOperationsInput | string
    postTitle?: StringFieldUpdateOperationsInput | string
    postContent?: StringFieldUpdateOperationsInput | string
    postDraft?: BoolFieldUpdateOperationsInput | boolean
    postCreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postPublished?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    postReadTimeSeconds?: IntFieldUpdateOperationsInput | number
  }

  export type BlogPostTagCreateManyTagInput = {
    postHash: string
  }

  export type BlogPostTagUpdateWithoutTagInput = {
    blogPostMeta?: BlogPostMetaUpdateOneRequiredWithoutBlogPostTagNestedInput
    user?: UserUpdateOneRequiredWithoutBlogPostTagNestedInput
  }

  export type BlogPostTagUncheckedUpdateWithoutTagInput = {
    postHash?: StringFieldUpdateOperationsInput | string
  }

  export type BlogPostTagUncheckedUpdateManyWithoutTagInput = {
    postHash?: StringFieldUpdateOperationsInput | string
  }

  export type BlogCategoryCreateManyUpperCategoryInput = {
    categoryName: string
    userId: string
    privateCount?: bigint | number
    publicCount?: bigint | number
    categoryDepth?: number
  }

  export type BlogPostPublishCreateManyBlogCategoryInput = {
    revisionHash: string
    userId: string
    postHash: string
    postVisibility?: boolean
  }

  export type BlogCategoryUpdateWithoutUpperCategoryInput = {
    categoryName?: StringFieldUpdateOperationsInput | string
    privateCount?: BigIntFieldUpdateOperationsInput | bigint | number
    publicCount?: BigIntFieldUpdateOperationsInput | bigint | number
    categoryDepth?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutBlogCategoryNestedInput
    lowerCategories?: BlogCategoryUpdateManyWithoutUpperCategoryNestedInput
    blogPostPublish?: BlogPostPublishUpdateManyWithoutBlogCategoryNestedInput
  }

  export type BlogCategoryUncheckedUpdateWithoutUpperCategoryInput = {
    categoryName?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    privateCount?: BigIntFieldUpdateOperationsInput | bigint | number
    publicCount?: BigIntFieldUpdateOperationsInput | bigint | number
    categoryDepth?: IntFieldUpdateOperationsInput | number
    lowerCategories?: BlogCategoryUncheckedUpdateManyWithoutUpperCategoryNestedInput
    blogPostPublish?: BlogPostPublishUncheckedUpdateManyWithoutBlogCategoryNestedInput
  }

  export type BlogCategoryUncheckedUpdateManyWithoutUpperCategoryInput = {
    categoryName?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    privateCount?: BigIntFieldUpdateOperationsInput | bigint | number
    publicCount?: BigIntFieldUpdateOperationsInput | bigint | number
    categoryDepth?: IntFieldUpdateOperationsInput | number
  }

  export type BlogPostPublishUpdateWithoutBlogCategoryInput = {
    postVisibility?: BoolFieldUpdateOperationsInput | boolean
    blogPost?: BlogPostUpdateOneRequiredWithoutBlogPostPublishNestedInput
  }

  export type BlogPostPublishUncheckedUpdateWithoutBlogCategoryInput = {
    revisionHash?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    postHash?: StringFieldUpdateOperationsInput | string
    postVisibility?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BlogPostPublishUncheckedUpdateManyWithoutBlogCategoryInput = {
    revisionHash?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    postHash?: StringFieldUpdateOperationsInput | string
    postVisibility?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BlogExtraFileCreateManyBlogPostMetaInput = {
    extraFileId?: number
    userId: string
    extraFileUrl: string
    extraFileAlt: string
  }

  export type BlogPostTagCreateManyBlogPostMetaInput = {
    tagName: string
    userId: string
  }

  export type BlogPostCreateManyBlogPostMetaInput = {
    revisionHash: string
    userId: string
    postTitle: string
    postContent: string
    postDraft?: boolean
    postCreatedAt?: Date | string
    postUpdatedAt?: Date | string
    postPublished?: Date | string | null
    postReadTimeSeconds?: number
  }

  export type BlogExtraFileUpdateWithoutBlogPostMetaInput = {
    extraFileUrl?: StringFieldUpdateOperationsInput | string
    extraFileAlt?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutBlogExtraFileNestedInput
  }

  export type BlogExtraFileUncheckedUpdateWithoutBlogPostMetaInput = {
    extraFileId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    extraFileUrl?: StringFieldUpdateOperationsInput | string
    extraFileAlt?: StringFieldUpdateOperationsInput | string
  }

  export type BlogExtraFileUncheckedUpdateManyWithoutBlogPostMetaInput = {
    extraFileId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    extraFileUrl?: StringFieldUpdateOperationsInput | string
    extraFileAlt?: StringFieldUpdateOperationsInput | string
  }

  export type BlogPostTagUpdateWithoutBlogPostMetaInput = {
    tag?: TagUpdateOneRequiredWithoutBlogPostTagNestedInput
    user?: UserUpdateOneRequiredWithoutBlogPostTagNestedInput
  }

  export type BlogPostTagUncheckedUpdateWithoutBlogPostMetaInput = {
    tagName?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type BlogPostTagUncheckedUpdateManyWithoutBlogPostMetaInput = {
    tagName?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type BlogPostUpdateWithoutBlogPostMetaInput = {
    revisionHash?: StringFieldUpdateOperationsInput | string
    postTitle?: StringFieldUpdateOperationsInput | string
    postContent?: StringFieldUpdateOperationsInput | string
    postDraft?: BoolFieldUpdateOperationsInput | boolean
    postCreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postPublished?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    postReadTimeSeconds?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutBlogPostNestedInput
    blogPostPublish?: BlogPostPublishUpdateOneWithoutBlogPostNestedInput
  }

  export type BlogPostUncheckedUpdateWithoutBlogPostMetaInput = {
    revisionHash?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    postTitle?: StringFieldUpdateOperationsInput | string
    postContent?: StringFieldUpdateOperationsInput | string
    postDraft?: BoolFieldUpdateOperationsInput | boolean
    postCreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postPublished?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    postReadTimeSeconds?: IntFieldUpdateOperationsInput | number
    blogPostPublish?: BlogPostPublishUncheckedUpdateOneWithoutBlogPostNestedInput
  }

  export type BlogPostUncheckedUpdateManyWithoutBlogPostMetaInput = {
    revisionHash?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    postTitle?: StringFieldUpdateOperationsInput | string
    postContent?: StringFieldUpdateOperationsInput | string
    postDraft?: BoolFieldUpdateOperationsInput | boolean
    postCreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postPublished?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    postReadTimeSeconds?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}