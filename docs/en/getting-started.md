# Quick Start

HyperCopy is a universal **Copy-to-Open** enhancement module for Android. It supports both root and non-root methods, features a built-in cloud rules repository, and integrates with Xiaomi Super Island (HyperOS 3) for real-time notification display.

:::: warning Prerequisites

Choose your method:

**1. Root Method**
- Device must have **Root** access
- **LSPosed** framework installed

**2. Non-Root Method**
- **Shizuku** installed and granted permission

::::

::: tip Resources & Discussion
- GitHub: <https://github.com/1812z/HyperCopy>
- Rules Repository: <https://github.com/1812z/HyperCopy_Rules>
- QQ Group: **1045114341**

:::

## Step 1: Install HyperCopy

1. Download the latest APK from [GitHub Releases](https://github.com/1812z/HyperCopy/releases)
2. Install the APK on your device

## Step 2: Activate the Module

**1. Root Method**

1. Open **LSPosed** Manager, go to the "Modules" list
2. Find **HyperCopy** and enable it
3. Save and restart your phone to apply the Hook

**2. Non-Root Method**

1. Open **Shizuku** and ensure the service is running
2. Open **HyperCopy** and grant Shizuku permission in settings
3. Follow the in-app prompts to complete module activation
:::

## Step 3: Configure Cloud Rules

HyperCopy has a built-in cloud rules repository with one-click download and import.

1. Open the **HyperCopy** app and go to the **Rules** page
2. Tap **Download Cloud Rules** — the app will automatically fetch the latest rules from the [HyperCopy_Rules](https://github.com/1812z/HyperCopy_Rules) repository
3. Enable the switches for the rules you need

::: tip Rule Types
- **Link** (`link`): Automatically parses and opens links in the corresponding app after copying. For example, copy a Douyin share link and open it directly in Douyin.
- **Text** (`text`): Automatically recognizes and redirects text/passwords after copying. For example, copy an Amap address and open navigation directly.
:::

::: info Custom Rules
You can also write your own rules in JSON format following the rules repository structure and submit a PR. Rule naming format: `rule_name_package_name.json`.
:::
