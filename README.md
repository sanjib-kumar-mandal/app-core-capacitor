# app-core

app native functionalities

## Install

```bash
npm install app-core
npx cap sync
```

## API

<docgen-index>

* [`getAppInfo()`](#getappinfo)
* [`device()`](#device)
* [`getDeviceCurrentTheme()`](#getdevicecurrenttheme)
* [`copyText(...)`](#copytext)
* [`pasteText()`](#pastetext)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### getAppInfo()

```typescript
getAppInfo() => Promise<AppInfo>
```

**Returns:** <code>Promise&lt;<a href="#appinfo">AppInfo</a>&gt;</code>

--------------------


### device()

```typescript
device() => Promise<DeviceResult>
```

**Returns:** <code>Promise&lt;<a href="#deviceresult">DeviceResult</a>&gt;</code>

--------------------


### getDeviceCurrentTheme()

```typescript
getDeviceCurrentTheme() => Promise<any>
```

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### copyText(...)

```typescript
copyText(inputData: { text: string; }) => Promise<void>
```

| Param           | Type                           |
| --------------- | ------------------------------ |
| **`inputData`** | <code>{ text: string; }</code> |

--------------------


### pasteText()

```typescript
pasteText() => Promise<void>
```

--------------------


### Interfaces


#### AppInfo

| Prop                 | Type             |
| -------------------- | ---------------- |
| **`versionName`**    | <code>any</code> |
| **`versionCode`**    | <code>any</code> |
| **`packageName`**    | <code>any</code> |
| **`lastUpdateTime`** | <code>any</code> |
| **`appInfo`**        | <code>any</code> |


#### DeviceResult

| Prop               | Type                 |
| ------------------ | -------------------- |
| **`uuid`**         | <code>any</code>     |
| **`model`**        | <code>string</code>  |
| **`productName`**  | <code>string</code>  |
| **`manufacturer`** | <code>any</code>     |
| **`serial`**       | <code>any</code>     |
| **`osVersion`**    | <code>any</code>     |
| **`timeZone`**     | <code>any</code>     |
| **`isVirtual`**    | <code>boolean</code> |

</docgen-api>
