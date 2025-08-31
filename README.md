# 🚖 Drivio - Ride Hailing App

![React Native](https://img.shields.io/badge/React%20Native-0.72-blue)
![Clerk](https://img.shields.io/badge/Auth-Clerk-green)
![Stripe](https://img.shields.io/badge/Stripe-Payments-blueviolet)
![Neon](https://img.shields.io/badge/Database-Neon%20Postgres-brightgreen)
![License](https://img.shields.io/badge/License-MIT-green)

Drivio is a modern **React Native** ride-hailing app for booking rides, real-time tracking, and secure payments.  
It offers **seamless onboarding, role-based authentication using Clerk, a Neon-powered database, Google Maps integration, and Stripe for payments**.

---

## 🚀 Features

- ✅ **Onboarding Flow** – Smooth registration and setup.
- ✅ **Authentication with Clerk** – Email/Password + Social Logins (Google OAuth).
- ✅ **Role-based Authorization** – Secure driver and rider access.
- ✅ **Home Screen with Live Location** using Google Maps.
- ✅ **Google Places Autocomplete** for smart location search.
- ✅ **Find Rides** – Enter "From" & "To" locations.
- ✅ **Select Nearby Cars on Map**.
- ✅ **Confirm Ride** – Fare details, driver info, and ETA.
- ✅ **Stripe Payments** – Pay securely with cards.
- ✅ **Neon DB Integration** – Store user data, rides, and transactions.
- ✅ **Ride History & Profile Management**.

---

## 🛠 Tech Stack

- **Frontend**: [React Native](https://reactnative.dev/)
- **Authentication**: [Clerk](https://clerk.dev/) for user auth & sessions
- **Database**: [Neon](https://neon.tech/) (Postgres serverless database)
- **Backend API**: Node.js + Express (or Next.js for serverless API routes)
- **Payments**: [Stripe](https://stripe.com/)
- **Maps & Location**: Google Maps SDK + Google Places API
- **Push Notifications**: Firebase Cloud Messaging (optional)

---

## 📸 Screenshots

![Onboarding](assets/screenshots/onboarding.png)
![Home Screen](assets/screenshots/home.png)

---

```
Drivio
├─ .bundle
│  └─ config
├─ .env
├─ .eslintrc.js
├─ .prettierrc.js
├─ .watchmanconfig
├─ App.js
├─ Gemfile
├─ Gemfile.lock
├─ README.md
├─ __tests__
│  └─ App.test.tsx
├─ android
│  ├─ app
│  │  ├─ google-services.json
│  │  ├─ proguard-rules.pro
│  │  ├─ release-key.jks
│  │  └─ src
│  │     ├─ debug
│  │     │  └─ AndroidManifest.xml
│  │     └─ main
│  │        ├─ AndroidManifest.xml
│  │        ├─ java
│  │        │  └─ com
│  │        │     └─ drivio
│  │        │        ├─ MainActivity.kt
│  │        │        └─ MainApplication.kt
│  │        └─ res
│  │           ├─ drawable
│  │           │  └─ rn_edit_text_material.xml
│  │           ├─ mipmap-hdpi
│  │           │  ├─ ic_launcher.png
│  │           │  └─ ic_launcher_round.png
│  │           ├─ mipmap-mdpi
│  │           │  ├─ ic_launcher.png
│  │           │  └─ ic_launcher_round.png
│  │           ├─ mipmap-xhdpi
│  │           │  ├─ ic_launcher.png
│  │           │  └─ ic_launcher_round.png
│  │           ├─ mipmap-xxhdpi
│  │           │  ├─ ic_launcher.png
│  │           │  └─ ic_launcher_round.png
│  │           ├─ mipmap-xxxhdpi
│  │           │  ├─ ic_launcher.png
│  │           │  └─ ic_launcher_round.png
│  │           └─ values
│  │              ├─ strings.xml
│  │              └─ styles.xml
│  ├─ gradle
│  │  └─ wrapper
│  │     ├─ gradle-wrapper.jar
│  │     └─ gradle-wrapper.properties
│  ├─ gradle.properties
│  ├─ gradlew
│  └─ gradlew.bat
├─ app.json
├─ babel.config.js
├─ index.js
├─ ios
│  ├─ .xcode.env
│  ├─ .xcode.env.local
│  ├─ Drivio
│  │  ├─ AppDelegate.swift
│  │  ├─ Images.xcassets
│  │  │  ├─ AppIcon.appiconset
│  │  │  │  └─ Contents.json
│  │  │  └─ Contents.json
│  │  ├─ Info.plist
│  │  ├─ LaunchScreen.storyboard
│  │  └─ PrivacyInfo.xcprivacy
│  ├─ Drivio.xcodeproj
│  │  ├─ project.pbxproj
│  │  └─ xcshareddata
│  │     └─ xcschemes
│  │        └─ Drivio.xcscheme
│  ├─ Podfile
│  └─ Pods
│     ├─ Headers
│     ├─ Local Podspecs
│     │  ├─ DoubleConversion.podspec.json
│     │  ├─ FBLazyVector.podspec.json
│     │  ├─ RCT-Folly.podspec.json
│     │  ├─ RCTDeprecation.podspec.json
│     │  ├─ RCTRequired.podspec.json
│     │  ├─ RCTTypeSafety.podspec.json
│     │  ├─ React-Core.podspec.json
│     │  ├─ React-CoreModules.podspec.json
│     │  ├─ React-Fabric.podspec.json
│     │  ├─ React-FabricComponents.podspec.json
│     │  ├─ React-FabricImage.podspec.json
│     │  ├─ React-ImageManager.podspec.json
│     │  ├─ React-Mapbuffer.podspec.json
│     │  ├─ React-NativeModulesApple.podspec.json
│     │  ├─ React-RCTActionSheet.podspec.json
│     │  ├─ React-RCTAnimation.podspec.json
│     │  ├─ React-RCTAppDelegate.podspec.json
│     │  ├─ React-RCTBlob.podspec.json
│     │  ├─ React-RCTFBReactNativeSpec.podspec.json
│     │  ├─ React-RCTFabric.podspec.json
│     │  ├─ React-RCTImage.podspec.json
│     │  ├─ React-RCTLinking.podspec.json
│     │  ├─ React-RCTNetwork.podspec.json
│     │  ├─ React-RCTRuntime.podspec.json
│     │  ├─ React-RCTSettings.podspec.json
│     │  ├─ React-RCTText.podspec.json
│     │  ├─ React-RCTVibration.podspec.json
│     │  ├─ React-RuntimeApple.podspec.json
│     │  ├─ React-RuntimeCore.podspec.json
│     │  ├─ React-RuntimeHermes.podspec.json
│     │  ├─ React-callinvoker.podspec.json
│     │  ├─ React-cxxreact.podspec.json
│     │  ├─ React-debug.podspec.json
│     │  ├─ React-defaultsnativemodule.podspec.json
│     │  ├─ React-domnativemodule.podspec.json
│     │  ├─ React-featureflags.podspec.json
│     │  ├─ React-featureflagsnativemodule.podspec.json
│     │  ├─ React-graphics.podspec.json
│     │  ├─ React-hermes.podspec.json
│     │  ├─ React-idlecallbacksnativemodule.podspec.json
│     │  ├─ React-jserrorhandler.podspec.json
│     │  ├─ React-jsi.podspec.json
│     │  ├─ React-jsiexecutor.podspec.json
│     │  ├─ React-jsinspector.podspec.json
│     │  ├─ React-jsinspectorcdp.podspec.json
│     │  ├─ React-jsinspectornetwork.podspec.json
│     │  ├─ React-jsinspectortracing.podspec.json
│     │  ├─ React-jsitooling.podspec.json
│     │  ├─ React-jsitracing.podspec.json
│     │  ├─ React-logger.podspec.json
│     │  ├─ React-microtasksnativemodule.podspec.json
│     │  ├─ React-oscompat.podspec.json
│     │  ├─ React-perflogger.podspec.json
│     │  ├─ React-performancetimeline.podspec.json
│     │  ├─ React-rendererconsistency.podspec.json
│     │  ├─ React-renderercss.podspec.json
│     │  ├─ React-rendererdebug.podspec.json
│     │  ├─ React-rncore.podspec.json
│     │  ├─ React-runtimeexecutor.podspec.json
│     │  ├─ React-runtimescheduler.podspec.json
│     │  ├─ React-timing.podspec.json
│     │  ├─ React-utils.podspec.json
│     │  └─ React.podspec.json
│     └─ Target Support Files
├─ jest.config.js
├─ metro.config.js
├─ package-lock.json
├─ package.json
├─ src
│  ├─ assets
│  │  ├─ icons
│  │  └─ images
│  │     ├─ onboarding1.jpeg
│  │     ├─ onboarding2.avif
│  │     ├─ onboarding2.jpg
│  │     ├─ onboarding3.jpg
│  │     └─ woman-sitting-her-new-car_1303-31666.avif
│  ├─ components
│  ├─ context
│  ├─ hooks
│  ├─ navigation
│  │  ├─ AppNavigator.js
│  │  ├─ MainTabNavigator.js
│  │  └─ OnboardingStack.js
│  ├─ screens
│  │  ├─ Auth
│  │  │  ├─ EmainVerificationScreen.js
│  │  │  ├─ ForgotPasswordScreen.js
│  │  │  ├─ LoginScreen.js
│  │  │  └─ RegisterScreen.js
│  │  ├─ Home
│  │  │  ├─ HomeScreen.js
│  │  │  ├─ MapScreen.js
│  │  │  ├─ ProfileScreen.js
│  │  │  └─ RecentRidesScreen.js
│  │  └─ Onboarding
│  │     └─ OnboardingScreen.js
│  ├─ services
│  └─ utils
│     ├─ AuthStorage.js
│     ├─ FirestoreService.js
│     └─ firebase.js
├─ tsconfig.json
└─ vendor
   └─ bundle
      └─ ruby
         └─ 2.6.0
            ├─ bin
            │  ├─ fuzzy_match
            │  ├─ httpclient
            │  ├─ pod
            │  ├─ sandbox-pod
            │  └─ xcodeproj
            ├─ build_info
            ├─ cache
            │  ├─ CFPropertyList-3.0.7.gem
            │  ├─ activesupport-6.1.7.10.gem
            │  ├─ addressable-2.8.7.gem
            │  ├─ algoliasearch-1.27.5.gem
            │  ├─ atomos-0.1.3.gem
            │  ├─ base64-0.3.0.gem
            │  ├─ benchmark-0.4.1.gem
            │  ├─ bigdecimal-3.2.2.gem
            │  ├─ claide-1.1.0.gem
            │  ├─ cocoapods-1.15.2.gem
            │  ├─ cocoapods-core-1.15.2.gem
            │  ├─ cocoapods-deintegrate-1.0.5.gem
            │  ├─ cocoapods-downloader-2.1.gem
            │  ├─ cocoapods-plugins-1.0.0.gem
            │  ├─ cocoapods-search-1.0.1.gem
            │  ├─ cocoapods-trunk-1.6.0.gem
            │  ├─ cocoapods-try-1.2.0.gem
            │  ├─ colored2-3.1.2.gem
            │  ├─ concurrent-ruby-1.3.3.gem
            │  ├─ escape-0.0.4.gem
            │  ├─ ethon-0.16.0.gem
            │  ├─ ffi-1.17.2.gem
            │  ├─ fourflusher-2.3.1.gem
            │  ├─ fuzzy_match-2.0.4.gem
            │  ├─ gh_inspector-1.1.3.gem
            │  ├─ httpclient-2.9.0.gem
            │  ├─ i18n-1.14.7.gem
            │  ├─ json-2.7.6.gem
            │  ├─ logger-1.7.0.gem
            │  ├─ minitest-5.25.4.gem
            │  ├─ molinillo-0.8.0.gem
            │  ├─ mutex_m-0.3.0.gem
            │  ├─ nanaimo-0.3.0.gem
            │  ├─ nap-1.1.0.gem
            │  ├─ netrc-0.11.0.gem
            │  ├─ nkf-0.2.0.gem
            │  ├─ public_suffix-4.0.7.gem
            │  ├─ rexml-3.4.1.gem
            │  ├─ ruby-macho-2.5.1.gem
            │  ├─ typhoeus-1.4.1.gem
            │  ├─ tzinfo-2.0.6.gem
            │  ├─ xcodeproj-1.25.1.gem
            │  └─ zeitwerk-2.6.18.gem
            ├─ doc
            ├─ extensions
            │  └─ universal-darwin-24
            │     └─ 2.6.0
            │        ├─ bigdecimal-3.2.2
            │        │  ├─ bigdecimal.bundle
            │        │  ├─ gem.build_complete
            │        │  ├─ gem_make.out
            │        │  └─ mkmf.log
            │        ├─ ffi-1.17.2
            │        │  ├─ ffi_c.bundle
            │        │  ├─ gem.build_complete
            │        │  ├─ gem_make.out
            │        │  └─ mkmf.log
            │        ├─ json-2.7.6
            │        │  ├─ gem.build_complete
            │        │  ├─ gem_make.out
            │        │  ├─ json
            │        │  │  └─ ext
            │        │  │     ├─ generator.bundle
            │        │  │     └─ parser.bundle
            │        │  └─ mkmf.log
            │        └─ nkf-0.2.0
            │           ├─ gem.build_complete
            │           ├─ gem_make.out
            │           └─ nkf.bundle
            ├─ gems
            │  ├─ CFPropertyList-3.0.7
            │  │  ├─ LICENSE
            │  │  ├─ README.md
            │  │  ├─ README.rdoc
            │  │  ├─ THANKS
            │  │  └─ lib
            │  │     ├─ cfpropertylist
            │  │     │  ├─ rbBinaryCFPropertyList.rb
            │  │     │  ├─ rbCFPlistError.rb
            │  │     │  ├─ rbCFPropertyList.rb
            │  │     │  ├─ rbCFTypes.rb
            │  │     │  ├─ rbLibXMLParser.rb
            │  │     │  ├─ rbNokogiriParser.rb
            │  │     │  ├─ rbPlainCFPropertyList.rb
            │  │     │  └─ rbREXMLParser.rb
            │  │     └─ cfpropertylist.rb
            │  ├─ activesupport-6.1.7.10
            │  │  ├─ CHANGELOG.md
            │  │  ├─ MIT-LICENSE
            │  │  ├─ README.rdoc
            │  │  └─ lib
            │  │     ├─ active_support
            │  │     │  ├─ actionable_error.rb
            │  │     │  ├─ all.rb
            │  │     │  ├─ array_inquirer.rb
            │  │     │  ├─ backtrace_cleaner.rb
            │  │     │  ├─ benchmarkable.rb
            │  │     │  ├─ builder.rb
            │  │     │  ├─ cache
            │  │     │  │  ├─ file_store.rb
            │  │     │  │  ├─ mem_cache_store.rb
            │  │     │  │  ├─ memory_store.rb
            │  │     │  │  ├─ null_store.rb
            │  │     │  │  ├─ redis_cache_store.rb
            │  │     │  │  └─ strategy
            │  │     │  │     ├─ local_cache.rb
            │  │     │  │     └─ local_cache_middleware.rb
            │  │     │  ├─ cache.rb
            │  │     │  ├─ callbacks.rb
            │  │     │  ├─ concern.rb
            │  │     │  ├─ concurrency
            │  │     │  │  ├─ load_interlock_aware_monitor.rb
            │  │     │  │  └─ share_lock.rb
            │  │     │  ├─ configurable.rb
            │  │     │  ├─ configuration_file.rb
            │  │     │  ├─ core_ext
            │  │     │  │  ├─ array
            │  │     │  │  │  ├─ access.rb
            │  │     │  │  │  ├─ conversions.rb
            │  │     │  │  │  ├─ extract.rb
            │  │     │  │  │  ├─ extract_options.rb
            │  │     │  │  │  ├─ grouping.rb
            │  │     │  │  │  ├─ inquiry.rb
            │  │     │  │  │  └─ wrap.rb
            │  │     │  │  ├─ array.rb
            │  │     │  │  ├─ benchmark.rb
            │  │     │  │  ├─ big_decimal
            │  │     │  │  │  └─ conversions.rb
            │  │     │  │  ├─ big_decimal.rb
            │  │     │  │  ├─ class
            │  │     │  │  │  ├─ attribute.rb
            │  │     │  │  │  ├─ attribute_accessors.rb
            │  │     │  │  │  └─ subclasses.rb
            │  │     │  │  ├─ class.rb
            │  │     │  │  ├─ date
            │  │     │  │  │  ├─ acts_like.rb
            │  │     │  │  │  ├─ blank.rb
            │  │     │  │  │  ├─ calculations.rb
            │  │     │  │  │  ├─ conversions.rb
            │  │     │  │  │  └─ zones.rb
            │  │     │  │  ├─ date.rb
            │  │     │  │  ├─ date_and_time
            │  │     │  │  │  ├─ calculations.rb
            │  │     │  │  │  ├─ compatibility.rb
            │  │     │  │  │  └─ zones.rb
            │  │     │  │  ├─ date_time
            │  │     │  │  │  ├─ acts_like.rb
            │  │     │  │  │  ├─ blank.rb
            │  │     │  │  │  ├─ calculations.rb
            │  │     │  │  │  ├─ compatibility.rb
            │  │     │  │  │  └─ conversions.rb
            │  │     │  │  ├─ date_time.rb
            │  │     │  │  ├─ digest
            │  │     │  │  │  └─ uuid.rb
            │  │     │  │  ├─ digest.rb
            │  │     │  │  ├─ enumerable.rb
            │  │     │  │  ├─ file
            │  │     │  │  │  └─ atomic.rb
            │  │     │  │  ├─ file.rb
            │  │     │  │  ├─ hash
            │  │     │  │  │  ├─ conversions.rb
            │  │     │  │  │  ├─ deep_merge.rb
            │  │     │  │  │  ├─ deep_transform_values.rb
            │  │     │  │  │  ├─ except.rb
            │  │     │  │  │  ├─ indifferent_access.rb
            │  │     │  │  │  ├─ keys.rb
            │  │     │  │  │  ├─ reverse_merge.rb
            │  │     │  │  │  └─ slice.rb
            │  │     │  │  ├─ hash.rb
            │  │     │  │  ├─ integer
            │  │     │  │  │  ├─ inflections.rb
            │  │     │  │  │  ├─ multiple.rb
            │  │     │  │  │  └─ time.rb
            │  │     │  │  ├─ integer.rb
            │  │     │  │  ├─ kernel
            │  │     │  │  │  ├─ concern.rb
            │  │     │  │  │  ├─ reporting.rb
            │  │     │  │  │  └─ singleton_class.rb
            │  │     │  │  ├─ kernel.rb
            │  │     │  │  ├─ load_error.rb
            │  │     │  │  ├─ marshal.rb
            │  │     │  │  ├─ module
            │  │     │  │  │  ├─ aliasing.rb
            │  │     │  │  │  ├─ anonymous.rb
            │  │     │  │  │  ├─ attr_internal.rb
            │  │     │  │  │  ├─ attribute_accessors.rb
            │  │     │  │  │  ├─ attribute_accessors_per_thread.rb
            │  │     │  │  │  ├─ concerning.rb
            │  │     │  │  │  ├─ delegation.rb
            │  │     │  │  │  ├─ deprecation.rb
            │  │     │  │  │  ├─ introspection.rb
            │  │     │  │  │  ├─ redefine_method.rb
            │  │     │  │  │  └─ remove_method.rb
            │  │     │  │  ├─ module.rb
            │  │     │  │  ├─ name_error.rb
            │  │     │  │  ├─ numeric
            │  │     │  │  │  ├─ bytes.rb
            │  │     │  │  │  ├─ conversions.rb
            │  │     │  │  │  └─ time.rb
            │  │     │  │  ├─ numeric.rb
            │  │     │  │  ├─ object
            │  │     │  │  │  ├─ acts_like.rb
            │  │     │  │  │  ├─ blank.rb
            │  │     │  │  │  ├─ conversions.rb
            │  │     │  │  │  ├─ deep_dup.rb
            │  │     │  │  │  ├─ duplicable.rb
            │  │     │  │  │  ├─ inclusion.rb
            │  │     │  │  │  ├─ instance_variables.rb
            │  │     │  │  │  ├─ json.rb
            │  │     │  │  │  ├─ to_param.rb
            │  │     │  │  │  ├─ to_query.rb
            │  │     │  │  │  ├─ try.rb
            │  │     │  │  │  └─ with_options.rb
            │  │     │  │  ├─ object.rb
            │  │     │  │  ├─ range
            │  │     │  │  │  ├─ compare_range.rb
            │  │     │  │  │  ├─ conversions.rb
            │  │     │  │  │  ├─ each.rb
            │  │     │  │  │  ├─ include_time_with_zone.rb
            │  │     │  │  │  └─ overlaps.rb
            │  │     │  │  ├─ range.rb
            │  │     │  │  ├─ regexp.rb
            │  │     │  │  ├─ securerandom.rb
            │  │     │  │  ├─ string
            │  │     │  │  │  ├─ access.rb
            │  │     │  │  │  ├─ behavior.rb
            │  │     │  │  │  ├─ conversions.rb
            │  │     │  │  │  ├─ exclude.rb
            │  │     │  │  │  ├─ filters.rb
            │  │     │  │  │  ├─ indent.rb
            │  │     │  │  │  ├─ inflections.rb
            │  │     │  │  │  ├─ inquiry.rb
            │  │     │  │  │  ├─ multibyte.rb
            │  │     │  │  │  ├─ output_safety.rb
            │  │     │  │  │  ├─ starts_ends_with.rb
            │  │     │  │  │  ├─ strip.rb
            │  │     │  │  │  └─ zones.rb
            │  │     │  │  ├─ string.rb
            │  │     │  │  ├─ symbol
            │  │     │  │  │  └─ starts_ends_with.rb
            │  │     │  │  ├─ symbol.rb
            │  │     │  │  ├─ time
            │  │     │  │  │  ├─ acts_like.rb
            │  │     │  │  │  ├─ calculations.rb
            │  │     │  │  │  ├─ compatibility.rb
            │  │     │  │  │  ├─ conversions.rb
            │  │     │  │  │  └─ zones.rb
            │  │     │  │  ├─ time.rb
            │  │     │  │  └─ uri.rb
            │  │     │  ├─ core_ext.rb
            │  │     │  ├─ current_attributes
            │  │     │  │  └─ test_helper.rb
            │  │     │  ├─ current_attributes.rb
            │  │     │  ├─ dependencies
            │  │     │  │  ├─ autoload.rb
            │  │     │  │  ├─ interlock.rb
            │  │     │  │  └─ zeitwerk_integration.rb
            │  │     │  ├─ dependencies.rb
            │  │     │  ├─ deprecation
            │  │     │  │  ├─ behaviors.rb
            │  │     │  │  ├─ constant_accessor.rb
            │  │     │  │  ├─ disallowed.rb
            │  │     │  │  ├─ instance_delegator.rb
            │  │     │  │  ├─ method_wrappers.rb
            │  │     │  │  ├─ proxy_wrappers.rb
            │  │     │  │  └─ reporting.rb
            │  │     │  ├─ deprecation.rb
            │  │     │  ├─ descendants_tracker.rb
            │  │     │  ├─ digest.rb
            │  │     │  ├─ duration
            │  │     │  │  ├─ iso8601_parser.rb
            │  │     │  │  └─ iso8601_serializer.rb
            │  │     │  ├─ duration.rb
            │  │     │  ├─ encrypted_configuration.rb
            │  │     │  ├─ encrypted_file.rb
            │  │     │  ├─ environment_inquirer.rb
            │  │     │  ├─ evented_file_update_checker.rb
            │  │     │  ├─ execution_wrapper.rb
            │  │     │  ├─ executor.rb
            │  │     │  ├─ file_update_checker.rb
            │  │     │  ├─ fork_tracker.rb
            │  │     │  ├─ gem_version.rb
            │  │     │  ├─ gzip.rb
            │  │     │  ├─ hash_with_indifferent_access.rb
            │  │     │  ├─ i18n.rb
            │  │     │  ├─ i18n_railtie.rb
            │  │     │  ├─ inflections.rb
            │  │     │  ├─ inflector
            │  │     │  │  ├─ inflections.rb
            │  │     │  │  ├─ methods.rb
            │  │     │  │  └─ transliterate.rb
            │  │     │  ├─ inflector.rb
            │  │     │  ├─ json
            │  │     │  │  ├─ decoding.rb
            │  │     │  │  └─ encoding.rb
            │  │     │  ├─ json.rb
            │  │     │  ├─ key_generator.rb
            │  │     │  ├─ lazy_load_hooks.rb
            │  │     │  ├─ locale
            │  │     │  │  ├─ en.rb
            │  │     │  │  └─ en.yml
            │  │     │  ├─ log_subscriber
            │  │     │  │  └─ test_helper.rb
            │  │     │  ├─ log_subscriber.rb
            │  │     │  ├─ logger.rb
            │  │     │  ├─ logger_silence.rb
            │  │     │  ├─ logger_thread_safe_level.rb
            │  │     │  ├─ message_encryptor.rb
            │  │     │  ├─ message_verifier.rb
            │  │     │  ├─ messages
            │  │     │  │  ├─ metadata.rb
            │  │     │  │  ├─ rotation_configuration.rb
            │  │     │  │  └─ rotator.rb
            │  │     │  ├─ multibyte
            │  │     │  │  ├─ chars.rb
            │  │     │  │  └─ unicode.rb
            │  │     │  ├─ multibyte.rb
            │  │     │  ├─ notifications
            │  │     │  │  ├─ fanout.rb
            │  │     │  │  └─ instrumenter.rb
            │  │     │  ├─ notifications.rb
            │  │     │  ├─ number_helper
            │  │     │  │  ├─ number_converter.rb
            │  │     │  │  ├─ number_to_currency_converter.rb
            │  │     │  │  ├─ number_to_delimited_converter.rb
            │  │     │  │  ├─ number_to_human_converter.rb
            │  │     │  │  ├─ number_to_human_size_converter.rb
            │  │     │  │  ├─ number_to_percentage_converter.rb
            │  │     │  │  ├─ number_to_phone_converter.rb
            │  │     │  │  ├─ number_to_rounded_converter.rb
            │  │     │  │  └─ rounding_helper.rb
            │  │     │  ├─ number_helper.rb
            │  │     │  ├─ option_merger.rb
            │  │     │  ├─ ordered_hash.rb
            │  │     │  ├─ ordered_options.rb
            │  │     │  ├─ parameter_filter.rb
            │  │     │  ├─ per_thread_registry.rb
            │  │     │  ├─ proxy_object.rb
            │  │     │  ├─ rails.rb
            │  │     │  ├─ railtie.rb
            │  │     │  ├─ reloader.rb
            │  │     │  ├─ rescuable.rb
            │  │     │  ├─ secure_compare_rotator.rb
            │  │     │  ├─ security_utils.rb
            │  │     │  ├─ string_inquirer.rb
            │  │     │  ├─ subscriber.rb
            │  │     │  ├─ tagged_logging.rb
            │  │     │  ├─ test_case.rb
            │  │     │  ├─ testing
            │  │     │  │  ├─ assertions.rb
            │  │     │  │  ├─ autorun.rb
            │  │     │  │  ├─ constant_lookup.rb
            │  │     │  │  ├─ declarative.rb
            │  │     │  │  ├─ deprecation.rb
            │  │     │  │  ├─ file_fixtures.rb
            │  │     │  │  ├─ isolation.rb
            │  │     │  │  ├─ method_call_assertions.rb
            │  │     │  │  ├─ parallelization
            │  │     │  │  │  ├─ server.rb
            │  │     │  │  │  └─ worker.rb
            │  │     │  │  ├─ parallelization.rb
            │  │     │  │  ├─ setup_and_teardown.rb
            │  │     │  │  ├─ stream.rb
            │  │     │  │  ├─ tagged_logging.rb
            │  │     │  │  └─ time_helpers.rb
            │  │     │  ├─ time.rb
            │  │     │  ├─ time_with_zone.rb
            │  │     │  ├─ values
            │  │     │  │  └─ time_zone.rb
            │  │     │  ├─ version.rb
            │  │     │  ├─ xml_mini
            │  │     │  │  ├─ jdom.rb
            │  │     │  │  ├─ libxml.rb
            │  │     │  │  ├─ libxmlsax.rb
            │  │     │  │  ├─ nokogiri.rb
            │  │     │  │  ├─ nokogirisax.rb
            │  │     │  │  └─ rexml.rb
            │  │     │  └─ xml_mini.rb
            │  │     └─ active_support.rb
            │  ├─ addressable-2.8.7
            │  │  ├─ CHANGELOG.md
            │  │  ├─ Gemfile
            │  │  ├─ LICENSE.txt
            │  │  ├─ README.md
            │  │  ├─ Rakefile
            │  │  ├─ addressable.gemspec
            │  │  ├─ data
            │  │  │  └─ unicode.data
            │  │  ├─ lib
            │  │  │  ├─ addressable
            │  │  │  │  ├─ idna
            │  │  │  │  │  ├─ native.rb
            │  │  │  │  │  └─ pure.rb
            │  │  │  │  ├─ idna.rb
            │  │  │  │  ├─ template.rb
            │  │  │  │  ├─ uri.rb
            │  │  │  │  └─ version.rb
            │  │  │  └─ addressable.rb
            │  │  ├─ spec
            │  │  │  ├─ addressable
            │  │  │  │  ├─ idna_spec.rb
            │  │  │  │  ├─ net_http_compat_spec.rb
            │  │  │  │  ├─ security_spec.rb
            │  │  │  │  ├─ template_spec.rb
            │  │  │  │  └─ uri_spec.rb
            │  │  │  └─ spec_helper.rb
            │  │  └─ tasks
            │  │     ├─ clobber.rake
            │  │     ├─ gem.rake
            │  │     ├─ git.rake
            │  │     ├─ metrics.rake
            │  │     ├─ profile.rake
            │  │     ├─ rspec.rake
            │  │     └─ yard.rake
            │  ├─ algoliasearch-1.27.5
            │  │  ├─ .rspec
            │  │  ├─ .travis.yml
            │  │  ├─ CHANGELOG.md
            │  │  ├─ Gemfile
            │  │  ├─ Gemfile.lock
            │  │  ├─ LICENSE
            │  │  ├─ README.md
            │  │  ├─ Rakefile
            │  │  ├─ algoliasearch.gemspec
            │  │  ├─ contacts.json
            │  │  ├─ lib
            │  │  │  ├─ algolia
            │  │  │  │  ├─ account_client.rb
            │  │  │  │  ├─ analytics.rb
            │  │  │  │  ├─ client.rb
            │  │  │  │  ├─ error.rb
            │  │  │  │  ├─ index.rb
            │  │  │  │  ├─ insights.rb
            │  │  │  │  ├─ protocol.rb
            │  │  │  │  ├─ version.rb
            │  │  │  │  └─ webmock.rb
            │  │  │  └─ algoliasearch.rb
            │  │  ├─ resources
            │  │  │  └─ ca-bundle.crt
            │  │  └─ spec
            │  │     ├─ account_client_spec.rb
            │  │     ├─ client_spec.rb
            │  │     ├─ mock_spec.rb
            │  │     ├─ spec_helper.rb
            │  │     └─ stub_spec.rb
            │  ├─ atomos-0.1.3
            │  │  ├─ .rspec
            │  │  ├─ .rubocop.yml
            │  │  ├─ .rubocop_todo.yml
            │  │  ├─ .travis.yml
            │  │  ├─ CODE_OF_CONDUCT.md
            │  │  ├─ Gemfile
            │  │  ├─ Gemfile.lock
            │  │  ├─ LICENSE.txt
            │  │  ├─ README.md
            │  │  ├─ Rakefile
            │  │  ├─ VERSION
            │  │  ├─ atomos.gemspec
            │  │  ├─ bin
            │  │  │  ├─ console
            │  │  │  ├─ rake
            │  │  │  ├─ rspec
            │  │  │  ├─ rubocop
            │  │  │  └─ setup
            │  │  └─ lib
            │  │     ├─ atomos
            │  │     │  └─ version.rb
            │  │     └─ atomos.rb
            │  ├─ base64-0.3.0
            │  │  ├─ BSDL
            │  │  ├─ COPYING
            │  │  ├─ LEGAL
            │  │  ├─ README.md
            │  │  ├─ lib
            │  │  │  └─ base64.rb
            │  │  └─ sig
            │  │     └─ base64.rbs
            │  ├─ benchmark-0.4.1
            │  │  ├─ BSDL
            │  │  ├─ COPYING
            │  │  ├─ Gemfile
            │  │  ├─ README.md
            │  │  ├─ Rakefile
            │  │  ├─ benchmark.gemspec
            │  │  ├─ bin
            │  │  │  ├─ console
            │  │  │  └─ setup
            │  │  └─ lib
            │  │     └─ benchmark.rb
            │  ├─ bigdecimal-3.2.2
            │  │  ├─ LICENSE
            │  │  ├─ bigdecimal.gemspec
            │  │  ├─ ext
            │  │  │  └─ bigdecimal
            │  │  │     ├─ .sitearchdir.time
            │  │  │     ├─ Makefile
            │  │  │     ├─ bigdecimal.bundle
            │  │  │     ├─ bigdecimal.c
            │  │  │     ├─ bigdecimal.h
            │  │  │     ├─ bigdecimal.o
            │  │  │     ├─ bits.h
            │  │  │     ├─ extconf.rb
            │  │  │     ├─ feature.h
            │  │  │     ├─ missing
            │  │  │     │  └─ dtoa.c
            │  │  │     ├─ missing.c
            │  │  │     ├─ missing.h
            │  │  │     ├─ missing.o
            │  │  │     └─ static_assert.h
            │  │  ├─ lib
            │  │  │  ├─ bigdecimal
            │  │  │  │  ├─ jacobian.rb
            │  │  │  │  ├─ ludcmp.rb
            │  │  │  │  ├─ math.rb
            │  │  │  │  ├─ newton.rb
            │  │  │  │  └─ util.rb
            │  │  │  ├─ bigdecimal.bundle
            │  │  │  └─ bigdecimal.rb
            │  │  └─ sample
            │  │     ├─ linear.rb
            │  │     ├─ nlsolve.rb
            │  │     └─ pi.rb
            │  ├─ claide-1.1.0
            │  │  ├─ .kick
            │  │  ├─ .rubocop.yml
            │  │  ├─ .rubocop_cocoapods.yml
            │  │  ├─ .rubocop_todo.yml
            │  │  ├─ .yardopts
            │  │  ├─ CHANGELOG.md
            │  │  ├─ Gemfile
            │  │  ├─ Gemfile.lock
            │  │  ├─ LICENSE
            │  │  ├─ README.md
            │  │  ├─ Rakefile
            │  │  ├─ claide.gemspec
            │  │  └─ lib
            │  │     ├─ claide
            │  │     │  ├─ ansi
            │  │     │  │  ├─ cursor.rb
            │  │     │  │  ├─ graphics.rb
            │  │     │  │  └─ string_escaper.rb
            │  │     │  ├─ ansi.rb
            │  │     │  ├─ argument.rb
            │  │     │  ├─ argv.rb
            │  │     │  ├─ command
            │  │     │  │  ├─ argument_suggester.rb
            │  │     │  │  ├─ banner.rb
            │  │     │  │  └─ plugin_manager.rb
            │  │     │  ├─ command.rb
            │  │     │  ├─ gem_version.rb
            │  │     │  ├─ help.rb
            │  │     │  └─ informative_error.rb
            │  │     └─ claide.rb
            │  ├─ cocoapods-1.15.2
            │  │  ├─ CHANGELOG.md
            │  │  ├─ LICENSE
            │  │  ├─ README.md
            │  │  ├─ bin
            │  │  │  ├─ pod
            │  │  │  └─ sandbox-pod
            │  │  └─ lib
            │  │     ├─ cocoapods
            │  │     │  ├─ command
            │  │     │  │  ├─ cache
            │  │     │  │  │  ├─ clean.rb
            │  │     │  │  │  └─ list.rb
            │  │     │  │  ├─ cache.rb
            │  │     │  │  ├─ env.rb
            │  │     │  │  ├─ init.rb
            │  │     │  │  ├─ install.rb
            │  │     │  │  ├─ ipc
            │  │     │  │  │  ├─ list.rb
            │  │     │  │  │  ├─ podfile.rb
            │  │     │  │  │  ├─ podfile_json.rb
            │  │     │  │  │  ├─ repl.rb
            │  │     │  │  │  ├─ spec.rb
            │  │     │  │  │  └─ update_search_index.rb
            │  │     │  │  ├─ ipc.rb
            │  │     │  │  ├─ lib
            │  │     │  │  │  ├─ create.rb
            │  │     │  │  │  └─ lint.rb
            │  │     │  │  ├─ lib.rb
            │  │     │  │  ├─ list.rb
            │  │     │  │  ├─ options
            │  │     │  │  │  ├─ project_directory.rb
            │  │     │  │  │  └─ repo_update.rb
            │  │     │  │  ├─ outdated.rb
            │  │     │  │  ├─ repo
            │  │     │  │  │  ├─ add.rb
            │  │     │  │  │  ├─ add_cdn.rb
            │  │     │  │  │  ├─ lint.rb
            │  │     │  │  │  ├─ list.rb
            │  │     │  │  │  ├─ push.rb
            │  │     │  │  │  ├─ remove.rb
            │  │     │  │  │  └─ update.rb
            │  │     │  │  ├─ repo.rb
            │  │     │  │  ├─ setup.rb
            │  │     │  │  ├─ spec
            │  │     │  │  │  ├─ cat.rb
            │  │     │  │  │  ├─ create.rb
            │  │     │  │  │  ├─ edit.rb
            │  │     │  │  │  ├─ lint.rb
            │  │     │  │  │  └─ which.rb
            │  │     │  │  ├─ spec.rb
            │  │     │  │  └─ update.rb
            │  │     │  ├─ command.rb
            │  │     │  ├─ config.rb
            │  │     │  ├─ core_overrides.rb
            │  │     │  ├─ downloader
            │  │     │  │  ├─ cache.rb
            │  │     │  │  ├─ request.rb
            │  │     │  │  └─ response.rb
            │  │     │  ├─ downloader.rb
            │  │     │  ├─ executable.rb
            │  │     │  ├─ external_sources
            │  │     │  │  ├─ abstract_external_source.rb
            │  │     │  │  ├─ downloader_source.rb
            │  │     │  │  ├─ path_source.rb
            │  │     │  │  └─ podspec_source.rb
            │  │     │  ├─ external_sources.rb
            │  │     │  ├─ gem_version.rb
            │  │     │  ├─ generator
            │  │     │  │  ├─ acknowledgements
            │  │     │  │  │  ├─ markdown.rb
            │  │     │  │  │  └─ plist.rb
            │  │     │  │  ├─ acknowledgements.rb
            │  │     │  │  ├─ app_target_helper.rb
            │  │     │  │  ├─ bridge_support.rb
            │  │     │  │  ├─ constant.rb
            │  │     │  │  ├─ copy_dsyms_script.rb
            │  │     │  │  ├─ copy_resources_script.rb
            │  │     │  │  ├─ copy_xcframework_script.rb
            │  │     │  │  ├─ dummy_source.rb
            │  │     │  │  ├─ embed_frameworks_script.rb
            │  │     │  │  ├─ file_list.rb
            │  │     │  │  ├─ header.rb
            │  │     │  │  ├─ info_plist_file.rb
            │  │     │  │  ├─ module_map.rb
            │  │     │  │  ├─ prefix_header.rb
            │  │     │  │  ├─ script_phase_constants.rb
            │  │     │  │  └─ umbrella_header.rb
            │  │     │  ├─ hooks_manager.rb
            │  │     │  ├─ installer
            │  │     │  │  ├─ analyzer
            │  │     │  │  │  ├─ analysis_result.rb
            │  │     │  │  │  ├─ locking_dependency_analyzer.rb
            │  │     │  │  │  ├─ pod_variant.rb
            │  │     │  │  │  ├─ pod_variant_set.rb
            │  │     │  │  │  ├─ podfile_dependency_cache.rb
            │  │     │  │  │  ├─ sandbox_analyzer.rb
            │  │     │  │  │  ├─ specs_state.rb
            │  │     │  │  │  ├─ target_inspection_result.rb
            │  │     │  │  │  └─ target_inspector.rb
            │  │     │  │  ├─ analyzer.rb
            │  │     │  │  ├─ base_install_hooks_context.rb
            │  │     │  │  ├─ installation_options.rb
            │  │     │  │  ├─ pod_source_downloader.rb
            │  │     │  │  ├─ pod_source_installer.rb
            │  │     │  │  ├─ pod_source_preparer.rb
            │  │     │  │  ├─ podfile_validator.rb
            │  │     │  │  ├─ post_install_hooks_context.rb
            │  │     │  │  ├─ post_integrate_hooks_context.rb
            │  │     │  │  ├─ pre_install_hooks_context.rb
            │  │     │  │  ├─ pre_integrate_hooks_context.rb
            │  │     │  │  ├─ project_cache
            │  │     │  │  │  ├─ project_cache.rb
            │  │     │  │  │  ├─ project_cache_analysis_result.rb
            │  │     │  │  │  ├─ project_cache_analyzer.rb
            │  │     │  │  │  ├─ project_cache_version.rb
            │  │     │  │  │  ├─ project_installation_cache.rb
            │  │     │  │  │  ├─ project_metadata_cache.rb
            │  │     │  │  │  ├─ target_cache_key.rb
            │  │     │  │  │  └─ target_metadata.rb
            │  │     │  │  ├─ sandbox_dir_cleaner.rb
            │  │     │  │  ├─ sandbox_header_paths_installer.rb
            │  │     │  │  ├─ source_provider_hooks_context.rb
            │  │     │  │  ├─ target_uuid_generator.rb
            │  │     │  │  ├─ user_project_integrator
            │  │     │  │  │  ├─ target_integrator
            │  │     │  │  │  │  └─ xcconfig_integrator.rb
            │  │     │  │  │  └─ target_integrator.rb
            │  │     │  │  ├─ user_project_integrator.rb
            │  │     │  │  ├─ xcode
            │  │     │  │  │  ├─ multi_pods_project_generator.rb
            │  │     │  │  │  ├─ pods_project_generator
            │  │     │  │  │  │  ├─ aggregate_target_dependency_installer.rb
            │  │     │  │  │  │  ├─ aggregate_target_installer.rb
            │  │     │  │  │  │  ├─ app_host_installer.rb
            │  │     │  │  │  │  ├─ file_references_installer.rb
            │  │     │  │  │  │  ├─ pod_target_dependency_installer.rb
            │  │     │  │  │  │  ├─ pod_target_installer.rb
            │  │     │  │  │  │  ├─ pod_target_integrator.rb
            │  │     │  │  │  │  ├─ pods_project_writer.rb
            │  │     │  │  │  │  ├─ project_generator.rb
            │  │     │  │  │  │  ├─ target_installation_result.rb
            │  │     │  │  │  │  ├─ target_installer.rb
            │  │     │  │  │  │  └─ target_installer_helper.rb
            │  │     │  │  │  ├─ pods_project_generator.rb
            │  │     │  │  │  ├─ pods_project_generator_result.rb
            │  │     │  │  │  ├─ single_pods_project_generator.rb
            │  │     │  │  │  └─ target_validator.rb
            │  │     │  │  └─ xcode.rb
            │  │     │  ├─ installer.rb
            │  │     │  ├─ native_target_extension.rb
            │  │     │  ├─ open-uri.rb
            │  │     │  ├─ podfile.rb
            │  │     │  ├─ project.rb
            │  │     │  ├─ resolver
            │  │     │  │  ├─ lazy_specification.rb
            │  │     │  │  └─ resolver_specification.rb
            │  │     │  ├─ resolver.rb
            │  │     │  ├─ sandbox
            │  │     │  │  ├─ file_accessor.rb
            │  │     │  │  ├─ headers_store.rb
            │  │     │  │  ├─ path_list.rb
            │  │     │  │  ├─ pod_dir_cleaner.rb
            │  │     │  │  └─ podspec_finder.rb
            │  │     │  ├─ sandbox.rb
            │  │     │  ├─ sources_manager.rb
            │  │     │  ├─ target
            │  │     │  │  ├─ aggregate_target.rb
            │  │     │  │  ├─ build_settings.rb
            │  │     │  │  └─ pod_target.rb
            │  │     │  ├─ target.rb
            │  │     │  ├─ user_interface
            │  │     │  │  ├─ error_report.rb
            │  │     │  │  └─ inspector_reporter.rb
            │  │     │  ├─ user_interface.rb
            │  │     │  ├─ validator.rb
            │  │     │  ├─ version_metadata.rb
            │  │     │  ├─ xcode
            │  │     │  │  ├─ framework_paths.rb
            │  │     │  │  ├─ linkage_analyzer.rb
            │  │     │  │  ├─ xcframework
            │  │     │  │  │  └─ xcframework_slice.rb
            │  │     │  │  └─ xcframework.rb
            │  │     │  └─ xcode.rb
            │  │     └─ cocoapods.rb
            │  ├─ cocoapods-core-1.15.2
            │  │  ├─ LICENSE
            │  │  ├─ README.md
            │  │  └─ lib
            │  │     ├─ cocoapods-core
            │  │     │  ├─ build_type.rb
            │  │     │  ├─ cdn_source.rb
            │  │     │  ├─ core_ui.rb
            │  │     │  ├─ dependency.rb
            │  │     │  ├─ gem_version.rb
            │  │     │  ├─ github.rb
            │  │     │  ├─ http.rb
            │  │     │  ├─ lockfile.rb
            │  │     │  ├─ metrics.rb
            │  │     │  ├─ platform.rb
            │  │     │  ├─ podfile
            │  │     │  │  ├─ dsl.rb
            │  │     │  │  └─ target_definition.rb
            │  │     │  ├─ podfile.rb
            │  │     │  ├─ requirement.rb
            │  │     │  ├─ source
            │  │     │  │  ├─ acceptor.rb
            │  │     │  │  ├─ aggregate.rb
            │  │     │  │  ├─ health_reporter.rb
            │  │     │  │  ├─ manager.rb
            │  │     │  │  └─ metadata.rb
            │  │     │  ├─ source.rb
            │  │     │  ├─ specification
            │  │     │  │  ├─ consumer.rb
            │  │     │  │  ├─ dsl
            │  │     │  │  │  ├─ attribute.rb
            │  │     │  │  │  ├─ attribute_support.rb
            │  │     │  │  │  ├─ deprecations.rb
            │  │     │  │  │  └─ platform_proxy.rb
            │  │     │  │  ├─ dsl.rb
            │  │     │  │  ├─ json.rb
            │  │     │  │  ├─ linter
            │  │     │  │  │  ├─ analyzer.rb
            │  │     │  │  │  └─ result.rb
            │  │     │  │  ├─ linter.rb
            │  │     │  │  ├─ root_attribute_accessors.rb
            │  │     │  │  ├─ set
            │  │     │  │  │  └─ presenter.rb
            │  │     │  │  └─ set.rb
            │  │     │  ├─ specification.rb
            │  │     │  ├─ standard_error.rb
            │  │     │  ├─ trunk_source.rb
            │  │     │  ├─ vendor
            │  │     │  │  ├─ requirement.rb
            │  │     │  │  └─ version.rb
            │  │     │  ├─ vendor.rb
            │  │     │  ├─ version.rb
            │  │     │  └─ yaml_helper.rb
            │  │     └─ cocoapods-core.rb
            │  ├─ cocoapods-deintegrate-1.0.5
            │  │  ├─ LICENSE
            │  │  ├─ README.md
            │  │  └─ lib
            │  │     ├─ cocoapods
            │  │     │  ├─ command
            │  │     │  │  └─ deintegrate.rb
            │  │     │  ├─ deintegrate
            │  │     │  │  └─ gem_version.rb
            │  │     │  └─ deintegrator.rb
            │  │     ├─ cocoapods_deintegrate.rb
            │  │     └─ cocoapods_plugin.rb
            │  ├─ cocoapods-downloader-2.1
            │  │  ├─ LICENSE
            │  │  ├─ README.markdown
            │  │  └─ lib
            │  │     ├─ cocoapods-downloader
            │  │     │  ├─ api.rb
            │  │     │  ├─ api_exposable.rb
            │  │     │  ├─ base.rb
            │  │     │  ├─ gem_version.rb
            │  │     │  ├─ git.rb
            │  │     │  ├─ http.rb
            │  │     │  ├─ mercurial.rb
            │  │     │  ├─ remote_file.rb
            │  │     │  ├─ scp.rb
            │  │     │  └─ subversion.rb
            │  │     └─ cocoapods-downloader.rb
            │  ├─ cocoapods-plugins-1.0.0
            │  │  ├─ .rubocop.yml
            │  │  ├─ .rubocop_cocoapods.yml
            │  │  ├─ .travis.yml
            │  │  ├─ CHANGELOG.md
            │  │  ├─ Gemfile
            │  │  ├─ Gemfile.lock
            │  │  ├─ LICENSE
            │  │  ├─ README.md
            │  │  ├─ Rakefile
            │  │  ├─ cocoapods-plugins.gemspec
            │  │  ├─ lib
            │  │  │  ├─ cocoapods_plugin.rb
            │  │  │  ├─ cocoapods_plugins.rb
            │  │  │  └─ pod
            │  │  │     └─ command
            │  │  │        ├─ gem_helper.rb
            │  │  │        ├─ gem_index_cache.rb
            │  │  │        ├─ plugins
            │  │  │        │  ├─ create.rb
            │  │  │        │  ├─ installed.rb
            │  │  │        │  ├─ list.rb
            │  │  │        │  ├─ publish.rb
            │  │  │        │  └─ search.rb
            │  │  │        ├─ plugins.rb
            │  │  │        └─ plugins_helper.rb
            │  │  ├─ plugins.json
            │  │  └─ spec
            │  │     ├─ command
            │  │     │  ├─ gem_helper_spec.rb
            │  │     │  ├─ gem_index_cache_spec.rb
            │  │     │  ├─ plugins
            │  │     │  │  ├─ create_spec.rb
            │  │     │  │  ├─ installed_spec.rb
            │  │     │  │  ├─ list_spec.rb
            │  │     │  │  ├─ publish_spec.rb
            │  │     │  │  └─ search_spec.rb
            │  │     │  ├─ plugins_helper_spec.rb
            │  │     │  └─ plugins_spec.rb
            │  │     ├─ fixtures
            │  │     │  ├─ cocoapods-foo1.gemspec
            │  │     │  ├─ cocoapods-foo2.gemspec
            │  │     │  ├─ plugins.json
            │  │     │  └─ unprefixed.gemspec
            │  │     └─ spec_helper.rb
            │  ├─ cocoapods-search-1.0.1
            │  │  ├─ CHANGELOG.md
            │  │  ├─ Gemfile
            │  │  ├─ Gemfile.lock
            │  │  ├─ LICENSE.txt
            │  │  ├─ README.md
            │  │  ├─ Rakefile
            │  │  ├─ cocoapods-search.gemspec
            │  │  ├─ lib
            │  │  │  ├─ cocoapods-search
            │  │  │  │  ├─ command
            │  │  │  │  │  └─ search.rb
            │  │  │  │  ├─ command.rb
            │  │  │  │  └─ gem_version.rb
            │  │  │  ├─ cocoapods-search.rb
            │  │  │  └─ cocoapods_plugin.rb
            │  │  └─ spec
            │  │     ├─ command
            │  │     │  └─ search_spec.rb
            │  │     ├─ fixtures
            │  │     │  └─ spec-repos
            │  │     │     └─ test_repo
            │  │     │        ├─ BananaLib
            │  │     │        │  └─ 1.0
            │  │     │        │     └─ BananaLib.podspec
            │  │     │        ├─ JSONKit
            │  │     │        │  ├─ 1.4
            │  │     │        │  │  └─ JSONKit.podspec
            │  │     │        │  └─ 999.999.999
            │  │     │        │     └─ JSONKit.podspec
            │  │     │        ├─ OrangeFramework
            │  │     │        │  └─ 0.1.0
            │  │     │        │     └─ OrangeFramework.podspec
            │  │     │        ├─ Pod+With+Plus+Signs
            │  │     │        │  └─ 1.0
            │  │     │        │     └─ Pod+With+Plus+Signs.podspec
            │  │     │        ├─ Realm
            │  │     │        │  └─ 0.94
            │  │     │        │     └─ Realm.podspec
            │  │     │        └─ monkey
            │  │     │           └─ 1.0.2
            │  │     │              └─ monkey.podspec
            │  │     ├─ spec_helper
            │  │     │  ├─ command.rb
            │  │     │  ├─ fixture.rb
            │  │     │  ├─ pre_flight.rb
            │  │     │  ├─ temporary_repos.rb
            │  │     │  └─ user_interface.rb
            │  │     └─ spec_helper.rb
            │  ├─ cocoapods-trunk-1.6.0
            │  │  ├─ .kick
            │  │  ├─ .rubocop.yml
            │  │  ├─ .rubocop_cocoapods.yml
            │  │  ├─ .rubocop_todo.yml
            │  │  ├─ CHANGELOG.md
            │  │  ├─ Gemfile
            │  │  ├─ Gemfile.lock
            │  │  ├─ LICENSE.txt
            │  │  ├─ README.md
            │  │  ├─ Rakefile
            │  │  ├─ cocoapods-trunk.gemspec
            │  │  ├─ lib
            │  │  │  ├─ cocoapods_plugin.rb
            │  │  │  ├─ cocoapods_trunk.rb
            │  │  │  └─ pod
            │  │  │     └─ command
            │  │  │        ├─ trunk
            │  │  │        │  ├─ add_owner.rb
            │  │  │        │  ├─ delete.rb
            │  │  │        │  ├─ deprecate.rb
            │  │  │        │  ├─ info.rb
            │  │  │        │  ├─ me.rb
            │  │  │        │  ├─ push.rb
            │  │  │        │  ├─ register.rb
            │  │  │        │  └─ remove_owner.rb
            │  │  │        └─ trunk.rb
            │  │  └─ spec
            │  │     ├─ command
            │  │     │  ├─ trunk
            │  │     │  │  ├─ addowner_spec.rb
            │  │     │  │  ├─ delete_spec.rb
            │  │     │  │  ├─ deprecate_spec.rb
            │  │     │  │  ├─ info_spec.rb
            │  │     │  │  ├─ me_spec.rb
            │  │     │  │  ├─ push_spec.rb
            │  │     │  │  ├─ register_spec.rb
            │  │     │  │  └─ remove_owner_spec.rb
            │  │     │  └─ trunk_spec.rb
            │  │     ├─ fixtures
            │  │     │  └─ BananaLib.podspec
            │  │     └─ spec_helper.rb
            │  ├─ cocoapods-try-1.2.0
            │  │  ├─ .rubocop.yml
            │  │  ├─ .rubocop_cocoapods.yml
            │  │  ├─ .rubocop_todo.yml
            │  │  ├─ .travis.yml
            │  │  ├─ CHANGELOG.md
            │  │  ├─ Gemfile
            │  │  ├─ Gemfile.lock
            │  │  ├─ LICENSE
            │  │  ├─ README.md
            │  │  ├─ Rakefile
            │  │  ├─ cocoapods-try.gemspec
            │  │  ├─ lib
            │  │  │  ├─ cocoapods_plugin.rb
            │  │  │  ├─ cocoapods_try.rb
            │  │  │  └─ pod
            │  │  │     ├─ command
            │  │  │     │  └─ try.rb
            │  │  │     └─ try_settings.rb
            │  │  └─ spec
            │  │     ├─ command
            │  │     │  ├─ try_settings_spec.rb
            │  │     │  └─ try_spec.rb
            │  │     └─ spec_helper.rb
            │  ├─ colored2-3.1.2
            │  │  ├─ LICENSE
            │  │  ├─ README.md
            │  │  ├─ Rakefile
            │  │  ├─ lib
            │  │  │  ├─ colored2
            │  │  │  │  ├─ ascii_decorator.rb
            │  │  │  │  ├─ codes.rb
            │  │  │  │  ├─ numbers.rb
            │  │  │  │  ├─ object.rb
            │  │  │  │  ├─ strings.rb
            │  │  │  │  └─ version.rb
            │  │  │  └─ colored2.rb
            │  │  └─ spec
            │  │     ├─ colored2
            │  │     │  ├─ numbers_spec.rb
            │  │     │  ├─ object_spec.rb
            │  │     │  └─ strings_spec.rb
            │  │     ├─ colored2_spec.rb
            │  │     └─ spec_helper.rb
            │  ├─ concurrent-ruby-1.3.3
            │  │  ├─ CHANGELOG.md
            │  │  ├─ Gemfile
            │  │  ├─ LICENSE.txt
            │  │  ├─ README.md
            │  │  ├─ Rakefile
            │  │  ├─ ext
            │  │  │  └─ concurrent-ruby
            │  │  │     ├─ ConcurrentRubyService.java
            │  │  │     └─ com
            │  │  │        └─ concurrent_ruby
            │  │  │           └─ ext
            │  │  │              ├─ AtomicReferenceLibrary.java
            │  │  │              ├─ JRubyMapBackendLibrary.java
            │  │  │              ├─ JavaAtomicBooleanLibrary.java
            │  │  │              ├─ JavaAtomicFixnumLibrary.java
            │  │  │              ├─ JavaSemaphoreLibrary.java
            │  │  │              ├─ SynchronizationLibrary.java
            │  │  │              ├─ jsr166e
            │  │  │              │  ├─ ConcurrentHashMap.java
            │  │  │              │  ├─ ConcurrentHashMapV8.java
            │  │  │              │  ├─ LongAdder.java
            │  │  │              │  ├─ Striped64.java
            │  │  │              │  └─ nounsafe
            │  │  │              │     ├─ ConcurrentHashMapV8.java
            │  │  │              │     ├─ LongAdder.java
            │  │  │              │     └─ Striped64.java
            │  │  │              └─ jsr166y
            │  │  │                 └─ ThreadLocalRandom.java
            │  │  └─ lib
            │  │     └─ concurrent-ruby
            │  │        ├─ concurrent
            │  │        │  ├─ agent.rb
            │  │        │  ├─ array.rb
            │  │        │  ├─ async.rb
            │  │        │  ├─ atom.rb
            │  │        │  ├─ atomic
            │  │        │  │  ├─ atomic_boolean.rb
            │  │        │  │  ├─ atomic_fixnum.rb
            │  │        │  │  ├─ atomic_markable_reference.rb
            │  │        │  │  ├─ atomic_reference.rb
            │  │        │  │  ├─ count_down_latch.rb
            │  │        │  │  ├─ cyclic_barrier.rb
            │  │        │  │  ├─ event.rb
            │  │        │  │  ├─ fiber_local_var.rb
            │  │        │  │  ├─ java_count_down_latch.rb
            │  │        │  │  ├─ locals.rb
            │  │        │  │  ├─ lock_local_var.rb
            │  │        │  │  ├─ mutex_atomic_boolean.rb
            │  │        │  │  ├─ mutex_atomic_fixnum.rb
            │  │        │  │  ├─ mutex_count_down_latch.rb
            │  │        │  │  ├─ mutex_semaphore.rb
            │  │        │  │  ├─ read_write_lock.rb
            │  │        │  │  ├─ reentrant_read_write_lock.rb
            │  │        │  │  ├─ semaphore.rb
            │  │        │  │  └─ thread_local_var.rb
            │  │        │  ├─ atomic_reference
            │  │        │  │  ├─ atomic_direct_update.rb
            │  │        │  │  ├─ mutex_atomic.rb
            │  │        │  │  └─ numeric_cas_wrapper.rb
            │  │        │  ├─ atomics.rb
            │  │        │  ├─ collection
            │  │        │  │  ├─ copy_on_notify_observer_set.rb
            │  │        │  │  ├─ copy_on_write_observer_set.rb
            │  │        │  │  ├─ java_non_concurrent_priority_queue.rb
            │  │        │  │  ├─ lock_free_stack.rb
            │  │        │  │  ├─ map
            │  │        │  │  │  ├─ mri_map_backend.rb
            │  │        │  │  │  ├─ non_concurrent_map_backend.rb
            │  │        │  │  │  ├─ synchronized_map_backend.rb
            │  │        │  │  │  └─ truffleruby_map_backend.rb
            │  │        │  │  ├─ non_concurrent_priority_queue.rb
            │  │        │  │  └─ ruby_non_concurrent_priority_queue.rb
            │  │        │  ├─ concern
            │  │        │  │  ├─ deprecation.rb
            │  │        │  │  ├─ dereferenceable.rb
            │  │        │  │  ├─ logging.rb
            │  │        │  │  ├─ obligation.rb
            │  │        │  │  └─ observable.rb
            │  │        │  ├─ concurrent_ruby.jar
            │  │        │  ├─ configuration.rb
            │  │        │  ├─ constants.rb
            │  │        │  ├─ dataflow.rb
            │  │        │  ├─ delay.rb
            │  │        │  ├─ errors.rb
            │  │        │  ├─ exchanger.rb
            │  │        │  ├─ executor
            │  │        │  │  ├─ abstract_executor_service.rb
            │  │        │  │  ├─ cached_thread_pool.rb
            │  │        │  │  ├─ executor_service.rb
            │  │        │  │  ├─ fixed_thread_pool.rb
            │  │        │  │  ├─ immediate_executor.rb
            │  │        │  │  ├─ indirect_immediate_executor.rb
            │  │        │  │  ├─ java_executor_service.rb
            │  │        │  │  ├─ java_single_thread_executor.rb
            │  │        │  │  ├─ java_thread_pool_executor.rb
            │  │        │  │  ├─ ruby_executor_service.rb
            │  │        │  │  ├─ ruby_single_thread_executor.rb
            │  │        │  │  ├─ ruby_thread_pool_executor.rb
            │  │        │  │  ├─ safe_task_executor.rb
            │  │        │  │  ├─ serial_executor_service.rb
            │  │        │  │  ├─ serialized_execution.rb
            │  │        │  │  ├─ serialized_execution_delegator.rb
            │  │        │  │  ├─ simple_executor_service.rb
            │  │        │  │  ├─ single_thread_executor.rb
            │  │        │  │  ├─ thread_pool_executor.rb
            │  │        │  │  └─ timer_set.rb
            │  │        │  ├─ executors.rb
            │  │        │  ├─ future.rb
            │  │        │  ├─ hash.rb
            │  │        │  ├─ immutable_struct.rb
            │  │        │  ├─ ivar.rb
            │  │        │  ├─ map.rb
            │  │        │  ├─ maybe.rb
            │  │        │  ├─ mutable_struct.rb
            │  │        │  ├─ mvar.rb
            │  │        │  ├─ options.rb
            │  │        │  ├─ promise.rb
            │  │        │  ├─ promises.rb
            │  │        │  ├─ re_include.rb
            │  │        │  ├─ scheduled_task.rb
            │  │        │  ├─ set.rb
            │  │        │  ├─ settable_struct.rb
            │  │        │  ├─ synchronization
            │  │        │  │  ├─ abstract_lockable_object.rb
            │  │        │  │  ├─ abstract_object.rb
            │  │        │  │  ├─ abstract_struct.rb
            │  │        │  │  ├─ condition.rb
            │  │        │  │  ├─ full_memory_barrier.rb
            │  │        │  │  ├─ jruby_lockable_object.rb
            │  │        │  │  ├─ lock.rb
            │  │        │  │  ├─ lockable_object.rb
            │  │        │  │  ├─ mutex_lockable_object.rb
            │  │        │  │  ├─ object.rb
            │  │        │  │  ├─ safe_initialization.rb
            │  │        │  │  └─ volatile.rb
            │  │        │  ├─ synchronization.rb
            │  │        │  ├─ thread_safe
            │  │        │  │  ├─ synchronized_delegator.rb
            │  │        │  │  ├─ util
            │  │        │  │  │  ├─ adder.rb
            │  │        │  │  │  ├─ data_structures.rb
            │  │        │  │  │  ├─ power_of_two_tuple.rb
            │  │        │  │  │  ├─ striped64.rb
            │  │        │  │  │  ├─ volatile.rb
            │  │        │  │  │  └─ xor_shift_random.rb
            │  │        │  │  └─ util.rb
            │  │        │  ├─ timer_task.rb
            │  │        │  ├─ tuple.rb
            │  │        │  ├─ tvar.rb
            │  │        │  ├─ utility
            │  │        │  │  ├─ engine.rb
            │  │        │  │  ├─ monotonic_time.rb
            │  │        │  │  ├─ native_extension_loader.rb
            │  │        │  │  ├─ native_integer.rb
            │  │        │  │  └─ processor_counter.rb
            │  │        │  └─ version.rb
            │  │        ├─ concurrent-ruby.rb
            │  │        └─ concurrent.rb
            │  ├─ escape-0.0.4
            │  │  ├─ Readme
            │  │  ├─ doc_include
            │  │  │  └─ template
            │  │  │     └─ qualitysmith.rb
            │  │  └─ lib
            │  │     └─ escape.rb
            │  ├─ ethon-0.16.0
            │  │  ├─ .rspec
            │  │  ├─ CHANGELOG.md
            │  │  ├─ Gemfile
            │  │  ├─ Guardfile
            │  │  ├─ LICENSE
            │  │  ├─ README.md
            │  │  ├─ Rakefile
            │  │  ├─ ethon.gemspec
            │  │  ├─ lib
            │  │  │  ├─ ethon
            │  │  │  │  ├─ curl.rb
            │  │  │  │  ├─ curls
            │  │  │  │  │  ├─ classes.rb
            │  │  │  │  │  ├─ codes.rb
            │  │  │  │  │  ├─ constants.rb
            │  │  │  │  │  ├─ form_options.rb
            │  │  │  │  │  ├─ functions.rb
            │  │  │  │  │  ├─ infos.rb
            │  │  │  │  │  ├─ messages.rb
            │  │  │  │  │  ├─ options.rb
            │  │  │  │  │  └─ settings.rb
            │  │  │  │  ├─ easy
            │  │  │  │  │  ├─ callbacks.rb
            │  │  │  │  │  ├─ debug_info.rb
            │  │  │  │  │  ├─ features.rb
            │  │  │  │  │  ├─ form.rb
            │  │  │  │  │  ├─ header.rb
            │  │  │  │  │  ├─ http
            │  │  │  │  │  │  ├─ actionable.rb
            │  │  │  │  │  │  ├─ custom.rb
            │  │  │  │  │  │  ├─ delete.rb
            │  │  │  │  │  │  ├─ get.rb
            │  │  │  │  │  │  ├─ head.rb
            │  │  │  │  │  │  ├─ options.rb
            │  │  │  │  │  │  ├─ patch.rb
            │  │  │  │  │  │  ├─ post.rb
            │  │  │  │  │  │  ├─ postable.rb
            │  │  │  │  │  │  ├─ put.rb
            │  │  │  │  │  │  └─ putable.rb
            │  │  │  │  │  ├─ http.rb
            │  │  │  │  │  ├─ informations.rb
            │  │  │  │  │  ├─ mirror.rb
            │  │  │  │  │  ├─ operations.rb
            │  │  │  │  │  ├─ options.rb
            │  │  │  │  │  ├─ params.rb
            │  │  │  │  │  ├─ queryable.rb
            │  │  │  │  │  ├─ response_callbacks.rb
            │  │  │  │  │  └─ util.rb
            │  │  │  │  ├─ easy.rb
            │  │  │  │  ├─ errors
            │  │  │  │  │  ├─ ethon_error.rb
            │  │  │  │  │  ├─ global_init.rb
            │  │  │  │  │  ├─ invalid_option.rb
            │  │  │  │  │  ├─ invalid_value.rb
            │  │  │  │  │  ├─ multi_add.rb
            │  │  │  │  │  ├─ multi_fdset.rb
            │  │  │  │  │  ├─ multi_remove.rb
            │  │  │  │  │  ├─ multi_timeout.rb
            │  │  │  │  │  └─ select.rb
            │  │  │  │  ├─ errors.rb
            │  │  │  │  ├─ libc.rb
            │  │  │  │  ├─ loggable.rb
            │  │  │  │  ├─ multi
            │  │  │  │  │  ├─ operations.rb
            │  │  │  │  │  ├─ options.rb
            │  │  │  │  │  └─ stack.rb
            │  │  │  │  ├─ multi.rb
            │  │  │  │  └─ version.rb
            │  │  │  └─ ethon.rb
            │  │  ├─ profile
            │  │  │  ├─ benchmarks.rb
            │  │  │  ├─ memory_leaks.rb
            │  │  │  ├─ perf_spec_helper.rb
            │  │  │  └─ support
            │  │  │     ├─ memory_test_helpers.rb
            │  │  │     ├─ os_memory_leak_tracker.rb
            │  │  │     └─ ruby_object_leak_tracker.rb
            │  │  └─ spec
            │  │     ├─ ethon
            │  │     │  ├─ curl_spec.rb
            │  │     │  ├─ easy
            │  │     │  │  ├─ callbacks_spec.rb
            │  │     │  │  ├─ debug_info_spec.rb
            │  │     │  │  ├─ features_spec.rb
            │  │     │  │  ├─ form_spec.rb
            │  │     │  │  ├─ header_spec.rb
            │  │     │  │  ├─ http
            │  │     │  │  │  ├─ custom_spec.rb
            │  │     │  │  │  ├─ delete_spec.rb
            │  │     │  │  │  ├─ get_spec.rb
            │  │     │  │  │  ├─ head_spec.rb
            │  │     │  │  │  ├─ options_spec.rb
            │  │     │  │  │  ├─ patch_spec.rb
            │  │     │  │  │  ├─ post_spec.rb
            │  │     │  │  │  └─ put_spec.rb
            │  │     │  │  ├─ http_spec.rb
            │  │     │  │  ├─ informations_spec.rb
            │  │     │  │  ├─ mirror_spec.rb
            │  │     │  │  ├─ operations_spec.rb
            │  │     │  │  ├─ options_spec.rb
            │  │     │  │  ├─ queryable_spec.rb
            │  │     │  │  ├─ response_callbacks_spec.rb
            │  │     │  │  └─ util_spec.rb
            │  │     │  ├─ easy_spec.rb
            │  │     │  ├─ libc_spec.rb
            │  │     │  ├─ loggable_spec.rb
            │  │     │  ├─ multi
            │  │     │  │  ├─ operations_spec.rb
            │  │     │  │  ├─ options_spec.rb
            │  │     │  │  └─ stack_spec.rb
            │  │     │  └─ multi_spec.rb
            │  │     ├─ spec_helper.rb
            │  │     └─ support
            │  │        ├─ localhost_server.rb
            │  │        └─ server.rb
            │  ├─ ffi-1.17.2
            │  │  ├─ CHANGELOG.md
            │  │  ├─ COPYING
            │  │  ├─ Gemfile
            │  │  ├─ LICENSE
            │  │  ├─ LICENSE.SPECS
            │  │  ├─ README.md
            │  │  ├─ Rakefile
            │  │  ├─ ext
            │  │  │  └─ ffi_c
            │  │  │     ├─ .sitearchdir.time
            │  │  │     ├─ AbstractMemory.c
            │  │  │     ├─ AbstractMemory.h
            │  │  │     ├─ AbstractMemory.o
            │  │  │     ├─ ArrayType.c
            │  │  │     ├─ ArrayType.h
            │  │  │     ├─ ArrayType.o
            │  │  │     ├─ Buffer.c
            │  │  │     ├─ Buffer.o
            │  │  │     ├─ Call.c
            │  │  │     ├─ Call.h
            │  │  │     ├─ Call.o
            │  │  │     ├─ ClosurePool.c
            │  │  │     ├─ ClosurePool.h
            │  │  │     ├─ ClosurePool.o
            │  │  │     ├─ DynamicLibrary.c
            │  │  │     ├─ DynamicLibrary.h
            │  │  │     ├─ DynamicLibrary.o
            │  │  │     ├─ Function.c
            │  │  │     ├─ Function.h
            │  │  │     ├─ Function.o
            │  │  │     ├─ FunctionInfo.c
            │  │  │     ├─ FunctionInfo.o
            │  │  │     ├─ LastError.c
            │  │  │     ├─ LastError.h
            │  │  │     ├─ LastError.o
            │  │  │     ├─ LongDouble.c
            │  │  │     ├─ LongDouble.h
            │  │  │     ├─ LongDouble.o
            │  │  │     ├─ Makefile
            │  │  │     ├─ MappedType.c
            │  │  │     ├─ MappedType.h
            │  │  │     ├─ MappedType.o
            │  │  │     ├─ MemoryPointer.c
            │  │  │     ├─ MemoryPointer.h
            │  │  │     ├─ MemoryPointer.o
            │  │  │     ├─ MethodHandle.c
            │  │  │     ├─ MethodHandle.h
            │  │  │     ├─ MethodHandle.o
            │  │  │     ├─ Platform.c
            │  │  │     ├─ Platform.h
            │  │  │     ├─ Platform.o
            │  │  │     ├─ Pointer.c
            │  │  │     ├─ Pointer.h
            │  │  │     ├─ Pointer.o
            │  │  │     ├─ Struct.c
            │  │  │     ├─ Struct.h
            │  │  │     ├─ Struct.o
            │  │  │     ├─ StructByValue.c
            │  │  │     ├─ StructByValue.h
            │  │  │     ├─ StructByValue.o
            │  │  │     ├─ StructLayout.c
            │  │  │     ├─ StructLayout.o
            │  │  │     ├─ Thread.c
            │  │  │     ├─ Thread.h
            │  │  │     ├─ Thread.o
            │  │  │     ├─ Type.c
            │  │  │     ├─ Type.h
            │  │  │     ├─ Type.o
            │  │  │     ├─ Types.c
            │  │  │     ├─ Types.h
            │  │  │     ├─ Types.o
            │  │  │     ├─ Variadic.c
            │  │  │     ├─ Variadic.o
            │  │  │     ├─ compat.h
            │  │  │     ├─ extconf.h
            │  │  │     ├─ extconf.rb
            │  │  │     ├─ ffi.c
            │  │  │     ├─ ffi.o
            │  │  │     ├─ ffi_c.bundle
            │  │  │     ├─ libffi
            │  │  │     │  ├─ .allow-ai-service
            │  │  │     │  ├─ .appveyor
            │  │  │     │  │  ├─ site.exp
            │  │  │     │  │  └─ unix-noexec.exp
            │  │  │     │  ├─ .appveyor.yml
            │  │  │     │  ├─ .ci
            │  │  │     │  │  ├─ ar-lib
            │  │  │     │  │  ├─ bfin-sim.exp
            │  │  │     │  │  ├─ build-cross-in-container.sh
            │  │  │     │  │  ├─ build-in-container.sh
            │  │  │     │  │  ├─ build.sh
            │  │  │     │  │  ├─ compile
            │  │  │     │  │  ├─ install.sh
            │  │  │     │  │  ├─ m32r-sim.exp
            │  │  │     │  │  ├─ moxie-sim.exp
            │  │  │     │  │  ├─ msvs-detect
            │  │  │     │  │  ├─ or1k-sim.exp
            │  │  │     │  │  ├─ powerpc-eabisim.exp
            │  │  │     │  │  ├─ site.exp
            │  │  │     │  │  └─ wine-sim.exp
            │  │  │     │  ├─ ChangeLog.old
            │  │  │     │  ├─ LICENSE
            │  │  │     │  ├─ LICENSE-BUILDTOOLS
            │  │  │     │  ├─ Makefile.am
            │  │  │     │  ├─ Makefile.in
            │  │  │     │  ├─ README.md
            │  │  │     │  ├─ acinclude.m4
            │  │  │     │  ├─ autogen.sh
            │  │  │     │  ├─ compile
            │  │  │     │  ├─ config.guess
            │  │  │     │  ├─ config.sub
            │  │  │     │  ├─ configure
            │  │  │     │  ├─ configure.ac
            │  │  │     │  ├─ configure.host
            │  │  │     │  ├─ doc
            │  │  │     │  │  ├─ Makefile.am
            │  │  │     │  │  ├─ Makefile.in
            │  │  │     │  │  ├─ libffi.texi
            │  │  │     │  │  └─ version.texi
            │  │  │     │  ├─ fficonfig.h.in
            │  │  │     │  ├─ generate-darwin-source-and-headers.py
            │  │  │     │  ├─ include
            │  │  │     │  │  ├─ Makefile.am
            │  │  │     │  │  ├─ Makefile.in
            │  │  │     │  │  ├─ ffi.h.in
            │  │  │     │  │  ├─ ffi_cfi.h
            │  │  │     │  │  ├─ ffi_common.h
            │  │  │     │  │  └─ tramp.h
            │  │  │     │  ├─ install-sh
            │  │  │     │  ├─ libffi.map.in
            │  │  │     │  ├─ libffi.pc.in
            │  │  │     │  ├─ libffi.xcodeproj
            │  │  │     │  │  └─ project.pbxproj
            │  │  │     │  ├─ libtool-ldflags
            │  │  │     │  ├─ libtool-version
            │  │  │     │  ├─ ltmain.sh
            │  │  │     │  ├─ m4
            │  │  │     │  │  ├─ asmcfi.m4
            │  │  │     │  │  ├─ ax_append_flag.m4
            │  │  │     │  │  ├─ ax_cc_maxopt.m4
            │  │  │     │  │  ├─ ax_cflags_warn_all.m4
            │  │  │     │  │  ├─ ax_check_compile_flag.m4
            │  │  │     │  │  ├─ ax_compiler_vendor.m4
            │  │  │     │  │  ├─ ax_configure_args.m4
            │  │  │     │  │  ├─ ax_enable_builddir.m4
            │  │  │     │  │  ├─ ax_gcc_archflag.m4
            │  │  │     │  │  ├─ ax_gcc_x86_cpuid.m4
            │  │  │     │  │  ├─ ax_prepend_flag.m4
            │  │  │     │  │  └─ ax_require_defined.m4
            │  │  │     │  ├─ make_sunver.pl
            │  │  │     │  ├─ man
            │  │  │     │  │  ├─ Makefile.am
            │  │  │     │  │  ├─ Makefile.in
            │  │  │     │  │  ├─ ffi.3
            │  │  │     │  │  ├─ ffi_call.3
            │  │  │     │  │  ├─ ffi_prep_cif.3
            │  │  │     │  │  └─ ffi_prep_cif_var.3
            │  │  │     │  ├─ missing
            │  │  │     │  ├─ msvcc.sh
            │  │  │     │  ├─ src
            │  │  │     │  │  ├─ aarch64
            │  │  │     │  │  │  ├─ ffi.c
            │  │  │     │  │  │  ├─ ffitarget.h
            │  │  │     │  │  │  ├─ internal.h
            │  │  │     │  │  │  ├─ sysv.S
            │  │  │     │  │  │  └─ win64_armasm.S
            │  │  │     │  │  ├─ alpha
            │  │  │     │  │  │  ├─ ffi.c
            │  │  │     │  │  │  ├─ ffitarget.h
            │  │  │     │  │  │  ├─ internal.h
            │  │  │     │  │  │  └─ osf.S
            │  │  │     │  │  ├─ arc
            │  │  │     │  │  │  ├─ arcompact.S
            │  │  │     │  │  │  ├─ ffi.c
            │  │  │     │  │  │  └─ ffitarget.h
            │  │  │     │  │  ├─ arm
            │  │  │     │  │  │  ├─ ffi.c
            │  │  │     │  │  │  ├─ ffitarget.h
            │  │  │     │  │  │  ├─ internal.h
            │  │  │     │  │  │  ├─ sysv.S
            │  │  │     │  │  │  └─ sysv_msvc_arm32.S
            │  │  │     │  │  ├─ avr32
            │  │  │     │  │  │  ├─ ffi.c
            │  │  │     │  │  │  ├─ ffitarget.h
            │  │  │     │  │  │  └─ sysv.S
            │  │  │     │  │  ├─ bfin
            │  │  │     │  │  │  ├─ ffi.c
            │  │  │     │  │  │  ├─ ffitarget.h
            │  │  │     │  │  │  └─ sysv.S
            │  │  │     │  │  ├─ closures.c
            │  │  │     │  │  ├─ cris
            │  │  │     │  │  │  ├─ ffi.c
            │  │  │     │  │  │  ├─ ffitarget.h
            │  │  │     │  │  │  └─ sysv.S
            │  │  │     │  │  ├─ csky
            │  │  │     │  │  │  ├─ ffi.c
            │  │  │     │  │  │  ├─ ffitarget.h
            │  │  │     │  │  │  └─ sysv.S
            │  │  │     │  │  ├─ debug.c
            │  │  │     │  │  ├─ dlmalloc.c
            │  │  │     │  │  ├─ frv
            │  │  │     │  │  │  ├─ eabi.S
            │  │  │     │  │  │  ├─ ffi.c
            │  │  │     │  │  │  └─ ffitarget.h
            │  │  │     │  │  ├─ ia64
            │  │  │     │  │  │  ├─ ffi.c
            │  │  │     │  │  │  ├─ ffitarget.h
            │  │  │     │  │  │  ├─ ia64_flags.h
            │  │  │     │  │  │  └─ unix.S
            │  │  │     │  │  ├─ java_raw_api.c
            │  │  │     │  │  ├─ kvx
            │  │  │     │  │  │  ├─ asm.h
            │  │  │     │  │  │  ├─ ffi.c
            │  │  │     │  │  │  ├─ ffitarget.h
            │  │  │     │  │  │  └─ sysv.S
            │  │  │     │  │  ├─ loongarch64
            │  │  │     │  │  │  ├─ ffi.c
            │  │  │     │  │  │  ├─ ffitarget.h
            │  │  │     │  │  │  └─ sysv.S
            │  │  │     │  │  ├─ m32r
            │  │  │     │  │  │  ├─ ffi.c
            │  │  │     │  │  │  ├─ ffitarget.h
            │  │  │     │  │  │  └─ sysv.S
            │  │  │     │  │  ├─ m68k
            │  │  │     │  │  │  ├─ ffi.c
            │  │  │     │  │  │  ├─ ffitarget.h
            │  │  │     │  │  │  └─ sysv.S
            │  │  │     │  │  ├─ m88k
            │  │  │     │  │  │  ├─ ffi.c
            │  │  │     │  │  │  ├─ ffitarget.h
            │  │  │     │  │  │  └─ obsd.S
            │  │  │     │  │  ├─ metag
            │  │  │     │  │  │  ├─ ffi.c
            │  │  │     │  │  │  ├─ ffitarget.h
            │  │  │     │  │  │  └─ sysv.S
            │  │  │     │  │  ├─ microblaze
            │  │  │     │  │  │  ├─ ffi.c
            │  │  │     │  │  │  ├─ ffitarget.h
            │  │  │     │  │  │  └─ sysv.S
            │  │  │     │  │  ├─ mips
            │  │  │     │  │  │  ├─ ffi.c
            │  │  │     │  │  │  ├─ ffitarget.h
            │  │  │     │  │  │  ├─ n32.S
            │  │  │     │  │  │  └─ o32.S
            │  │  │     │  │  ├─ moxie
            │  │  │     │  │  │  ├─ eabi.S
            │  │  │     │  │  │  ├─ ffi.c
            │  │  │     │  │  │  └─ ffitarget.h
            │  │  │     │  │  ├─ or1k
            │  │  │     │  │  │  ├─ ffi.c
            │  │  │     │  │  │  ├─ ffitarget.h
            │  │  │     │  │  │  └─ sysv.S
            │  │  │     │  │  ├─ pa
            │  │  │     │  │  │  ├─ ffi.c
            │  │  │     │  │  │  ├─ ffi64.c
            │  │  │     │  │  │  ├─ ffitarget.h
            │  │  │     │  │  │  ├─ hpux32.S
            │  │  │     │  │  │  ├─ hpux64.S
            │  │  │     │  │  │  └─ linux.S
            │  │  │     │  │  ├─ powerpc
            │  │  │     │  │  │  ├─ aix.S
            │  │  │     │  │  │  ├─ aix_closure.S
            │  │  │     │  │  │  ├─ asm.h
            │  │  │     │  │  │  ├─ darwin.S
            │  │  │     │  │  │  ├─ darwin_closure.S
            │  │  │     │  │  │  ├─ ffi.c
            │  │  │     │  │  │  ├─ ffi_darwin.c
            │  │  │     │  │  │  ├─ ffi_linux64.c
            │  │  │     │  │  │  ├─ ffi_powerpc.h
            │  │  │     │  │  │  ├─ ffi_sysv.c
            │  │  │     │  │  │  ├─ ffitarget.h
            │  │  │     │  │  │  ├─ internal.h
            │  │  │     │  │  │  ├─ linux64.S
            │  │  │     │  │  │  ├─ linux64_closure.S
            │  │  │     │  │  │  ├─ ppc_closure.S
            │  │  │     │  │  │  ├─ sysv.S
            │  │  │     │  │  │  └─ t-aix
            │  │  │     │  │  ├─ prep_cif.c
            │  │  │     │  │  ├─ raw_api.c
            │  │  │     │  │  ├─ riscv
            │  │  │     │  │  │  ├─ ffi.c
            │  │  │     │  │  │  ├─ ffitarget.h
            │  │  │     │  │  │  └─ sysv.S
            │  │  │     │  │  ├─ s390
            │  │  │     │  │  │  ├─ ffi.c
            │  │  │     │  │  │  ├─ ffitarget.h
            │  │  │     │  │  │  ├─ internal.h
            │  │  │     │  │  │  └─ sysv.S
            │  │  │     │  │  ├─ sh
            │  │  │     │  │  │  ├─ ffi.c
            │  │  │     │  │  │  ├─ ffitarget.h
            │  │  │     │  │  │  └─ sysv.S
            │  │  │     │  │  ├─ sh64
            │  │  │     │  │  │  ├─ ffi.c
            │  │  │     │  │  │  ├─ ffitarget.h
            │  │  │     │  │  │  └─ sysv.S
            │  │  │     │  │  ├─ sparc
            │  │  │     │  │  │  ├─ ffi.c
            │  │  │     │  │  │  ├─ ffi64.c
            │  │  │     │  │  │  ├─ ffitarget.h
            │  │  │     │  │  │  ├─ internal.h
            │  │  │     │  │  │  ├─ v8.S
            │  │  │     │  │  │  └─ v9.S
            │  │  │     │  │  ├─ tile
            │  │  │     │  │  │  ├─ ffi.c
            │  │  │     │  │  │  ├─ ffitarget.h
            │  │  │     │  │  │  └─ tile.S
            │  │  │     │  │  ├─ tramp.c
            │  │  │     │  │  ├─ types.c
            │  │  │     │  │  ├─ vax
            │  │  │     │  │  │  ├─ elfbsd.S
            │  │  │     │  │  │  ├─ ffi.c
            │  │  │     │  │  │  └─ ffitarget.h
            │  │  │     │  │  ├─ wasm32
            │  │  │     │  │  │  ├─ ffi.c
            │  │  │     │  │  │  └─ ffitarget.h
            │  │  │     │  │  ├─ x86
            │  │  │     │  │  │  ├─ asmnames.h
            │  │  │     │  │  │  ├─ ffi.c
            │  │  │     │  │  │  ├─ ffi64.c
            │  │  │     │  │  │  ├─ ffitarget.h
            │  │  │     │  │  │  ├─ ffiw64.c
            │  │  │     │  │  │  ├─ internal.h
            │  │  │     │  │  │  ├─ internal64.h
            │  │  │     │  │  │  ├─ sysv.S
            │  │  │     │  │  │  ├─ sysv_intel.S
            │  │  │     │  │  │  ├─ unix64.S
            │  │  │     │  │  │  ├─ win64.S
            │  │  │     │  │  │  └─ win64_intel.S
            │  │  │     │  │  └─ xtensa
            │  │  │     │  │     ├─ ffi.c
            │  │  │     │  │     ├─ ffitarget.h
            │  │  │     │  │     └─ sysv.S
            │  │  │     │  ├─ stamp-h.in
            │  │  │     │  └─ testsuite
            │  │  │     │     ├─ Makefile.am
            │  │  │     │     ├─ Makefile.in
            │  │  │     │     ├─ config
            │  │  │     │     │  └─ default.exp
            │  │  │     │     ├─ emscripten
            │  │  │     │     │  ├─ build-tests.sh
            │  │  │     │     │  ├─ build.sh
            │  │  │     │     │  ├─ conftest.py
            │  │  │     │     │  ├─ node-tests.sh
            │  │  │     │     │  ├─ test.html
            │  │  │     │     │  └─ test_libffi.py
            │  │  │     │     ├─ lib
            │  │  │     │     │  ├─ libffi.exp
            │  │  │     │     │  ├─ target-libpath.exp
            │  │  │     │     │  └─ wrapper.exp
            │  │  │     │     ├─ libffi.bhaible
            │  │  │     │     │  ├─ Makefile
            │  │  │     │     │  ├─ README
            │  │  │     │     │  ├─ alignof.h
            │  │  │     │     │  ├─ bhaible.exp
            │  │  │     │     │  ├─ test-call.c
            │  │  │     │     │  ├─ test-callback.c
            │  │  │     │     │  └─ testcases.c
            │  │  │     │     ├─ libffi.call
            │  │  │     │     │  ├─ align_mixed.c
            │  │  │     │     │  ├─ align_stdcall.c
            │  │  │     │     │  ├─ bpo_38748.c
            │  │  │     │     │  ├─ call.exp
            │  │  │     │     │  ├─ callback.c
            │  │  │     │     │  ├─ callback2.c
            │  │  │     │     │  ├─ callback3.c
            │  │  │     │     │  ├─ callback4.c
            │  │  │     │     │  ├─ err_bad_typedef.c
            │  │  │     │     │  ├─ ffitest.h
            │  │  │     │     │  ├─ float.c
            │  │  │     │     │  ├─ float1.c
            │  │  │     │     │  ├─ float2.c
            │  │  │     │     │  ├─ float3.c
            │  │  │     │     │  ├─ float4.c
            │  │  │     │     │  ├─ float_va.c
            │  │  │     │     │  ├─ many.c
            │  │  │     │     │  ├─ many2.c
            │  │  │     │     │  ├─ many_double.c
            │  │  │     │     │  ├─ many_mixed.c
            │  │  │     │     │  ├─ negint.c
            │  │  │     │     │  ├─ offsets.c
            │  │  │     │     │  ├─ overread.c
            │  │  │     │     │  ├─ pr1172638.c
            │  │  │     │     │  ├─ promotion.c
            │  │  │     │     │  ├─ pyobjc_tc.c
            │  │  │     │     │  ├─ return_dbl.c
            │  │  │     │     │  ├─ return_dbl1.c
            │  │  │     │     │  ├─ return_dbl2.c
            │  │  │     │     │  ├─ return_fl.c
            │  │  │     │     │  ├─ return_fl1.c
            │  │  │     │     │  ├─ return_fl2.c
            │  │  │     │     │  ├─ return_fl3.c
            │  │  │     │     │  ├─ return_ldl.c
            │  │  │     │     │  ├─ return_ll.c
            │  │  │     │     │  ├─ return_ll1.c
            │  │  │     │     │  ├─ return_sc.c
            │  │  │     │     │  ├─ return_sl.c
            │  │  │     │     │  ├─ return_uc.c
            │  │  │     │     │  ├─ return_ul.c
            │  │  │     │     │  ├─ s55.c
            │  │  │     │     │  ├─ strlen.c
            │  │  │     │     │  ├─ strlen2.c
            │  │  │     │     │  ├─ strlen3.c
            │  │  │     │     │  ├─ strlen4.c
            │  │  │     │     │  ├─ struct1.c
            │  │  │     │     │  ├─ struct10.c
            │  │  │     │     │  ├─ struct2.c
            │  │  │     │     │  ├─ struct3.c
            │  │  │     │     │  ├─ struct4.c
            │  │  │     │     │  ├─ struct5.c
            │  │  │     │     │  ├─ struct6.c
            │  │  │     │     │  ├─ struct7.c
            │  │  │     │     │  ├─ struct8.c
            │  │  │     │     │  ├─ struct9.c
            │  │  │     │     │  ├─ struct_by_value_2.c
            │  │  │     │     │  ├─ struct_by_value_3.c
            │  │  │     │     │  ├─ struct_by_value_3f.c
            │  │  │     │     │  ├─ struct_by_value_4.c
            │  │  │     │     │  ├─ struct_by_value_4f.c
            │  │  │     │     │  ├─ struct_by_value_big.c
            │  │  │     │     │  ├─ struct_by_value_small.c
            │  │  │     │     │  ├─ struct_int_float.c
            │  │  │     │     │  ├─ struct_return_2H.c
            │  │  │     │     │  ├─ struct_return_8H.c
            │  │  │     │     │  ├─ uninitialized.c
            │  │  │     │     │  ├─ va_1.c
            │  │  │     │     │  ├─ va_2.c
            │  │  │     │     │  ├─ va_3.c
            │  │  │     │     │  ├─ va_struct1.c
            │  │  │     │     │  ├─ va_struct2.c
            │  │  │     │     │  ├─ va_struct3.c
            │  │  │     │     │  └─ x32.c
            │  │  │     │     ├─ libffi.closures
            │  │  │     │     │  ├─ closure.exp
            │  │  │     │     │  ├─ closure_fn0.c
            │  │  │     │     │  ├─ closure_fn1.c
            │  │  │     │     │  ├─ closure_fn2.c
            │  │  │     │     │  ├─ closure_fn3.c
            │  │  │     │     │  ├─ closure_fn4.c
            │  │  │     │     │  ├─ closure_fn5.c
            │  │  │     │     │  ├─ closure_fn6.c
            │  │  │     │     │  ├─ closure_loc_fn0.c
            │  │  │     │     │  ├─ closure_simple.c
            │  │  │     │     │  ├─ cls_12byte.c
            │  │  │     │     │  ├─ cls_16byte.c
            │  │  │     │     │  ├─ cls_18byte.c
            │  │  │     │     │  ├─ cls_19byte.c
            │  │  │     │     │  ├─ cls_1_1byte.c
            │  │  │     │     │  ├─ cls_20byte.c
            │  │  │     │     │  ├─ cls_20byte1.c
            │  │  │     │     │  ├─ cls_24byte.c
            │  │  │     │     │  ├─ cls_2byte.c
            │  │  │     │     │  ├─ cls_3_1byte.c
            │  │  │     │     │  ├─ cls_3byte1.c
            │  │  │     │     │  ├─ cls_3byte2.c
            │  │  │     │     │  ├─ cls_3float.c
            │  │  │     │     │  ├─ cls_4_1byte.c
            │  │  │     │     │  ├─ cls_4byte.c
            │  │  │     │     │  ├─ cls_5_1_byte.c
            │  │  │     │     │  ├─ cls_5byte.c
            │  │  │     │     │  ├─ cls_64byte.c
            │  │  │     │     │  ├─ cls_6_1_byte.c
            │  │  │     │     │  ├─ cls_6byte.c
            │  │  │     │     │  ├─ cls_7_1_byte.c
            │  │  │     │     │  ├─ cls_7byte.c
            │  │  │     │     │  ├─ cls_8byte.c
            │  │  │     │     │  ├─ cls_9byte1.c
            │  │  │     │     │  ├─ cls_9byte2.c
            │  │  │     │     │  ├─ cls_align_double.c
            │  │  │     │     │  ├─ cls_align_float.c
            │  │  │     │     │  ├─ cls_align_longdouble.c
            │  │  │     │     │  ├─ cls_align_longdouble_split.c
            │  │  │     │     │  ├─ cls_align_longdouble_split2.c
            │  │  │     │     │  ├─ cls_align_pointer.c
            │  │  │     │     │  ├─ cls_align_sint16.c
            │  │  │     │     │  ├─ cls_align_sint32.c
            │  │  │     │     │  ├─ cls_align_sint64.c
            │  │  │     │     │  ├─ cls_align_uint16.c
            │  │  │     │     │  ├─ cls_align_uint32.c
            │  │  │     │     │  ├─ cls_align_uint64.c
            │  │  │     │     │  ├─ cls_dbls_struct.c
            │  │  │     │     │  ├─ cls_double.c
            │  │  │     │     │  ├─ cls_double_va.c
            │  │  │     │     │  ├─ cls_float.c
            │  │  │     │     │  ├─ cls_longdouble.c
            │  │  │     │     │  ├─ cls_longdouble_va.c
            │  │  │     │     │  ├─ cls_many_mixed_args.c
            │  │  │     │     │  ├─ cls_many_mixed_float_double.c
            │  │  │     │     │  ├─ cls_multi_schar.c
            │  │  │     │     │  ├─ cls_multi_sshort.c
            │  │  │     │     │  ├─ cls_multi_sshortchar.c
            │  │  │     │     │  ├─ cls_multi_uchar.c
            │  │  │     │     │  ├─ cls_multi_ushort.c
            │  │  │     │     │  ├─ cls_multi_ushortchar.c
            │  │  │     │     │  ├─ cls_pointer.c
            │  │  │     │     │  ├─ cls_pointer_stack.c
            │  │  │     │     │  ├─ cls_schar.c
            │  │  │     │     │  ├─ cls_sint.c
            │  │  │     │     │  ├─ cls_sshort.c
            │  │  │     │     │  ├─ cls_struct_va1.c
            │  │  │     │     │  ├─ cls_uchar.c
            │  │  │     │     │  ├─ cls_uint.c
            │  │  │     │     │  ├─ cls_uint_va.c
            │  │  │     │     │  ├─ cls_ulong_va.c
            │  │  │     │     │  ├─ cls_ulonglong.c
            │  │  │     │     │  ├─ cls_ushort.c
            │  │  │     │     │  ├─ err_bad_abi.c
            │  │  │     │     │  ├─ ffitest.h
            │  │  │     │     │  ├─ huge_struct.c
            │  │  │     │     │  ├─ nested_struct.c
            │  │  │     │     │  ├─ nested_struct1.c
            │  │  │     │     │  ├─ nested_struct10.c
            │  │  │     │     │  ├─ nested_struct11.c
            │  │  │     │     │  ├─ nested_struct12.c
            │  │  │     │     │  ├─ nested_struct13.c
            │  │  │     │     │  ├─ nested_struct2.c
            │  │  │     │     │  ├─ nested_struct3.c
            │  │  │     │     │  ├─ nested_struct4.c
            │  │  │     │     │  ├─ nested_struct5.c
            │  │  │     │     │  ├─ nested_struct6.c
            │  │  │     │     │  ├─ nested_struct7.c
            │  │  │     │     │  ├─ nested_struct8.c
            │  │  │     │     │  ├─ nested_struct9.c
            │  │  │     │     │  ├─ problem1.c
            │  │  │     │     │  ├─ single_entry_structs1.c
            │  │  │     │     │  ├─ single_entry_structs2.c
            │  │  │     │     │  ├─ single_entry_structs3.c
            │  │  │     │     │  ├─ stret_large.c
            │  │  │     │     │  ├─ stret_large2.c
            │  │  │     │     │  ├─ stret_medium.c
            │  │  │     │     │  ├─ stret_medium2.c
            │  │  │     │     │  ├─ testclosure.c
            │  │  │     │     │  ├─ unwindtest.cc
            │  │  │     │     │  └─ unwindtest_ffi_call.cc
            │  │  │     │     ├─ libffi.complex
            │  │  │     │     │  ├─ cls_align_complex.inc
            │  │  │     │     │  ├─ cls_align_complex_double.c
            │  │  │     │     │  ├─ cls_align_complex_float.c
            │  │  │     │     │  ├─ cls_align_complex_longdouble.c
            │  │  │     │     │  ├─ cls_complex.inc
            │  │  │     │     │  ├─ cls_complex_double.c
            │  │  │     │     │  ├─ cls_complex_float.c
            │  │  │     │     │  ├─ cls_complex_longdouble.c
            │  │  │     │     │  ├─ cls_complex_struct.inc
            │  │  │     │     │  ├─ cls_complex_struct_double.c
            │  │  │     │     │  ├─ cls_complex_struct_float.c
            │  │  │     │     │  ├─ cls_complex_struct_longdouble.c
            │  │  │     │     │  ├─ cls_complex_va.inc
            │  │  │     │     │  ├─ cls_complex_va_double.c
            │  │  │     │     │  ├─ cls_complex_va_float.c
            │  │  │     │     │  ├─ cls_complex_va_longdouble.c
            │  │  │     │     │  ├─ complex.exp
            │  │  │     │     │  ├─ complex.inc
            │  │  │     │     │  ├─ complex_defs_double.inc
            │  │  │     │     │  ├─ complex_defs_float.inc
            │  │  │     │     │  ├─ complex_defs_longdouble.inc
            │  │  │     │     │  ├─ complex_double.c
            │  │  │     │     │  ├─ complex_float.c
            │  │  │     │     │  ├─ complex_int.c
            │  │  │     │     │  ├─ complex_longdouble.c
            │  │  │     │     │  ├─ ffitest.h
            │  │  │     │     │  ├─ many_complex.inc
            │  │  │     │     │  ├─ many_complex_double.c
            │  │  │     │     │  ├─ many_complex_float.c
            │  │  │     │     │  ├─ many_complex_longdouble.c
            │  │  │     │     │  ├─ return_complex.inc
            │  │  │     │     │  ├─ return_complex1.inc
            │  │  │     │     │  ├─ return_complex1_double.c
            │  │  │     │     │  ├─ return_complex1_float.c
            │  │  │     │     │  ├─ return_complex1_longdouble.c
            │  │  │     │     │  ├─ return_complex2.inc
            │  │  │     │     │  ├─ return_complex2_double.c
            │  │  │     │     │  ├─ return_complex2_float.c
            │  │  │     │     │  ├─ return_complex2_longdouble.c
            │  │  │     │     │  ├─ return_complex_double.c
            │  │  │     │     │  ├─ return_complex_float.c
            │  │  │     │     │  └─ return_complex_longdouble.c
            │  │  │     │     └─ libffi.go
            │  │  │     │        ├─ aa-direct.c
            │  │  │     │        ├─ closure1.c
            │  │  │     │        ├─ ffitest.h
            │  │  │     │        ├─ go.exp
            │  │  │     │        └─ static-chain.h
            │  │  │     ├─ libffi.bsd.mk
            │  │  │     ├─ libffi.darwin.mk
            │  │  │     ├─ libffi.gnu.mk
            │  │  │     ├─ libffi.mk
            │  │  │     ├─ libffi.vc.mk
            │  │  │     ├─ libffi.vc64.mk
            │  │  │     ├─ rbffi.h
            │  │  │     └─ rbffi_endian.h
            │  │  ├─ ffi.gemspec
            │  │  ├─ lib
            │  │  │  ├─ ffi
            │  │  │  │  ├─ abstract_memory.rb
            │  │  │  │  ├─ autopointer.rb
            │  │  │  │  ├─ buffer.rb
            │  │  │  │  ├─ callback.rb
            │  │  │  │  ├─ compat.rb
            │  │  │  │  ├─ data_converter.rb
            │  │  │  │  ├─ dynamic_library.rb
            │  │  │  │  ├─ enum.rb
            │  │  │  │  ├─ errno.rb
            │  │  │  │  ├─ ffi.rb
            │  │  │  │  ├─ function.rb
            │  │  │  │  ├─ io.rb
            │  │  │  │  ├─ library.rb
            │  │  │  │  ├─ library_path.rb
            │  │  │  │  ├─ managedstruct.rb
            │  │  │  │  ├─ memorypointer.rb
            │  │  │  │  ├─ platform
            │  │  │  │  │  ├─ aarch64-darwin
            │  │  │  │  │  │  └─ types.conf
            │  │  │  │  │  ├─ aarch64-freebsd
            │  │  │  │  │  │  └─ types.conf
            │  │  │  │  │  ├─ aarch64-freebsd12
            │  │  │  │  │  │  └─ types.conf
            │  │  │  │  │  ├─ aarch64-linux
            │  │  │  │  │  │  └─ types.conf
            │  │  │  │  │  ├─ aarch64-openbsd
            │  │  │  │  │  │  └─ types.conf
            │  │  │  │  │  ├─ aarch64-windows
            │  │  │  │  │  │  └─ types.conf
            │  │  │  │  │  ├─ arm-freebsd
            │  │  │  │  │  │  └─ types.conf
            │  │  │  │  │  ├─ arm-freebsd12
            │  │  │  │  │  │  └─ types.conf
            │  │  │  │  │  ├─ arm-linux
            │  │  │  │  │  │  └─ types.conf
            │  │  │  │  │  ├─ hppa1.1-linux
            │  │  │  │  │  │  └─ types.conf
            │  │  │  │  │  ├─ hppa2.0-linux
            │  │  │  │  │  │  └─ types.conf
            │  │  │  │  │  ├─ i386-cygwin
            │  │  │  │  │  │  └─ types.conf
            │  │  │  │  │  ├─ i386-darwin
            │  │  │  │  │  │  └─ types.conf
            │  │  │  │  │  ├─ i386-freebsd
            │  │  │  │  │  │  └─ types.conf
            │  │  │  │  │  ├─ i386-freebsd12
            │  │  │  │  │  │  └─ types.conf
            │  │  │  │  │  ├─ i386-gnu
            │  │  │  │  │  │  └─ types.conf
            │  │  │  │  │  ├─ i386-linux
            │  │  │  │  │  │  └─ types.conf
            │  │  │  │  │  ├─ i386-netbsd
            │  │  │  │  │  │  └─ types.conf
            │  │  │  │  │  ├─ i386-openbsd
            │  │  │  │  │  │  └─ types.conf
            │  │  │  │  │  ├─ i386-solaris
            │  │  │  │  │  │  └─ types.conf
            │  │  │  │  │  ├─ i386-windows
            │  │  │  │  │  │  └─ types.conf
            │  │  │  │  │  ├─ ia64-linux
            │  │  │  │  │  │  └─ types.conf
            │  │  │  │  │  ├─ loongarch64-linux
            │  │  │  │  │  │  └─ types.conf
            │  │  │  │  │  ├─ mips-linux
            │  │  │  │  │  │  └─ types.conf
            │  │  │  │  │  ├─ mips64-linux
            │  │  │  │  │  │  └─ types.conf
            │  │  │  │  │  ├─ mips64el-linux
            │  │  │  │  │  │  └─ types.conf
            │  │  │  │  │  ├─ mipsel-linux
            │  │  │  │  │  │  └─ types.conf
            │  │  │  │  │  ├─ mipsisa32r6-linux
            │  │  │  │  │  │  └─ types.conf
            │  │  │  │  │  ├─ mipsisa32r6el-linux
            │  │  │  │  │  │  └─ types.conf
            │  │  │  │  │  ├─ mipsisa64r6-linux
            │  │  │  │  │  │  └─ types.conf
            │  │  │  │  │  ├─ mipsisa64r6el-linux
            │  │  │  │  │  │  └─ types.conf
            │  │  │  │  │  ├─ powerpc-aix
            │  │  │  │  │  │  └─ types.conf
            │  │  │  │  │  ├─ powerpc-darwin
            │  │  │  │  │  │  └─ types.conf
            │  │  │  │  │  ├─ powerpc-linux
            │  │  │  │  │  │  └─ types.conf
            │  │  │  │  │  ├─ powerpc-openbsd
            │  │  │  │  │  │  └─ types.conf
            │  │  │  │  │  ├─ powerpc64-linux
            │  │  │  │  │  │  └─ types.conf
            │  │  │  │  │  ├─ powerpc64le-linux
            │  │  │  │  │  │  └─ types.conf
            │  │  │  │  │  ├─ riscv64-linux
            │  │  │  │  │  │  └─ types.conf
            │  │  │  │  │  ├─ s390-linux
            │  │  │  │  │  │  └─ types.conf
            │  │  │  │  │  ├─ s390x-linux
            │  │  │  │  │  │  └─ types.conf
            │  │  │  │  │  ├─ sparc-linux
            │  │  │  │  │  │  └─ types.conf
            │  │  │  │  │  ├─ sparc-solaris
            │  │  │  │  │  │  └─ types.conf
            │  │  │  │  │  ├─ sparcv9-linux
            │  │  │  │  │  │  └─ types.conf
            │  │  │  │  │  ├─ sparcv9-openbsd
            │  │  │  │  │  │  └─ types.conf
            │  │  │  │  │  ├─ sparcv9-solaris
            │  │  │  │  │  │  └─ types.conf
            │  │  │  │  │  ├─ sw_64-linux
            │  │  │  │  │  │  └─ types.conf
            │  │  │  │  │  ├─ x86_64-cygwin
            │  │  │  │  │  │  └─ types.conf
            │  │  │  │  │  ├─ x86_64-darwin
            │  │  │  │  │  │  └─ types.conf
            │  │  │  │  │  ├─ x86_64-dragonflybsd
            │  │  │  │  │  │  └─ types.conf
            │  │  │  │  │  ├─ x86_64-freebsd
            │  │  │  │  │  │  └─ types.conf
            │  │  │  │  │  ├─ x86_64-freebsd12
            │  │  │  │  │  │  └─ types.conf
            │  │  │  │  │  ├─ x86_64-haiku
            │  │  │  │  │  │  └─ types.conf
            │  │  │  │  │  ├─ x86_64-linux
            │  │  │  │  │  │  └─ types.conf
            │  │  │  │  │  ├─ x86_64-msys
            │  │  │  │  │  │  └─ types.conf
            │  │  │  │  │  ├─ x86_64-netbsd
            │  │  │  │  │  │  └─ types.conf
            │  │  │  │  │  ├─ x86_64-openbsd
            │  │  │  │  │  │  └─ types.conf
            │  │  │  │  │  ├─ x86_64-solaris
            │  │  │  │  │  │  └─ types.conf
            │  │  │  │  │  └─ x86_64-windows
            │  │  │  │  │     └─ types.conf
            │  │  │  │  ├─ platform.rb
            │  │  │  │  ├─ pointer.rb
            │  │  │  │  ├─ struct.rb
            │  │  │  │  ├─ struct_by_reference.rb
            │  │  │  │  ├─ struct_layout.rb
            │  │  │  │  ├─ struct_layout_builder.rb
            │  │  │  │  ├─ tools
            │  │  │  │  │  ├─ const_generator.rb
            │  │  │  │  │  ├─ generator.rb
            │  │  │  │  │  ├─ generator_task.rb
            │  │  │  │  │  ├─ struct_generator.rb
            │  │  │  │  │  └─ types_generator.rb
            │  │  │  │  ├─ types.rb
            │  │  │  │  ├─ union.rb
            │  │  │  │  ├─ variadic.rb
            │  │  │  │  └─ version.rb
            │  │  │  ├─ ffi.rb
            │  │  │  └─ ffi_c.bundle
            │  │  ├─ rakelib
            │  │  │  └─ ffi_gem_helper.rb
            │  │  ├─ samples
            │  │  │  ├─ getlogin.rb
            │  │  │  ├─ getpid.rb
            │  │  │  ├─ gettimeofday.rb
            │  │  │  ├─ hello.rb
            │  │  │  ├─ hello_ractor.rb
            │  │  │  ├─ inotify.rb
            │  │  │  ├─ pty.rb
            │  │  │  ├─ qsort.rb
            │  │  │  └─ qsort_ractor.rb
            │  │  └─ sig
            │  │     ├─ ffi
            │  │     │  ├─ abstract_memory.rbs
            │  │     │  ├─ auto_pointer.rbs
            │  │     │  ├─ buffer.rbs
            │  │     │  ├─ data_converter.rbs
            │  │     │  ├─ dynamic_library.rbs
            │  │     │  ├─ enum.rbs
            │  │     │  ├─ function.rbs
            │  │     │  ├─ library.rbs
            │  │     │  ├─ native_type.rbs
            │  │     │  ├─ pointer.rbs
            │  │     │  ├─ struct.rbs
            │  │     │  ├─ struct_by_reference.rbs
            │  │     │  ├─ struct_by_value.rbs
            │  │     │  ├─ struct_layout.rbs
            │  │     │  ├─ struct_layout_builder.rbs
            │  │     │  └─ type.rbs
            │  │     └─ ffi.rbs
            │  ├─ fourflusher-2.3.1
            │  │  ├─ .rubocop.yml
            │  │  ├─ .travis.yml
            │  │  ├─ CHANGELOG.md
            │  │  ├─ Gemfile
            │  │  ├─ Gemfile.lock
            │  │  ├─ LICENSE.txt
            │  │  ├─ README.md
            │  │  ├─ Rakefile
            │  │  ├─ bin
            │  │  │  ├─ console
            │  │  │  └─ setup
            │  │  ├─ fourflusher.gemspec
            │  │  └─ lib
            │  │     ├─ fourflusher
            │  │     │  ├─ compat.rb
            │  │     │  ├─ executable.rb
            │  │     │  ├─ find.rb
            │  │     │  ├─ simctl.rb
            │  │     │  ├─ version.rb
            │  │     │  └─ xcodebuild.rb
            │  │     └─ fourflusher.rb
            │  ├─ fuzzy_match-2.0.4
            │  │  ├─ .rspec
            │  │  ├─ CHANGELOG
            │  │  ├─ Gemfile
            │  │  ├─ LICENSE
            │  │  ├─ README.markdown
            │  │  ├─ Rakefile
            │  │  ├─ THANKS-WILLIAM-JAMES.rb
            │  │  ├─ benchmark
            │  │  │  ├─ before-with-free.txt
            │  │  │  ├─ before-without-last-result.txt
            │  │  │  ├─ before.txt
            │  │  │  └─ memory.rb
            │  │  ├─ bin
            │  │  │  └─ fuzzy_match
            │  │  ├─ fuzzy_match.gemspec
            │  │  ├─ groupings-screenshot.png
            │  │  ├─ highlevel.graffle
            │  │  ├─ highlevel.png
            │  │  ├─ lib
            │  │  │  ├─ fuzzy_match
            │  │  │  │  ├─ cached_result.rb
            │  │  │  │  ├─ record.rb
            │  │  │  │  ├─ result.rb
            │  │  │  │  ├─ rule
            │  │  │  │  │  ├─ grouping.rb
            │  │  │  │  │  └─ identity.rb
            │  │  │  │  ├─ rule.rb
            │  │  │  │  ├─ score
            │  │  │  │  │  ├─ amatch.rb
            │  │  │  │  │  └─ pure_ruby.rb
            │  │  │  │  ├─ score.rb
            │  │  │  │  ├─ similarity.rb
            │  │  │  │  └─ version.rb
            │  │  │  └─ fuzzy_match.rb
            │  │  └─ spec
            │  │     ├─ amatch_spec.rb
            │  │     ├─ cache_spec.rb
            │  │     ├─ foo.rb
            │  │     ├─ fuzzy_match_spec.rb
            │  │     ├─ grouping_spec.rb
            │  │     ├─ identity_spec.rb
            │  │     ├─ record_spec.rb
            │  │     └─ spec_helper.rb
            │  ├─ gh_inspector-1.1.3
            │  │  ├─ .rspec
            │  │  ├─ .rubocop.yml
            │  │  ├─ .travis.yml
            │  │  ├─ CHANGELOG.md
            │  │  ├─ Gemfile
            │  │  ├─ LICENSE
            │  │  ├─ README.md
            │  │  ├─ Rakefile
            │  │  ├─ bin
            │  │  │  ├─ console
            │  │  │  └─ setup
            │  │  ├─ gh_inspector.gemspec
            │  │  └─ lib
            │  │     ├─ gh_inspector
            │  │     │  ├─ evidence.rb
            │  │     │  ├─ exception_hound.rb
            │  │     │  ├─ inspector.rb
            │  │     │  ├─ sidekick.rb
            │  │     │  └─ version.rb
            │  │     └─ gh_inspector.rb
            │  ├─ httpclient-2.9.0
            │  │  ├─ README.md
            │  │  ├─ bin
            │  │  │  ├─ httpclient
            │  │  │  └─ jsonclient
            │  │  ├─ lib
            │  │  │  ├─ hexdump.rb
            │  │  │  ├─ http-access2
            │  │  │  │  ├─ cookie.rb
            │  │  │  │  └─ http.rb
            │  │  │  ├─ http-access2.rb
            │  │  │  ├─ httpclient
            │  │  │  │  ├─ auth.rb
            │  │  │  │  ├─ cacert.pem
            │  │  │  │  ├─ cacert1024.pem
            │  │  │  │  ├─ connection.rb
            │  │  │  │  ├─ cookie.rb
            │  │  │  │  ├─ http.rb
            │  │  │  │  ├─ include_client.rb
            │  │  │  │  ├─ jruby_ssl_socket.rb
            │  │  │  │  ├─ session.rb
            │  │  │  │  ├─ ssl_config.rb
            │  │  │  │  ├─ ssl_socket.rb
            │  │  │  │  ├─ timeout.rb
            │  │  │  │  ├─ util.rb
            │  │  │  │  ├─ version.rb
            │  │  │  │  └─ webagent-cookie.rb
            │  │  │  ├─ httpclient.rb
            │  │  │  ├─ jsonclient.rb
            │  │  │  └─ oauthclient.rb
            │  │  ├─ sample
            │  │  │  ├─ async.rb
            │  │  │  ├─ auth.rb
            │  │  │  ├─ cookie.rb
            │  │  │  ├─ dav.rb
            │  │  │  ├─ generate_test_keys.rb
            │  │  │  ├─ howto.rb
            │  │  │  ├─ jsonclient.rb
            │  │  │  ├─ oauth_buzz.rb
            │  │  │  ├─ oauth_friendfeed.rb
            │  │  │  ├─ oauth_twitter.rb
            │  │  │  ├─ ssl
            │  │  │  │  ├─ 0cert.pem
            │  │  │  │  ├─ 0key.pem
            │  │  │  │  ├─ 1000cert.pem
            │  │  │  │  ├─ 1000key.pem
            │  │  │  │  ├─ htdocs
            │  │  │  │  │  └─ index.html
            │  │  │  │  ├─ ssl_client.rb
            │  │  │  │  └─ webrick_httpsd.rb
            │  │  │  ├─ stream.rb
            │  │  │  ├─ thread.rb
            │  │  │  └─ wcat.rb
            │  │  └─ test
            │  │     ├─ ca-chain.pem
            │  │     ├─ ca.cert
            │  │     ├─ ca.key
            │  │     ├─ ca.srl
            │  │     ├─ client-pass.key
            │  │     ├─ client.cert
            │  │     ├─ client.key
            │  │     ├─ fixtures
            │  │     │  ├─ verify.alt.cert
            │  │     │  ├─ verify.foo.cert
            │  │     │  ├─ verify.key
            │  │     │  └─ verify.localhost.cert
            │  │     ├─ helper.rb
            │  │     ├─ htdigest
            │  │     ├─ htpasswd
            │  │     ├─ jruby_ssl_socket
            │  │     │  └─ test_pemutils.rb
            │  │     ├─ runner.rb
            │  │     ├─ server.cert
            │  │     ├─ server.key
            │  │     ├─ sslsvr.rb
            │  │     ├─ subca.cert
            │  │     ├─ subca.key
            │  │     ├─ subca.srl
            │  │     ├─ test_auth.rb
            │  │     ├─ test_cookie.rb
            │  │     ├─ test_hexdump.rb
            │  │     ├─ test_http-access2.rb
            │  │     ├─ test_httpclient.rb
            │  │     ├─ test_include_client.rb
            │  │     ├─ test_jsonclient.rb
            │  │     ├─ test_ssl.rb
            │  │     └─ test_webagent-cookie.rb
            │  ├─ i18n-1.14.7
            │  │  ├─ MIT-LICENSE
            │  │  ├─ README.md
            │  │  └─ lib
            │  │     ├─ i18n
            │  │     │  ├─ backend
            │  │     │  │  ├─ base.rb
            │  │     │  │  ├─ cache.rb
            │  │     │  │  ├─ cache_file.rb
            │  │     │  │  ├─ cascade.rb
            │  │     │  │  ├─ chain.rb
            │  │     │  │  ├─ fallbacks.rb
            │  │     │  │  ├─ flatten.rb
            │  │     │  │  ├─ gettext.rb
            │  │     │  │  ├─ interpolation_compiler.rb
            │  │     │  │  ├─ key_value.rb
            │  │     │  │  ├─ lazy_loadable.rb
            │  │     │  │  ├─ memoize.rb
            │  │     │  │  ├─ metadata.rb
            │  │     │  │  ├─ pluralization.rb
            │  │     │  │  ├─ simple.rb
            │  │     │  │  └─ transliterator.rb
            │  │     │  ├─ backend.rb
            │  │     │  ├─ config.rb
            │  │     │  ├─ exceptions.rb
            │  │     │  ├─ gettext
            │  │     │  │  ├─ helpers.rb
            │  │     │  │  └─ po_parser.rb
            │  │     │  ├─ gettext.rb
            │  │     │  ├─ interpolate
            │  │     │  │  └─ ruby.rb
            │  │     │  ├─ locale
            │  │     │  │  ├─ fallbacks.rb
            │  │     │  │  ├─ tag
            │  │     │  │  │  ├─ parents.rb
            │  │     │  │  │  ├─ rfc4646.rb
            │  │     │  │  │  └─ simple.rb
            │  │     │  │  └─ tag.rb
            │  │     │  ├─ locale.rb
            │  │     │  ├─ middleware.rb
            │  │     │  ├─ tests
            │  │     │  │  ├─ basics.rb
            │  │     │  │  ├─ defaults.rb
            │  │     │  │  ├─ interpolation.rb
            │  │     │  │  ├─ link.rb
            │  │     │  │  ├─ localization
            │  │     │  │  │  ├─ date.rb
            │  │     │  │  │  ├─ date_time.rb
            │  │     │  │  │  ├─ procs.rb
            │  │     │  │  │  └─ time.rb
            │  │     │  │  ├─ localization.rb
            │  │     │  │  ├─ lookup.rb
            │  │     │  │  ├─ pluralization.rb
            │  │     │  │  └─ procs.rb
            │  │     │  ├─ tests.rb
            │  │     │  ├─ utils.rb
            │  │     │  └─ version.rb
            │  │     └─ i18n.rb
            │  ├─ json-2.7.6
            │  │  ├─ BSDL
            │  │  ├─ CHANGES.md
            │  │  ├─ COPYING
            │  │  ├─ LEGAL
            │  │  ├─ README.md
            │  │  ├─ ext
            │  │  │  └─ json
            │  │  │     └─ ext
            │  │  │        ├─ fbuffer
            │  │  │        │  └─ fbuffer.h
            │  │  │        ├─ generator
            │  │  │        │  ├─ .sitearchdir.-.json.-.ext.time
            │  │  │        │  ├─ Makefile
            │  │  │        │  ├─ extconf.rb
            │  │  │        │  ├─ generator.bundle
            │  │  │        │  ├─ generator.c
            │  │  │        │  ├─ generator.h
            │  │  │        │  └─ generator.o
            │  │  │        └─ parser
            │  │  │           ├─ .sitearchdir.-.json.-.ext.time
            │  │  │           ├─ Makefile
            │  │  │           ├─ extconf.rb
            │  │  │           ├─ parser.bundle
            │  │  │           ├─ parser.c
            │  │  │           ├─ parser.h
            │  │  │           ├─ parser.o
            │  │  │           └─ parser.rl
            │  │  ├─ json.gemspec
            │  │  └─ lib
            │  │     ├─ json
            │  │     │  ├─ add
            │  │     │  │  ├─ bigdecimal.rb
            │  │     │  │  ├─ complex.rb
            │  │     │  │  ├─ core.rb
            │  │     │  │  ├─ date.rb
            │  │     │  │  ├─ date_time.rb
            │  │     │  │  ├─ exception.rb
            │  │     │  │  ├─ ostruct.rb
            │  │     │  │  ├─ range.rb
            │  │     │  │  ├─ rational.rb
            │  │     │  │  ├─ regexp.rb
            │  │     │  │  ├─ set.rb
            │  │     │  │  ├─ struct.rb
            │  │     │  │  ├─ symbol.rb
            │  │     │  │  └─ time.rb
            │  │     │  ├─ common.rb
            │  │     │  ├─ ext
            │  │     │  │  ├─ generator
            │  │     │  │  │  └─ state.rb
            │  │     │  │  ├─ generator.bundle
            │  │     │  │  └─ parser.bundle
            │  │     │  ├─ ext.rb
            │  │     │  ├─ generic_object.rb
            │  │     │  ├─ pure
            │  │     │  │  ├─ generator.rb
            │  │     │  │  └─ parser.rb
            │  │     │  ├─ pure.rb
            │  │     │  └─ version.rb
            │  │     └─ json.rb
            │  ├─ logger-1.7.0
            │  │  ├─ .document
            │  │  ├─ .rdoc_options
            │  │  ├─ BSDL
            │  │  ├─ COPYING
            │  │  ├─ README.md
            │  │  └─ lib
            │  │     ├─ logger
            │  │     │  ├─ errors.rb
            │  │     │  ├─ formatter.rb
            │  │     │  ├─ log_device.rb
            │  │     │  ├─ period.rb
            │  │     │  ├─ severity.rb
            │  │     │  └─ version.rb
            │  │     └─ logger.rb
            │  ├─ minitest-5.25.4
            │  │  ├─ .autotest
            │  │  ├─ History.rdoc
            │  │  ├─ Manifest.txt
            │  │  ├─ README.rdoc
            │  │  ├─ Rakefile
            │  │  ├─ design_rationale.rb
            │  │  ├─ lib
            │  │  │  ├─ hoe
            │  │  │  │  └─ minitest.rb
            │  │  │  ├─ minitest
            │  │  │  │  ├─ assertions.rb
            │  │  │  │  ├─ autorun.rb
            │  │  │  │  ├─ benchmark.rb
            │  │  │  │  ├─ compress.rb
            │  │  │  │  ├─ error_on_warning.rb
            │  │  │  │  ├─ expectations.rb
            │  │  │  │  ├─ hell.rb
            │  │  │  │  ├─ manual_plugins.rb
            │  │  │  │  ├─ mock.rb
            │  │  │  │  ├─ parallel.rb
            │  │  │  │  ├─ pride.rb
            │  │  │  │  ├─ pride_plugin.rb
            │  │  │  │  ├─ spec.rb
            │  │  │  │  ├─ test.rb
            │  │  │  │  ├─ test_task.rb
            │  │  │  │  └─ unit.rb
            │  │  │  └─ minitest.rb
            │  │  └─ test
            │  │     └─ minitest
            │  │        ├─ metametameta.rb
            │  │        ├─ test_minitest_assertions.rb
            │  │        ├─ test_minitest_benchmark.rb
            │  │        ├─ test_minitest_mock.rb
            │  │        ├─ test_minitest_reporter.rb
            │  │        ├─ test_minitest_spec.rb
            │  │        ├─ test_minitest_test.rb
            │  │        └─ test_minitest_test_task.rb
            │  ├─ molinillo-0.8.0
            │  │  ├─ ARCHITECTURE.md
            │  │  ├─ CHANGELOG.md
            │  │  ├─ LICENSE
            │  │  ├─ README.md
            │  │  └─ lib
            │  │     ├─ molinillo
            │  │     │  ├─ delegates
            │  │     │  │  ├─ resolution_state.rb
            │  │     │  │  └─ specification_provider.rb
            │  │     │  ├─ dependency_graph
            │  │     │  │  ├─ action.rb
            │  │     │  │  ├─ add_edge_no_circular.rb
            │  │     │  │  ├─ add_vertex.rb
            │  │     │  │  ├─ delete_edge.rb
            │  │     │  │  ├─ detach_vertex_named.rb
            │  │     │  │  ├─ log.rb
            │  │     │  │  ├─ set_payload.rb
            │  │     │  │  ├─ tag.rb
            │  │     │  │  └─ vertex.rb
            │  │     │  ├─ dependency_graph.rb
            │  │     │  ├─ errors.rb
            │  │     │  ├─ gem_metadata.rb
            │  │     │  ├─ modules
            │  │     │  │  ├─ specification_provider.rb
            │  │     │  │  └─ ui.rb
            │  │     │  ├─ resolution.rb
            │  │     │  ├─ resolver.rb
            │  │     │  └─ state.rb
            │  │     └─ molinillo.rb
            │  ├─ mutex_m-0.3.0
            │  │  ├─ BSDL
            │  │  ├─ COPYING
            │  │  ├─ README.md
            │  │  ├─ lib
            │  │  │  └─ mutex_m.rb
            │  │  └─ sig
            │  │     └─ mutex_m.rbs
            │  ├─ nanaimo-0.3.0
            │  │  ├─ .rspec
            │  │  ├─ .rubocop.yml
            │  │  ├─ .rubocop_todo.yml
            │  │  ├─ .travis.yml
            │  │  ├─ CHANGELOG.md
            │  │  ├─ CODE_OF_CONDUCT.md
            │  │  ├─ Gemfile
            │  │  ├─ Gemfile.lock
            │  │  ├─ LICENSE.txt
            │  │  ├─ README.md
            │  │  ├─ Rakefile
            │  │  ├─ bin
            │  │  │  ├─ console
            │  │  │  └─ setup
            │  │  ├─ lib
            │  │  │  ├─ nanaimo
            │  │  │  │  ├─ object.rb
            │  │  │  │  ├─ plist.rb
            │  │  │  │  ├─ reader.rb
            │  │  │  │  ├─ unicode
            │  │  │  │  │  ├─ next_step_mapping.rb
            │  │  │  │  │  └─ quote_maps.rb
            │  │  │  │  ├─ unicode.rb
            │  │  │  │  ├─ version.rb
            │  │  │  │  ├─ writer
            │  │  │  │  │  ├─ pbxproj.rb
            │  │  │  │  │  └─ xml.rb
            │  │  │  │  └─ writer.rb
            │  │  │  └─ nanaimo.rb
            │  │  └─ nanaimo.gemspec
            │  ├─ nap-1.1.0
            │  │  ├─ LICENSE
            │  │  ├─ README.md
            │  │  ├─ lib
            │  │  │  ├─ rest
            │  │  │  │  ├─ error.rb
            │  │  │  │  ├─ request.rb
            │  │  │  │  └─ response.rb
            │  │  │  └─ rest.rb
            │  │  └─ support
            │  │     └─ cacert.pem
            │  ├─ netrc-0.11.0
            │  │  ├─ LICENSE.md
            │  │  ├─ Readme.md
            │  │  ├─ changelog.txt
            │  │  ├─ data
            │  │  │  ├─ default_only.netrc
            │  │  │  ├─ login.netrc
            │  │  │  ├─ newlineless.netrc
            │  │  │  ├─ password.netrc
            │  │  │  ├─ permissive.netrc
            │  │  │  ├─ sample.netrc
            │  │  │  ├─ sample_multi.netrc
            │  │  │  ├─ sample_multi_with_default.netrc
            │  │  │  └─ sample_with_default.netrc
            │  │  ├─ lib
            │  │  │  └─ netrc.rb
            │  │  └─ test
            │  │     ├─ test_lex.rb
            │  │     ├─ test_netrc.rb
            │  │     └─ test_parse.rb
            │  ├─ nkf-0.2.0
            │  │  ├─ Gemfile
            │  │  ├─ LICENSE.txt
            │  │  ├─ README.md
            │  │  ├─ Rakefile
            │  │  ├─ bin
            │  │  │  ├─ console
            │  │  │  └─ setup
            │  │  ├─ ext
            │  │  │  ├─ java
            │  │  │  │  └─ org
            │  │  │  │     └─ jruby
            │  │  │  │        └─ ext
            │  │  │  │           └─ nkf
            │  │  │  │              ├─ Command.java
            │  │  │  │              ├─ CommandParser.java
            │  │  │  │              ├─ NKFLibrary.java
            │  │  │  │              ├─ Option.java
            │  │  │  │              ├─ Options.java
            │  │  │  │              └─ RubyNKF.java
            │  │  │  └─ nkf
            │  │  │     ├─ .sitearchdir.time
            │  │  │     ├─ Makefile
            │  │  │     ├─ extconf.rb
            │  │  │     ├─ nkf-utf8
            │  │  │     │  ├─ config.h
            │  │  │     │  ├─ nkf.c
            │  │  │     │  ├─ nkf.h
            │  │  │     │  ├─ utf8tbl.c
            │  │  │     │  └─ utf8tbl.h
            │  │  │     ├─ nkf.bundle
            │  │  │     ├─ nkf.c
            │  │  │     └─ nkf.o
            │  │  ├─ lib
            │  │  │  ├─ kconv.rb
            │  │  │  ├─ nkf.bundle
            │  │  │  └─ nkf.rb
            │  │  └─ nkf.gemspec
            │  ├─ public_suffix-4.0.7
            │  │  ├─ .rubocop.yml
            │  │  ├─ .rubocop_opinionated.yml
            │  │  ├─ .yardopts
            │  │  ├─ 2.0-Upgrade.md
            │  │  ├─ CHANGELOG.md
            │  │  ├─ Gemfile
            │  │  ├─ LICENSE.txt
            │  │  ├─ README.md
            │  │  ├─ Rakefile
            │  │  ├─ SECURITY.md
            │  │  ├─ bin
            │  │  │  └─ console
            │  │  ├─ data
            │  │  │  └─ list.txt
            │  │  ├─ lib
            │  │  │  ├─ public_suffix
            │  │  │  │  ├─ domain.rb
            │  │  │  │  ├─ errors.rb
            │  │  │  │  ├─ list.rb
            │  │  │  │  ├─ rule.rb
            │  │  │  │  └─ version.rb
            │  │  │  └─ public_suffix.rb
            │  │  ├─ public_suffix.gemspec
            │  │  └─ test
            │  │     ├─ .empty
            │  │     ├─ acceptance_test.rb
            │  │     ├─ benchmarks
            │  │     │  ├─ bm_find.rb
            │  │     │  ├─ bm_find_all.rb
            │  │     │  ├─ bm_names.rb
            │  │     │  ├─ bm_select.rb
            │  │     │  ├─ bm_select_incremental.rb
            │  │     │  └─ bm_valid.rb
            │  │     ├─ profilers
            │  │     │  ├─ domain_profiler.rb
            │  │     │  ├─ find_profiler.rb
            │  │     │  ├─ find_profiler_jp.rb
            │  │     │  ├─ initialization_profiler.rb
            │  │     │  ├─ list_profsize.rb
            │  │     │  └─ object_binsize.rb
            │  │     ├─ psl_test.rb
            │  │     ├─ test_helper.rb
            │  │     ├─ tests.txt
            │  │     └─ unit
            │  │        ├─ domain_test.rb
            │  │        ├─ errors_test.rb
            │  │        ├─ list_test.rb
            │  │        ├─ public_suffix_test.rb
            │  │        └─ rule_test.rb
            │  ├─ rexml-3.4.1
            │  │  ├─ LICENSE.txt
            │  │  ├─ NEWS.md
            │  │  ├─ README.md
            │  │  ├─ doc
            │  │  │  └─ rexml
            │  │  │     ├─ context.rdoc
            │  │  │     ├─ tasks
            │  │  │     │  ├─ rdoc
            │  │  │     │  │  ├─ child.rdoc
            │  │  │     │  │  ├─ document.rdoc
            │  │  │     │  │  ├─ element.rdoc
            │  │  │     │  │  ├─ node.rdoc
            │  │  │     │  │  └─ parent.rdoc
            │  │  │     │  └─ tocs
            │  │  │     │     ├─ child_toc.rdoc
            │  │  │     │     ├─ document_toc.rdoc
            │  │  │     │     ├─ element_toc.rdoc
            │  │  │     │     ├─ master_toc.rdoc
            │  │  │     │     ├─ node_toc.rdoc
            │  │  │     │     └─ parent_toc.rdoc
            │  │  │     └─ tutorial.rdoc
            │  │  └─ lib
            │  │     ├─ rexml
            │  │     │  ├─ attlistdecl.rb
            │  │     │  ├─ attribute.rb
            │  │     │  ├─ cdata.rb
            │  │     │  ├─ child.rb
            │  │     │  ├─ comment.rb
            │  │     │  ├─ doctype.rb
            │  │     │  ├─ document.rb
            │  │     │  ├─ dtd
            │  │     │  │  ├─ attlistdecl.rb
            │  │     │  │  ├─ dtd.rb
            │  │     │  │  ├─ elementdecl.rb
            │  │     │  │  ├─ entitydecl.rb
            │  │     │  │  └─ notationdecl.rb
            │  │     │  ├─ element.rb
            │  │     │  ├─ encoding.rb
            │  │     │  ├─ entity.rb
            │  │     │  ├─ formatters
            │  │     │  │  ├─ default.rb
            │  │     │  │  ├─ pretty.rb
            │  │     │  │  └─ transitive.rb
            │  │     │  ├─ functions.rb
            │  │     │  ├─ instruction.rb
            │  │     │  ├─ light
            │  │     │  │  └─ node.rb
            │  │     │  ├─ namespace.rb
            │  │     │  ├─ node.rb
            │  │     │  ├─ output.rb
            │  │     │  ├─ parent.rb
            │  │     │  ├─ parseexception.rb
            │  │     │  ├─ parsers
            │  │     │  │  ├─ baseparser.rb
            │  │     │  │  ├─ lightparser.rb
            │  │     │  │  ├─ pullparser.rb
            │  │     │  │  ├─ sax2parser.rb
            │  │     │  │  ├─ streamparser.rb
            │  │     │  │  ├─ treeparser.rb
            │  │     │  │  ├─ ultralightparser.rb
            │  │     │  │  └─ xpathparser.rb
            │  │     │  ├─ quickpath.rb
            │  │     │  ├─ rexml.rb
            │  │     │  ├─ sax2listener.rb
            │  │     │  ├─ security.rb
            │  │     │  ├─ source.rb
            │  │     │  ├─ streamlistener.rb
            │  │     │  ├─ text.rb
            │  │     │  ├─ undefinednamespaceexception.rb
            │  │     │  ├─ validation
            │  │     │  │  ├─ relaxng.rb
            │  │     │  │  ├─ validation.rb
            │  │     │  │  └─ validationexception.rb
            │  │     │  ├─ xmldecl.rb
            │  │     │  ├─ xmltokens.rb
            │  │     │  ├─ xpath.rb
            │  │     │  └─ xpath_parser.rb
            │  │     └─ rexml.rb
            │  ├─ ruby-macho-2.5.1
            │  │  ├─ .yardopts
            │  │  ├─ LICENSE
            │  │  ├─ README.md
            │  │  └─ lib
            │  │     ├─ macho
            │  │     │  ├─ exceptions.rb
            │  │     │  ├─ fat_file.rb
            │  │     │  ├─ headers.rb
            │  │     │  ├─ load_commands.rb
            │  │     │  ├─ macho_file.rb
            │  │     │  ├─ sections.rb
            │  │     │  ├─ structure.rb
            │  │     │  ├─ tools.rb
            │  │     │  ├─ utils.rb
            │  │     │  └─ view.rb
            │  │     └─ macho.rb
            │  ├─ typhoeus-1.4.1
            │  │  ├─ .rspec
            │  │  ├─ CHANGELOG.md
            │  │  ├─ CONTRIBUTING.md
            │  │  ├─ Gemfile
            │  │  ├─ Guardfile
            │  │  ├─ LICENSE
            │  │  ├─ README.md
            │  │  ├─ Rakefile
            │  │  ├─ UPGRADE.md
            │  │  ├─ lib
            │  │  │  ├─ rack
            │  │  │  │  ├─ typhoeus
            │  │  │  │  │  └─ middleware
            │  │  │  │  │     ├─ params_decoder
            │  │  │  │  │     │  └─ helper.rb
            │  │  │  │  │     └─ params_decoder.rb
            │  │  │  │  └─ typhoeus.rb
            │  │  │  ├─ typhoeus
            │  │  │  │  ├─ adapters
            │  │  │  │  │  └─ faraday.rb
            │  │  │  │  ├─ cache
            │  │  │  │  │  ├─ dalli.rb
            │  │  │  │  │  ├─ rails.rb
            │  │  │  │  │  └─ redis.rb
            │  │  │  │  ├─ config.rb
            │  │  │  │  ├─ easy_factory.rb
            │  │  │  │  ├─ errors
            │  │  │  │  │  ├─ no_stub.rb
            │  │  │  │  │  └─ typhoeus_error.rb
            │  │  │  │  ├─ errors.rb
            │  │  │  │  ├─ expectation.rb
            │  │  │  │  ├─ hydra
            │  │  │  │  │  ├─ addable.rb
            │  │  │  │  │  ├─ before.rb
            │  │  │  │  │  ├─ block_connection.rb
            │  │  │  │  │  ├─ cacheable.rb
            │  │  │  │  │  ├─ memoizable.rb
            │  │  │  │  │  ├─ queueable.rb
            │  │  │  │  │  ├─ runnable.rb
            │  │  │  │  │  └─ stubbable.rb
            │  │  │  │  ├─ hydra.rb
            │  │  │  │  ├─ pool.rb
            │  │  │  │  ├─ railtie.rb
            │  │  │  │  ├─ request
            │  │  │  │  │  ├─ actions.rb
            │  │  │  │  │  ├─ before.rb
            │  │  │  │  │  ├─ block_connection.rb
            │  │  │  │  │  ├─ cacheable.rb
            │  │  │  │  │  ├─ callbacks.rb
            │  │  │  │  │  ├─ marshal.rb
            │  │  │  │  │  ├─ memoizable.rb
            │  │  │  │  │  ├─ operations.rb
            │  │  │  │  │  ├─ responseable.rb
            │  │  │  │  │  ├─ streamable.rb
            │  │  │  │  │  └─ stubbable.rb
            │  │  │  │  ├─ request.rb
            │  │  │  │  ├─ response
            │  │  │  │  │  ├─ cacheable.rb
            │  │  │  │  │  ├─ header.rb
            │  │  │  │  │  ├─ informations.rb
            │  │  │  │  │  └─ status.rb
            │  │  │  │  ├─ response.rb
            │  │  │  │  └─ version.rb
            │  │  │  └─ typhoeus.rb
            │  │  ├─ perf
            │  │  │  ├─ profile.rb
            │  │  │  └─ vs_nethttp.rb
            │  │  ├─ spec
            │  │  │  ├─ rack
            │  │  │  │  └─ typhoeus
            │  │  │  │     └─ middleware
            │  │  │  │        ├─ params_decoder
            │  │  │  │        │  └─ helper_spec.rb
            │  │  │  │        └─ params_decoder_spec.rb
            │  │  │  ├─ spec_helper.rb
            │  │  │  ├─ support
            │  │  │  │  ├─ localhost_server.rb
            │  │  │  │  ├─ memory_cache.rb
            │  │  │  │  └─ server.rb
            │  │  │  ├─ typhoeus
            │  │  │  │  ├─ adapters
            │  │  │  │  │  └─ faraday_spec.rb
            │  │  │  │  ├─ cache
            │  │  │  │  │  ├─ dalli_spec.rb
            │  │  │  │  │  └─ redis_spec.rb
            │  │  │  │  ├─ config_spec.rb
            │  │  │  │  ├─ easy_factory_spec.rb
            │  │  │  │  ├─ errors
            │  │  │  │  │  └─ no_stub_spec.rb
            │  │  │  │  ├─ expectation_spec.rb
            │  │  │  │  ├─ hydra
            │  │  │  │  │  ├─ addable_spec.rb
            │  │  │  │  │  ├─ before_spec.rb
            │  │  │  │  │  ├─ block_connection_spec.rb
            │  │  │  │  │  ├─ cacheable_spec.rb
            │  │  │  │  │  ├─ memoizable_spec.rb
            │  │  │  │  │  ├─ queueable_spec.rb
            │  │  │  │  │  ├─ runnable_spec.rb
            │  │  │  │  │  └─ stubbable_spec.rb
            │  │  │  │  ├─ hydra_spec.rb
            │  │  │  │  ├─ pool_spec.rb
            │  │  │  │  ├─ request
            │  │  │  │  │  ├─ actions_spec.rb
            │  │  │  │  │  ├─ before_spec.rb
            │  │  │  │  │  ├─ block_connection_spec.rb
            │  │  │  │  │  ├─ cacheable_spec.rb
            │  │  │  │  │  ├─ callbacks_spec.rb
            │  │  │  │  │  ├─ marshal_spec.rb
            │  │  │  │  │  ├─ memoizable_spec.rb
            │  │  │  │  │  ├─ operations_spec.rb
            │  │  │  │  │  ├─ responseable_spec.rb
            │  │  │  │  │  └─ stubbable_spec.rb
            │  │  │  │  ├─ request_spec.rb
            │  │  │  │  ├─ response
            │  │  │  │  │  ├─ header_spec.rb
            │  │  │  │  │  ├─ informations_spec.rb
            │  │  │  │  │  └─ status_spec.rb
            │  │  │  │  └─ response_spec.rb
            │  │  │  └─ typhoeus_spec.rb
            │  │  └─ typhoeus.gemspec
            │  ├─ tzinfo-2.0.6
            │  │  ├─ .yardopts
            │  │  ├─ CHANGES.md
            │  │  ├─ LICENSE
            │  │  ├─ README.md
            │  │  └─ lib
            │  │     ├─ tzinfo
            │  │     │  ├─ annual_rules.rb
            │  │     │  ├─ country.rb
            │  │     │  ├─ country_timezone.rb
            │  │     │  ├─ data_source.rb
            │  │     │  ├─ data_sources
            │  │     │  │  ├─ constant_offset_data_timezone_info.rb
            │  │     │  │  ├─ country_info.rb
            │  │     │  │  ├─ data_timezone_info.rb
            │  │     │  │  ├─ linked_timezone_info.rb
            │  │     │  │  ├─ posix_time_zone_parser.rb
            │  │     │  │  ├─ ruby_data_source.rb
            │  │     │  │  ├─ timezone_info.rb
            │  │     │  │  ├─ transitions_data_timezone_info.rb
            │  │     │  │  ├─ zoneinfo_data_source.rb
            │  │     │  │  └─ zoneinfo_reader.rb
            │  │     │  ├─ data_sources.rb
            │  │     │  ├─ data_timezone.rb
            │  │     │  ├─ datetime_with_offset.rb
            │  │     │  ├─ format1
            │  │     │  │  ├─ country_definer.rb
            │  │     │  │  ├─ country_index_definition.rb
            │  │     │  │  ├─ timezone_definer.rb
            │  │     │  │  ├─ timezone_definition.rb
            │  │     │  │  └─ timezone_index_definition.rb
            │  │     │  ├─ format1.rb
            │  │     │  ├─ format2
            │  │     │  │  ├─ country_definer.rb
            │  │     │  │  ├─ country_index_definer.rb
            │  │     │  │  ├─ country_index_definition.rb
            │  │     │  │  ├─ timezone_definer.rb
            │  │     │  │  ├─ timezone_definition.rb
            │  │     │  │  ├─ timezone_index_definer.rb
            │  │     │  │  └─ timezone_index_definition.rb
            │  │     │  ├─ format2.rb
            │  │     │  ├─ info_timezone.rb
            │  │     │  ├─ linked_timezone.rb
            │  │     │  ├─ offset_timezone_period.rb
            │  │     │  ├─ ruby_core_support.rb
            │  │     │  ├─ string_deduper.rb
            │  │     │  ├─ time_with_offset.rb
            │  │     │  ├─ timestamp.rb
            │  │     │  ├─ timestamp_with_offset.rb
            │  │     │  ├─ timezone.rb
            │  │     │  ├─ timezone_offset.rb
            │  │     │  ├─ timezone_period.rb
            │  │     │  ├─ timezone_proxy.rb
            │  │     │  ├─ timezone_transition.rb
            │  │     │  ├─ transition_rule.rb
            │  │     │  ├─ transitions_timezone_period.rb
            │  │     │  ├─ version.rb
            │  │     │  └─ with_offset.rb
            │  │     └─ tzinfo.rb
            │  ├─ xcodeproj-1.25.1
            │  │  ├─ LICENSE
            │  │  ├─ README.md
            │  │  ├─ bin
            │  │  │  └─ xcodeproj
            │  │  └─ lib
            │  │     ├─ xcodeproj
            │  │     │  ├─ command
            │  │     │  │  ├─ config_dump.rb
            │  │     │  │  ├─ project_diff.rb
            │  │     │  │  ├─ show.rb
            │  │     │  │  ├─ sort.rb
            │  │     │  │  └─ target_diff.rb
            │  │     │  ├─ command.rb
            │  │     │  ├─ config
            │  │     │  │  └─ other_linker_flags_parser.rb
            │  │     │  ├─ config.rb
            │  │     │  ├─ constants.rb
            │  │     │  ├─ differ.rb
            │  │     │  ├─ gem_version.rb
            │  │     │  ├─ helper.rb
            │  │     │  ├─ plist.rb
            │  │     │  ├─ project
            │  │     │  │  ├─ case_converter.rb
            │  │     │  │  ├─ object
            │  │     │  │  │  ├─ build_configuration.rb
            │  │     │  │  │  ├─ build_file.rb
            │  │     │  │  │  ├─ build_phase.rb
            │  │     │  │  │  ├─ build_rule.rb
            │  │     │  │  │  ├─ configuration_list.rb
            │  │     │  │  │  ├─ container_item_proxy.rb
            │  │     │  │  │  ├─ file_reference.rb
            │  │     │  │  │  ├─ group.rb
            │  │     │  │  │  ├─ helpers
            │  │     │  │  │  │  ├─ build_settings_array_settings_by_object_version.rb
            │  │     │  │  │  │  ├─ file_references_factory.rb
            │  │     │  │  │  │  └─ groupable_helper.rb
            │  │     │  │  │  ├─ native_target.rb
            │  │     │  │  │  ├─ reference_proxy.rb
            │  │     │  │  │  ├─ root_object.rb
            │  │     │  │  │  ├─ swift_package_local_reference.rb
            │  │     │  │  │  ├─ swift_package_product_dependency.rb
            │  │     │  │  │  ├─ swift_package_remote_reference.rb
            │  │     │  │  │  └─ target_dependency.rb
            │  │     │  │  ├─ object.rb
            │  │     │  │  ├─ object_attributes.rb
            │  │     │  │  ├─ object_dictionary.rb
            │  │     │  │  ├─ object_list.rb
            │  │     │  │  ├─ project_helper.rb
            │  │     │  │  └─ uuid_generator.rb
            │  │     │  ├─ project.rb
            │  │     │  ├─ scheme
            │  │     │  │  ├─ abstract_scheme_action.rb
            │  │     │  │  ├─ analyze_action.rb
            │  │     │  │  ├─ archive_action.rb
            │  │     │  │  ├─ build_action.rb
            │  │     │  │  ├─ buildable_product_runnable.rb
            │  │     │  │  ├─ buildable_reference.rb
            │  │     │  │  ├─ command_line_arguments.rb
            │  │     │  │  ├─ environment_variables.rb
            │  │     │  │  ├─ execution_action.rb
            │  │     │  │  ├─ launch_action.rb
            │  │     │  │  ├─ location_scenario_reference.rb
            │  │     │  │  ├─ macro_expansion.rb
            │  │     │  │  ├─ profile_action.rb
            │  │     │  │  ├─ remote_runnable.rb
            │  │     │  │  ├─ send_email_action_content.rb
            │  │     │  │  ├─ shell_script_action_content.rb
            │  │     │  │  ├─ test_action.rb
            │  │     │  │  └─ xml_element_wrapper.rb
            │  │     │  ├─ scheme.rb
            │  │     │  ├─ user_interface.rb
            │  │     │  ├─ workspace
            │  │     │  │  ├─ file_reference.rb
            │  │     │  │  ├─ group_reference.rb
            │  │     │  │  └─ reference.rb
            │  │     │  ├─ workspace.rb
            │  │     │  └─ xcodebuild_helper.rb
            │  │     └─ xcodeproj.rb
            │  └─ zeitwerk-2.6.18
            │     ├─ MIT-LICENSE
            │     ├─ README.md
            │     └─ lib
            │        ├─ zeitwerk
            │        │  ├─ cref.rb
            │        │  ├─ error.rb
            │        │  ├─ explicit_namespace.rb
            │        │  ├─ gem_inflector.rb
            │        │  ├─ gem_loader.rb
            │        │  ├─ inflector.rb
            │        │  ├─ internal.rb
            │        │  ├─ kernel.rb
            │        │  ├─ loader
            │        │  │  ├─ callbacks.rb
            │        │  │  ├─ config.rb
            │        │  │  ├─ eager_load.rb
            │        │  │  └─ helpers.rb
            │        │  ├─ loader.rb
            │        │  ├─ null_inflector.rb
            │        │  ├─ real_mod_name.rb
            │        │  ├─ registry.rb
            │        │  └─ version.rb
            │        └─ zeitwerk.rb
            └─ specifications
               ├─ CFPropertyList-3.0.7.gemspec
               ├─ activesupport-6.1.7.10.gemspec
               ├─ addressable-2.8.7.gemspec
               ├─ algoliasearch-1.27.5.gemspec
               ├─ atomos-0.1.3.gemspec
               ├─ base64-0.3.0.gemspec
               ├─ benchmark-0.4.1.gemspec
               ├─ bigdecimal-3.2.2.gemspec
               ├─ claide-1.1.0.gemspec
               ├─ cocoapods-1.15.2.gemspec
               ├─ cocoapods-core-1.15.2.gemspec
               ├─ cocoapods-deintegrate-1.0.5.gemspec
               ├─ cocoapods-downloader-2.1.gemspec
               ├─ cocoapods-plugins-1.0.0.gemspec
               ├─ cocoapods-search-1.0.1.gemspec
               ├─ cocoapods-trunk-1.6.0.gemspec
               ├─ cocoapods-try-1.2.0.gemspec
               ├─ colored2-3.1.2.gemspec
               ├─ concurrent-ruby-1.3.3.gemspec
               ├─ escape-0.0.4.gemspec
               ├─ ethon-0.16.0.gemspec
               ├─ ffi-1.17.2.gemspec
               ├─ fourflusher-2.3.1.gemspec
               ├─ fuzzy_match-2.0.4.gemspec
               ├─ gh_inspector-1.1.3.gemspec
               ├─ httpclient-2.9.0.gemspec
               ├─ i18n-1.14.7.gemspec
               ├─ json-2.7.6.gemspec
               ├─ logger-1.7.0.gemspec
               ├─ minitest-5.25.4.gemspec
               ├─ molinillo-0.8.0.gemspec
               ├─ mutex_m-0.3.0.gemspec
               ├─ nanaimo-0.3.0.gemspec
               ├─ nap-1.1.0.gemspec
               ├─ netrc-0.11.0.gemspec
               ├─ nkf-0.2.0.gemspec
               ├─ public_suffix-4.0.7.gemspec
               ├─ rexml-3.4.1.gemspec
               ├─ ruby-macho-2.5.1.gemspec
               ├─ typhoeus-1.4.1.gemspec
               ├─ tzinfo-2.0.6.gemspec
               ├─ xcodeproj-1.25.1.gemspec
               └─ zeitwerk-2.6.18.gemspec

```
```
Drivio
├─ .bundle
│  └─ config
├─ .env
├─ .eslintrc.js
├─ .prettierrc.js
├─ .watchmanconfig
├─ App.js
├─ Gemfile
├─ Gemfile.lock
├─ README.md
├─ __tests__
│  └─ App.test.tsx
├─ android
│  ├─ app
│  │  ├─ google-services.json
│  │  ├─ proguard-rules.pro
│  │  ├─ release-key.jks
│  │  └─ src
│  │     ├─ debug
│  │     │  └─ AndroidManifest.xml
│  │     └─ main
│  │        ├─ AndroidManifest.xml
│  │        ├─ java
│  │        │  └─ com
│  │        │     └─ drivio
│  │        │        ├─ MainActivity.kt
│  │        │        └─ MainApplication.kt
│  │        └─ res
│  │           ├─ drawable
│  │           │  └─ rn_edit_text_material.xml
│  │           ├─ mipmap-hdpi
│  │           │  ├─ ic_launcher.png
│  │           │  └─ ic_launcher_round.png
│  │           ├─ mipmap-mdpi
│  │           │  ├─ ic_launcher.png
│  │           │  └─ ic_launcher_round.png
│  │           ├─ mipmap-xhdpi
│  │           │  ├─ ic_launcher.png
│  │           │  └─ ic_launcher_round.png
│  │           ├─ mipmap-xxhdpi
│  │           │  ├─ ic_launcher.png
│  │           │  └─ ic_launcher_round.png
│  │           ├─ mipmap-xxxhdpi
│  │           │  ├─ ic_launcher.png
│  │           │  └─ ic_launcher_round.png
│  │           └─ values
│  │              ├─ strings.xml
│  │              └─ styles.xml
│  ├─ gradle
│  │  └─ wrapper
│  │     ├─ gradle-wrapper.jar
│  │     └─ gradle-wrapper.properties
│  ├─ gradle.properties
│  ├─ gradlew
│  └─ gradlew.bat
├─ app.json
├─ babel.config.js
├─ index.js
├─ ios
│  ├─ .xcode.env
│  ├─ .xcode.env.local
│  ├─ Drivio
│  │  ├─ AppDelegate.swift
│  │  ├─ Images.xcassets
│  │  │  ├─ AppIcon.appiconset
│  │  │  │  └─ Contents.json
│  │  │  └─ Contents.json
│  │  ├─ Info.plist
│  │  ├─ LaunchScreen.storyboard
│  │  └─ PrivacyInfo.xcprivacy
│  ├─ Drivio.xcodeproj
│  │  ├─ project.pbxproj
│  │  └─ xcshareddata
│  │     └─ xcschemes
│  │        └─ Drivio.xcscheme
│  ├─ Podfile
│  └─ Pods
│     ├─ Headers
│     ├─ Local Podspecs
│     │  ├─ DoubleConversion.podspec.json
│     │  ├─ FBLazyVector.podspec.json
│     │  ├─ RCT-Folly.podspec.json
│     │  ├─ RCTDeprecation.podspec.json
│     │  ├─ RCTRequired.podspec.json
│     │  ├─ RCTTypeSafety.podspec.json
│     │  ├─ React-Core.podspec.json
│     │  ├─ React-CoreModules.podspec.json
│     │  ├─ React-Fabric.podspec.json
│     │  ├─ React-FabricComponents.podspec.json
│     │  ├─ React-FabricImage.podspec.json
│     │  ├─ React-ImageManager.podspec.json
│     │  ├─ React-Mapbuffer.podspec.json
│     │  ├─ React-NativeModulesApple.podspec.json
│     │  ├─ React-RCTActionSheet.podspec.json
│     │  ├─ React-RCTAnimation.podspec.json
│     │  ├─ React-RCTAppDelegate.podspec.json
│     │  ├─ React-RCTBlob.podspec.json
│     │  ├─ React-RCTFBReactNativeSpec.podspec.json
│     │  ├─ React-RCTFabric.podspec.json
│     │  ├─ React-RCTImage.podspec.json
│     │  ├─ React-RCTLinking.podspec.json
│     │  ├─ React-RCTNetwork.podspec.json
│     │  ├─ React-RCTRuntime.podspec.json
│     │  ├─ React-RCTSettings.podspec.json
│     │  ├─ React-RCTText.podspec.json
│     │  ├─ React-RCTVibration.podspec.json
│     │  ├─ React-RuntimeApple.podspec.json
│     │  ├─ React-RuntimeCore.podspec.json
│     │  ├─ React-RuntimeHermes.podspec.json
│     │  ├─ React-callinvoker.podspec.json
│     │  ├─ React-cxxreact.podspec.json
│     │  ├─ React-debug.podspec.json
│     │  ├─ React-defaultsnativemodule.podspec.json
│     │  ├─ React-domnativemodule.podspec.json
│     │  ├─ React-featureflags.podspec.json
│     │  ├─ React-featureflagsnativemodule.podspec.json
│     │  ├─ React-graphics.podspec.json
│     │  ├─ React-hermes.podspec.json
│     │  ├─ React-idlecallbacksnativemodule.podspec.json
│     │  ├─ React-jserrorhandler.podspec.json
│     │  ├─ React-jsi.podspec.json
│     │  ├─ React-jsiexecutor.podspec.json
│     │  ├─ React-jsinspector.podspec.json
│     │  ├─ React-jsinspectorcdp.podspec.json
│     │  ├─ React-jsinspectornetwork.podspec.json
│     │  ├─ React-jsinspectortracing.podspec.json
│     │  ├─ React-jsitooling.podspec.json
│     │  ├─ React-jsitracing.podspec.json
│     │  ├─ React-logger.podspec.json
│     │  ├─ React-microtasksnativemodule.podspec.json
│     │  ├─ React-oscompat.podspec.json
│     │  ├─ React-perflogger.podspec.json
│     │  ├─ React-performancetimeline.podspec.json
│     │  ├─ React-rendererconsistency.podspec.json
│     │  ├─ React-renderercss.podspec.json
│     │  ├─ React-rendererdebug.podspec.json
│     │  ├─ React-rncore.podspec.json
│     │  ├─ React-runtimeexecutor.podspec.json
│     │  ├─ React-runtimescheduler.podspec.json
│     │  ├─ React-timing.podspec.json
│     │  ├─ React-utils.podspec.json
│     │  └─ React.podspec.json
│     └─ Target Support Files
├─ jest.config.js
├─ metro.config.js
├─ package-lock.json
├─ package.json
├─ src
│  ├─ assets
│  │  ├─ icons
│  │  └─ images
│  │     ├─ onboarding1.jpeg
│  │     ├─ onboarding2.avif
│  │     ├─ onboarding2.jpg
│  │     ├─ onboarding3.jpg
│  │     └─ woman-sitting-her-new-car_1303-31666.avif
│  ├─ components
│  ├─ context
│  ├─ hooks
│  ├─ navigation
│  │  ├─ AppNavigator.js
│  │  ├─ MainTabNavigator.js
│  │  └─ OnboardingStack.js
│  ├─ screens
│  │  ├─ Auth
│  │  │  ├─ EmainVerificationScreen.js
│  │  │  ├─ ForgotPasswordScreen.js
│  │  │  ├─ LoginScreen.js
│  │  │  └─ RegisterScreen.js
│  │  ├─ Home
│  │  │  ├─ HomeScreen.js
│  │  │  ├─ MapScreen.js
│  │  │  ├─ ProfileScreen.js
│  │  │  └─ RecentRidesScreen.js
│  │  └─ Onboarding
│  │     └─ OnboardingScreen.js
│  ├─ services
│  └─ utils
│     ├─ AuthStorage.js
│     ├─ FirestoreService.js
│     └─ firebase.js
├─ tsconfig.json
└─ vendor
   └─ bundle
      └─ ruby
         └─ 2.6.0
            ├─ bin
            │  ├─ fuzzy_match
            │  ├─ httpclient
            │  ├─ pod
            │  ├─ sandbox-pod
            │  └─ xcodeproj
            ├─ build_info
            ├─ cache
            │  ├─ CFPropertyList-3.0.7.gem
            │  ├─ activesupport-6.1.7.10.gem
            │  ├─ addressable-2.8.7.gem
            │  ├─ algoliasearch-1.27.5.gem
            │  ├─ atomos-0.1.3.gem
            │  ├─ base64-0.3.0.gem
            │  ├─ benchmark-0.4.1.gem
            │  ├─ bigdecimal-3.2.2.gem
            │  ├─ claide-1.1.0.gem
            │  ├─ cocoapods-1.15.2.gem
            │  ├─ cocoapods-core-1.15.2.gem
            │  ├─ cocoapods-deintegrate-1.0.5.gem
            │  ├─ cocoapods-downloader-2.1.gem
            │  ├─ cocoapods-plugins-1.0.0.gem
            │  ├─ cocoapods-search-1.0.1.gem
            │  ├─ cocoapods-trunk-1.6.0.gem
            │  ├─ cocoapods-try-1.2.0.gem
            │  ├─ colored2-3.1.2.gem
            │  ├─ concurrent-ruby-1.3.3.gem
            │  ├─ escape-0.0.4.gem
            │  ├─ ethon-0.16.0.gem
            │  ├─ ffi-1.17.2.gem
            │  ├─ fourflusher-2.3.1.gem
            │  ├─ fuzzy_match-2.0.4.gem
            │  ├─ gh_inspector-1.1.3.gem
            │  ├─ httpclient-2.9.0.gem
            │  ├─ i18n-1.14.7.gem
            │  ├─ json-2.7.6.gem
            │  ├─ logger-1.7.0.gem
            │  ├─ minitest-5.25.4.gem
            │  ├─ molinillo-0.8.0.gem
            │  ├─ mutex_m-0.3.0.gem
            │  ├─ nanaimo-0.3.0.gem
            │  ├─ nap-1.1.0.gem
            │  ├─ netrc-0.11.0.gem
            │  ├─ nkf-0.2.0.gem
            │  ├─ public_suffix-4.0.7.gem
            │  ├─ rexml-3.4.1.gem
            │  ├─ ruby-macho-2.5.1.gem
            │  ├─ typhoeus-1.4.1.gem
            │  ├─ tzinfo-2.0.6.gem
            │  ├─ xcodeproj-1.25.1.gem
            │  └─ zeitwerk-2.6.18.gem
            ├─ doc
            ├─ extensions
            │  └─ universal-darwin-24
            │     └─ 2.6.0
            │        ├─ bigdecimal-3.2.2
            │        │  ├─ bigdecimal.bundle
            │        │  ├─ gem.build_complete
            │        │  ├─ gem_make.out
            │        │  └─ mkmf.log
            │        ├─ ffi-1.17.2
            │        │  ├─ ffi_c.bundle
            │        │  ├─ gem.build_complete
            │        │  ├─ gem_make.out
            │        │  └─ mkmf.log
            │        ├─ json-2.7.6
            │        │  ├─ gem.build_complete
            │        │  ├─ gem_make.out
            │        │  ├─ json
            │        │  │  └─ ext
            │        │  │     ├─ generator.bundle
            │        │  │     └─ parser.bundle
            │        │  └─ mkmf.log
            │        └─ nkf-0.2.0
            │           ├─ gem.build_complete
            │           ├─ gem_make.out
            │           └─ nkf.bundle
            ├─ gems
            │  ├─ CFPropertyList-3.0.7
            │  │  ├─ LICENSE
            │  │  ├─ README.md
            │  │  ├─ README.rdoc
            │  │  ├─ THANKS
            │  │  └─ lib
            │  │     ├─ cfpropertylist
            │  │     │  ├─ rbBinaryCFPropertyList.rb
            │  │     │  ├─ rbCFPlistError.rb
            │  │     │  ├─ rbCFPropertyList.rb
            │  │     │  ├─ rbCFTypes.rb
            │  │     │  ├─ rbLibXMLParser.rb
            │  │     │  ├─ rbNokogiriParser.rb
            │  │     │  ├─ rbPlainCFPropertyList.rb
            │  │     │  └─ rbREXMLParser.rb
            │  │     └─ cfpropertylist.rb
            │  ├─ activesupport-6.1.7.10
            │  │  ├─ CHANGELOG.md
            │  │  ├─ MIT-LICENSE
            │  │  ├─ README.rdoc
            │  │  └─ lib
            │  │     ├─ active_support
            │  │     │  ├─ actionable_error.rb
            │  │     │  ├─ all.rb
            │  │     │  ├─ array_inquirer.rb
            │  │     │  ├─ backtrace_cleaner.rb
            │  │     │  ├─ benchmarkable.rb
            │  │     │  ├─ builder.rb
            │  │     │  ├─ cache
            │  │     │  │  ├─ file_store.rb
            │  │     │  │  ├─ mem_cache_store.rb
            │  │     │  │  ├─ memory_store.rb
            │  │     │  │  ├─ null_store.rb
            │  │     │  │  ├─ redis_cache_store.rb
            │  │     │  │  └─ strategy
            │  │     │  │     ├─ local_cache.rb
            │  │     │  │     └─ local_cache_middleware.rb
            │  │     │  ├─ cache.rb
            │  │     │  ├─ callbacks.rb
            │  │     │  ├─ concern.rb
            │  │     │  ├─ concurrency
            │  │     │  │  ├─ load_interlock_aware_monitor.rb
            │  │     │  │  └─ share_lock.rb
            │  │     │  ├─ configurable.rb
            │  │     │  ├─ configuration_file.rb
            │  │     │  ├─ core_ext
            │  │     │  │  ├─ array
            │  │     │  │  │  ├─ access.rb
            │  │     │  │  │  ├─ conversions.rb
            │  │     │  │  │  ├─ extract.rb
            │  │     │  │  │  ├─ extract_options.rb
            │  │     │  │  │  ├─ grouping.rb
            │  │     │  │  │  ├─ inquiry.rb
            │  │     │  │  │  └─ wrap.rb
            │  │     │  │  ├─ array.rb
            │  │     │  │  ├─ benchmark.rb
            │  │     │  │  ├─ big_decimal
            │  │     │  │  │  └─ conversions.rb
            │  │     │  │  ├─ big_decimal.rb
            │  │     │  │  ├─ class
            │  │     │  │  │  ├─ attribute.rb
            │  │     │  │  │  ├─ attribute_accessors.rb
            │  │     │  │  │  └─ subclasses.rb
            │  │     │  │  ├─ class.rb
            │  │     │  │  ├─ date
            │  │     │  │  │  ├─ acts_like.rb
            │  │     │  │  │  ├─ blank.rb
            │  │     │  │  │  ├─ calculations.rb
            │  │     │  │  │  ├─ conversions.rb
            │  │     │  │  │  └─ zones.rb
            │  │     │  │  ├─ date.rb
            │  │     │  │  ├─ date_and_time
            │  │     │  │  │  ├─ calculations.rb
            │  │     │  │  │  ├─ compatibility.rb
            │  │     │  │  │  └─ zones.rb
            │  │     │  │  ├─ date_time
            │  │     │  │  │  ├─ acts_like.rb
            │  │     │  │  │  ├─ blank.rb
            │  │     │  │  │  ├─ calculations.rb
            │  │     │  │  │  ├─ compatibility.rb
            │  │     │  │  │  └─ conversions.rb
            │  │     │  │  ├─ date_time.rb
            │  │     │  │  ├─ digest
            │  │     │  │  │  └─ uuid.rb
            │  │     │  │  ├─ digest.rb
            │  │     │  │  ├─ enumerable.rb
            │  │     │  │  ├─ file
            │  │     │  │  │  └─ atomic.rb
            │  │     │  │  ├─ file.rb
            │  │     │  │  ├─ hash
            │  │     │  │  │  ├─ conversions.rb
            │  │     │  │  │  ├─ deep_merge.rb
            │  │     │  │  │  ├─ deep_transform_values.rb
            │  │     │  │  │  ├─ except.rb
            │  │     │  │  │  ├─ indifferent_access.rb
            │  │     │  │  │  ├─ keys.rb
            │  │     │  │  │  ├─ reverse_merge.rb
            │  │     │  │  │  └─ slice.rb
            │  │     │  │  ├─ hash.rb
            │  │     │  │  ├─ integer
            │  │     │  │  │  ├─ inflections.rb
            │  │     │  │  │  ├─ multiple.rb
            │  │     │  │  │  └─ time.rb
            │  │     │  │  ├─ integer.rb
            │  │     │  │  ├─ kernel
            │  │     │  │  │  ├─ concern.rb
            │  │     │  │  │  ├─ reporting.rb
            │  │     │  │  │  └─ singleton_class.rb
            │  │     │  │  ├─ kernel.rb
            │  │     │  │  ├─ load_error.rb
            │  │     │  │  ├─ marshal.rb
            │  │     │  │  ├─ module
            │  │     │  │  │  ├─ aliasing.rb
            │  │     │  │  │  ├─ anonymous.rb
            │  │     │  │  │  ├─ attr_internal.rb
            │  │     │  │  │  ├─ attribute_accessors.rb
            │  │     │  │  │  ├─ attribute_accessors_per_thread.rb
            │  │     │  │  │  ├─ concerning.rb
            │  │     │  │  │  ├─ delegation.rb
            │  │     │  │  │  ├─ deprecation.rb
            │  │     │  │  │  ├─ introspection.rb
            │  │     │  │  │  ├─ redefine_method.rb
            │  │     │  │  │  └─ remove_method.rb
            │  │     │  │  ├─ module.rb
            │  │     │  │  ├─ name_error.rb
            │  │     │  │  ├─ numeric
            │  │     │  │  │  ├─ bytes.rb
            │  │     │  │  │  ├─ conversions.rb
            │  │     │  │  │  └─ time.rb
            │  │     │  │  ├─ numeric.rb
            │  │     │  │  ├─ object
            │  │     │  │  │  ├─ acts_like.rb
            │  │     │  │  │  ├─ blank.rb
            │  │     │  │  │  ├─ conversions.rb
            │  │     │  │  │  ├─ deep_dup.rb
            │  │     │  │  │  ├─ duplicable.rb
            │  │     │  │  │  ├─ inclusion.rb
            │  │     │  │  │  ├─ instance_variables.rb
            │  │     │  │  │  ├─ json.rb
            │  │     │  │  │  ├─ to_param.rb
            │  │     │  │  │  ├─ to_query.rb
            │  │     │  │  │  ├─ try.rb
            │  │     │  │  │  └─ with_options.rb
            │  │     │  │  ├─ object.rb
            │  │     │  │  ├─ range
            │  │     │  │  │  ├─ compare_range.rb
            │  │     │  │  │  ├─ conversions.rb
            │  │     │  │  │  ├─ each.rb
            │  │     │  │  │  ├─ include_time_with_zone.rb
            │  │     │  │  │  └─ overlaps.rb
            │  │     │  │  ├─ range.rb
            │  │     │  │  ├─ regexp.rb
            │  │     │  │  ├─ securerandom.rb
            │  │     │  │  ├─ string
            │  │     │  │  │  ├─ access.rb
            │  │     │  │  │  ├─ behavior.rb
            │  │     │  │  │  ├─ conversions.rb
            │  │     │  │  │  ├─ exclude.rb
            │  │     │  │  │  ├─ filters.rb
            │  │     │  │  │  ├─ indent.rb
            │  │     │  │  │  ├─ inflections.rb
            │  │     │  │  │  ├─ inquiry.rb
            │  │     │  │  │  ├─ multibyte.rb
            │  │     │  │  │  ├─ output_safety.rb
            │  │     │  │  │  ├─ starts_ends_with.rb
            │  │     │  │  │  ├─ strip.rb
            │  │     │  │  │  └─ zones.rb
            │  │     │  │  ├─ string.rb
            │  │     │  │  ├─ symbol
            │  │     │  │  │  └─ starts_ends_with.rb
            │  │     │  │  ├─ symbol.rb
            │  │     │  │  ├─ time
            │  │     │  │  │  ├─ acts_like.rb
            │  │     │  │  │  ├─ calculations.rb
            │  │     │  │  │  ├─ compatibility.rb
            │  │     │  │  │  ├─ conversions.rb
            │  │     │  │  │  └─ zones.rb
            │  │     │  │  ├─ time.rb
            │  │     │  │  └─ uri.rb
            │  │     │  ├─ core_ext.rb
            │  │     │  ├─ current_attributes
            │  │     │  │  └─ test_helper.rb
            │  │     │  ├─ current_attributes.rb
            │  │     │  ├─ dependencies
            │  │     │  │  ├─ autoload.rb
            │  │     │  │  ├─ interlock.rb
            │  │     │  │  └─ zeitwerk_integration.rb
            │  │     │  ├─ dependencies.rb
            │  │     │  ├─ deprecation
            │  │     │  │  ├─ behaviors.rb
            │  │     │  │  ├─ constant_accessor.rb
            │  │     │  │  ├─ disallowed.rb
            │  │     │  │  ├─ instance_delegator.rb
            │  │     │  │  ├─ method_wrappers.rb
            │  │     │  │  ├─ proxy_wrappers.rb
            │  │     │  │  └─ reporting.rb
            │  │     │  ├─ deprecation.rb
            │  │     │  ├─ descendants_tracker.rb
            │  │     │  ├─ digest.rb
            │  │     │  ├─ duration
            │  │     │  │  ├─ iso8601_parser.rb
            │  │     │  │  └─ iso8601_serializer.rb
            │  │     │  ├─ duration.rb
            │  │     │  ├─ encrypted_configuration.rb
            │  │     │  ├─ encrypted_file.rb
            │  │     │  ├─ environment_inquirer.rb
            │  │     │  ├─ evented_file_update_checker.rb
            │  │     │  ├─ execution_wrapper.rb
            │  │     │  ├─ executor.rb
            │  │     │  ├─ file_update_checker.rb
            │  │     │  ├─ fork_tracker.rb
            │  │     │  ├─ gem_version.rb
            │  │     │  ├─ gzip.rb
            │  │     │  ├─ hash_with_indifferent_access.rb
            │  │     │  ├─ i18n.rb
            │  │     │  ├─ i18n_railtie.rb
            │  │     │  ├─ inflections.rb
            │  │     │  ├─ inflector
            │  │     │  │  ├─ inflections.rb
            │  │     │  │  ├─ methods.rb
            │  │     │  │  └─ transliterate.rb
            │  │     │  ├─ inflector.rb
            │  │     │  ├─ json
            │  │     │  │  ├─ decoding.rb
            │  │     │  │  └─ encoding.rb
            │  │     │  ├─ json.rb
            │  │     │  ├─ key_generator.rb
            │  │     │  ├─ lazy_load_hooks.rb
            │  │     │  ├─ locale
            │  │     │  │  ├─ en.rb
            │  │     │  │  └─ en.yml
            │  │     │  ├─ log_subscriber
            │  │     │  │  └─ test_helper.rb
            │  │     │  ├─ log_subscriber.rb
            │  │     │  ├─ logger.rb
            │  │     │  ├─ logger_silence.rb
            │  │     │  ├─ logger_thread_safe_level.rb
            │  │     │  ├─ message_encryptor.rb
            │  │     │  ├─ message_verifier.rb
            │  │     │  ├─ messages
            │  │     │  │  ├─ metadata.rb
            │  │     │  │  ├─ rotation_configuration.rb
            │  │     │  │  └─ rotator.rb
            │  │     │  ├─ multibyte
            │  │     │  │  ├─ chars.rb
            │  │     │  │  └─ unicode.rb
            │  │     │  ├─ multibyte.rb
            │  │     │  ├─ notifications
            │  │     │  │  ├─ fanout.rb
            │  │     │  │  └─ instrumenter.rb
            │  │     │  ├─ notifications.rb
            │  │     │  ├─ number_helper
            │  │     │  │  ├─ number_converter.rb
            │  │     │  │  ├─ number_to_currency_converter.rb
            │  │     │  │  ├─ number_to_delimited_converter.rb
            │  │     │  │  ├─ number_to_human_converter.rb
            │  │     │  │  ├─ number_to_human_size_converter.rb
            │  │     │  │  ├─ number_to_percentage_converter.rb
            │  │     │  │  ├─ number_to_phone_converter.rb
            │  │     │  │  ├─ number_to_rounded_converter.rb
            │  │     │  │  └─ rounding_helper.rb
            │  │     │  ├─ number_helper.rb
            │  │     │  ├─ option_merger.rb
            │  │     │  ├─ ordered_hash.rb
            │  │     │  ├─ ordered_options.rb
            │  │     │  ├─ parameter_filter.rb
            │  │     │  ├─ per_thread_registry.rb
            │  │     │  ├─ proxy_object.rb
            │  │     │  ├─ rails.rb
            │  │     │  ├─ railtie.rb
            │  │     │  ├─ reloader.rb
            │  │     │  ├─ rescuable.rb
            │  │     │  ├─ secure_compare_rotator.rb
            │  │     │  ├─ security_utils.rb
            │  │     │  ├─ string_inquirer.rb
            │  │     │  ├─ subscriber.rb
            │  │     │  ├─ tagged_logging.rb
            │  │     │  ├─ test_case.rb
            │  │     │  ├─ testing
            │  │     │  │  ├─ assertions.rb
            │  │     │  │  ├─ autorun.rb
            │  │     │  │  ├─ constant_lookup.rb
            │  │     │  │  ├─ declarative.rb
            │  │     │  │  ├─ deprecation.rb
            │  │     │  │  ├─ file_fixtures.rb
            │  │     │  │  ├─ isolation.rb
            │  │     │  │  ├─ method_call_assertions.rb
            │  │     │  │  ├─ parallelization
            │  │     │  │  │  ├─ server.rb
            │  │     │  │  │  └─ worker.rb
            │  │     │  │  ├─ parallelization.rb
            │  │     │  │  ├─ setup_and_teardown.rb
            │  │     │  │  ├─ stream.rb
            │  │     │  │  ├─ tagged_logging.rb
            │  │     │  │  └─ time_helpers.rb
            │  │     │  ├─ time.rb
            │  │     │  ├─ time_with_zone.rb
            │  │     │  ├─ values
            │  │     │  │  └─ time_zone.rb
            │  │     │  ├─ version.rb
            │  │     │  ├─ xml_mini
            │  │     │  │  ├─ jdom.rb
            │  │     │  │  ├─ libxml.rb
            │  │     │  │  ├─ libxmlsax.rb
            │  │     │  │  ├─ nokogiri.rb
            │  │     │  │  ├─ nokogirisax.rb
            │  │     │  │  └─ rexml.rb
            │  │     │  └─ xml_mini.rb
            │  │     └─ active_support.rb
            │  ├─ addressable-2.8.7
            │  │  ├─ CHANGELOG.md
            │  │  ├─ Gemfile
            │  │  ├─ LICENSE.txt
            │  │  ├─ README.md
            │  │  ├─ Rakefile
            │  │  ├─ addressable.gemspec
            │  │  ├─ data
            │  │  │  └─ unicode.data
            │  │  ├─ lib
            │  │  │  ├─ addressable
            │  │  │  │  ├─ idna
            │  │  │  │  │  ├─ native.rb
            │  │  │  │  │  └─ pure.rb
            │  │  │  │  ├─ idna.rb
            │  │  │  │  ├─ template.rb
            │  │  │  │  ├─ uri.rb
            │  │  │  │  └─ version.rb
            │  │  │  └─ addressable.rb
            │  │  ├─ spec
            │  │  │  ├─ addressable
            │  │  │  │  ├─ idna_spec.rb
            │  │  │  │  ├─ net_http_compat_spec.rb
            │  │  │  │  ├─ security_spec.rb
            │  │  │  │  ├─ template_spec.rb
            │  │  │  │  └─ uri_spec.rb
            │  │  │  └─ spec_helper.rb
            │  │  └─ tasks
            │  │     ├─ clobber.rake
            │  │     ├─ gem.rake
            │  │     ├─ git.rake
            │  │     ├─ metrics.rake
            │  │     ├─ profile.rake
            │  │     ├─ rspec.rake
            │  │     └─ yard.rake
            │  ├─ algoliasearch-1.27.5
            │  │  ├─ .rspec
            │  │  ├─ .travis.yml
            │  │  ├─ CHANGELOG.md
            │  │  ├─ Gemfile
            │  │  ├─ Gemfile.lock
            │  │  ├─ LICENSE
            │  │  ├─ README.md
            │  │  ├─ Rakefile
            │  │  ├─ algoliasearch.gemspec
            │  │  ├─ contacts.json
            │  │  ├─ lib
            │  │  │  ├─ algolia
            │  │  │  │  ├─ account_client.rb
            │  │  │  │  ├─ analytics.rb
            │  │  │  │  ├─ client.rb
            │  │  │  │  ├─ error.rb
            │  │  │  │  ├─ index.rb
            │  │  │  │  ├─ insights.rb
            │  │  │  │  ├─ protocol.rb
            │  │  │  │  ├─ version.rb
            │  │  │  │  └─ webmock.rb
            │  │  │  └─ algoliasearch.rb
            │  │  ├─ resources
            │  │  │  └─ ca-bundle.crt
            │  │  └─ spec
            │  │     ├─ account_client_spec.rb
            │  │     ├─ client_spec.rb
            │  │     ├─ mock_spec.rb
            │  │     ├─ spec_helper.rb
            │  │     └─ stub_spec.rb
            │  ├─ atomos-0.1.3
            │  │  ├─ .rspec
            │  │  ├─ .rubocop.yml
            │  │  ├─ .rubocop_todo.yml
            │  │  ├─ .travis.yml
            │  │  ├─ CODE_OF_CONDUCT.md
            │  │  ├─ Gemfile
            │  │  ├─ Gemfile.lock
            │  │  ├─ LICENSE.txt
            │  │  ├─ README.md
            │  │  ├─ Rakefile
            │  │  ├─ VERSION
            │  │  ├─ atomos.gemspec
            │  │  ├─ bin
            │  │  │  ├─ console
            │  │  │  ├─ rake
            │  │  │  ├─ rspec
            │  │  │  ├─ rubocop
            │  │  │  └─ setup
            │  │  └─ lib
            │  │     ├─ atomos
            │  │     │  └─ version.rb
            │  │     └─ atomos.rb
            │  ├─ base64-0.3.0
            │  │  ├─ BSDL
            │  │  ├─ COPYING
            │  │  ├─ LEGAL
            │  │  ├─ README.md
            │  │  ├─ lib
            │  │  │  └─ base64.rb
            │  │  └─ sig
            │  │     └─ base64.rbs
            │  ├─ benchmark-0.4.1
            │  │  ├─ BSDL
            │  │  ├─ COPYING
            │  │  ├─ Gemfile
            │  │  ├─ README.md
            │  │  ├─ Rakefile
            │  │  ├─ benchmark.gemspec
            │  │  ├─ bin
            │  │  │  ├─ console
            │  │  │  └─ setup
            │  │  └─ lib
            │  │     └─ benchmark.rb
            │  ├─ bigdecimal-3.2.2
            │  │  ├─ LICENSE
            │  │  ├─ bigdecimal.gemspec
            │  │  ├─ ext
            │  │  │  └─ bigdecimal
            │  │  │     ├─ .sitearchdir.time
            │  │  │     ├─ Makefile
            │  │  │     ├─ bigdecimal.bundle
            │  │  │     ├─ bigdecimal.c
            │  │  │     ├─ bigdecimal.h
            │  │  │     ├─ bigdecimal.o
            │  │  │     ├─ bits.h
            │  │  │     ├─ extconf.rb
            │  │  │     ├─ feature.h
            │  │  │     ├─ missing
            │  │  │     │  └─ dtoa.c
            │  │  │     ├─ missing.c
            │  │  │     ├─ missing.h
            │  │  │     ├─ missing.o
            │  │  │     └─ static_assert.h
            │  │  ├─ lib
            │  │  │  ├─ bigdecimal
            │  │  │  │  ├─ jacobian.rb
            │  │  │  │  ├─ ludcmp.rb
            │  │  │  │  ├─ math.rb
            │  │  │  │  ├─ newton.rb
            │  │  │  │  └─ util.rb
            │  │  │  ├─ bigdecimal.bundle
            │  │  │  └─ bigdecimal.rb
            │  │  └─ sample
            │  │     ├─ linear.rb
            │  │     ├─ nlsolve.rb
            │  │     └─ pi.rb
            │  ├─ claide-1.1.0
            │  │  ├─ .kick
            │  │  ├─ .rubocop.yml
            │  │  ├─ .rubocop_cocoapods.yml
            │  │  ├─ .rubocop_todo.yml
            │  │  ├─ .yardopts
            │  │  ├─ CHANGELOG.md
            │  │  ├─ Gemfile
            │  │  ├─ Gemfile.lock
            │  │  ├─ LICENSE
            │  │  ├─ README.md
            │  │  ├─ Rakefile
            │  │  ├─ claide.gemspec
            │  │  └─ lib
            │  │     ├─ claide
            │  │     │  ├─ ansi
            │  │     │  │  ├─ cursor.rb
            │  │     │  │  ├─ graphics.rb
            │  │     │  │  └─ string_escaper.rb
            │  │     │  ├─ ansi.rb
            │  │     │  ├─ argument.rb
            │  │     │  ├─ argv.rb
            │  │     │  ├─ command
            │  │     │  │  ├─ argument_suggester.rb
            │  │     │  │  ├─ banner.rb
            │  │     │  │  └─ plugin_manager.rb
            │  │     │  ├─ command.rb
            │  │     │  ├─ gem_version.rb
            │  │     │  ├─ help.rb
            │  │     │  └─ informative_error.rb
            │  │     └─ claide.rb
            │  ├─ cocoapods-1.15.2
            │  │  ├─ CHANGELOG.md
            │  │  ├─ LICENSE
            │  │  ├─ README.md
            │  │  ├─ bin
            │  │  │  ├─ pod
            │  │  │  └─ sandbox-pod
            │  │  └─ lib
            │  │     ├─ cocoapods
            │  │     │  ├─ command
            │  │     │  │  ├─ cache
            │  │     │  │  │  ├─ clean.rb
            │  │     │  │  │  └─ list.rb
            │  │     │  │  ├─ cache.rb
            │  │     │  │  ├─ env.rb
            │  │     │  │  ├─ init.rb
            │  │     │  │  ├─ install.rb
            │  │     │  │  ├─ ipc
            │  │     │  │  │  ├─ list.rb
            │  │     │  │  │  ├─ podfile.rb
            │  │     │  │  │  ├─ podfile_json.rb
            │  │     │  │  │  ├─ repl.rb
            │  │     │  │  │  ├─ spec.rb
            │  │     │  │  │  └─ update_search_index.rb
            │  │     │  │  ├─ ipc.rb
            │  │     │  │  ├─ lib
            │  │     │  │  │  ├─ create.rb
            │  │     │  │  │  └─ lint.rb
            │  │     │  │  ├─ lib.rb
            │  │     │  │  ├─ list.rb
            │  │     │  │  ├─ options
            │  │     │  │  │  ├─ project_directory.rb
            │  │     │  │  │  └─ repo_update.rb
            │  │     │  │  ├─ outdated.rb
            │  │     │  │  ├─ repo
            │  │     │  │  │  ├─ add.rb
            │  │     │  │  │  ├─ add_cdn.rb
            │  │     │  │  │  ├─ lint.rb
            │  │     │  │  │  ├─ list.rb
            │  │     │  │  │  ├─ push.rb
            │  │     │  │  │  ├─ remove.rb
            │  │     │  │  │  └─ update.rb
            │  │     │  │  ├─ repo.rb
            │  │     │  │  ├─ setup.rb
            │  │     │  │  ├─ spec
            │  │     │  │  │  ├─ cat.rb
            │  │     │  │  │  ├─ create.rb
            │  │     │  │  │  ├─ edit.rb
            │  │     │  │  │  ├─ lint.rb
            │  │     │  │  │  └─ which.rb
            │  │     │  │  ├─ spec.rb
            │  │     │  │  └─ update.rb
            │  │     │  ├─ command.rb
            │  │     │  ├─ config.rb
            │  │     │  ├─ core_overrides.rb
            │  │     │  ├─ downloader
            │  │     │  │  ├─ cache.rb
            │  │     │  │  ├─ request.rb
            │  │     │  │  └─ response.rb
            │  │     │  ├─ downloader.rb
            │  │     │  ├─ executable.rb
            │  │     │  ├─ external_sources
            │  │     │  │  ├─ abstract_external_source.rb
            │  │     │  │  ├─ downloader_source.rb
            │  │     │  │  ├─ path_source.rb
            │  │     │  │  └─ podspec_source.rb
            │  │     │  ├─ external_sources.rb
            │  │     │  ├─ gem_version.rb
            │  │     │  ├─ generator
            │  │     │  │  ├─ acknowledgements
            │  │     │  │  │  ├─ markdown.rb
            │  │     │  │  │  └─ plist.rb
            │  │     │  │  ├─ acknowledgements.rb
            │  │     │  │  ├─ app_target_helper.rb
            │  │     │  │  ├─ bridge_support.rb
            │  │     │  │  ├─ constant.rb
            │  │     │  │  ├─ copy_dsyms_script.rb
            │  │     │  │  ├─ copy_resources_script.rb
            │  │     │  │  ├─ copy_xcframework_script.rb
            │  │     │  │  ├─ dummy_source.rb
            │  │     │  │  ├─ embed_frameworks_script.rb
            │  │     │  │  ├─ file_list.rb
            │  │     │  │  ├─ header.rb
            │  │     │  │  ├─ info_plist_file.rb
            │  │     │  │  ├─ module_map.rb
            │  │     │  │  ├─ prefix_header.rb
            │  │     │  │  ├─ script_phase_constants.rb
            │  │     │  │  └─ umbrella_header.rb
            │  │     │  ├─ hooks_manager.rb
            │  │     │  ├─ installer
            │  │     │  │  ├─ analyzer
            │  │     │  │  │  ├─ analysis_result.rb
            │  │     │  │  │  ├─ locking_dependency_analyzer.rb
            │  │     │  │  │  ├─ pod_variant.rb
            │  │     │  │  │  ├─ pod_variant_set.rb
            │  │     │  │  │  ├─ podfile_dependency_cache.rb
            │  │     │  │  │  ├─ sandbox_analyzer.rb
            │  │     │  │  │  ├─ specs_state.rb
            │  │     │  │  │  ├─ target_inspection_result.rb
            │  │     │  │  │  └─ target_inspector.rb
            │  │     │  │  ├─ analyzer.rb
            │  │     │  │  ├─ base_install_hooks_context.rb
            │  │     │  │  ├─ installation_options.rb
            │  │     │  │  ├─ pod_source_downloader.rb
            │  │     │  │  ├─ pod_source_installer.rb
            │  │     │  │  ├─ pod_source_preparer.rb
            │  │     │  │  ├─ podfile_validator.rb
            │  │     │  │  ├─ post_install_hooks_context.rb
            │  │     │  │  ├─ post_integrate_hooks_context.rb
            │  │     │  │  ├─ pre_install_hooks_context.rb
            │  │     │  │  ├─ pre_integrate_hooks_context.rb
            │  │     │  │  ├─ project_cache
            │  │     │  │  │  ├─ project_cache.rb
            │  │     │  │  │  ├─ project_cache_analysis_result.rb
            │  │     │  │  │  ├─ project_cache_analyzer.rb
            │  │     │  │  │  ├─ project_cache_version.rb
            │  │     │  │  │  ├─ project_installation_cache.rb
            │  │     │  │  │  ├─ project_metadata_cache.rb
            │  │     │  │  │  ├─ target_cache_key.rb
            │  │     │  │  │  └─ target_metadata.rb
            │  │     │  │  ├─ sandbox_dir_cleaner.rb
            │  │     │  │  ├─ sandbox_header_paths_installer.rb
            │  │     │  │  ├─ source_provider_hooks_context.rb
            │  │     │  │  ├─ target_uuid_generator.rb
            │  │     │  │  ├─ user_project_integrator
            │  │     │  │  │  ├─ target_integrator
            │  │     │  │  │  │  └─ xcconfig_integrator.rb
            │  │     │  │  │  └─ target_integrator.rb
            │  │     │  │  ├─ user_project_integrator.rb
            │  │     │  │  ├─ xcode
            │  │     │  │  │  ├─ multi_pods_project_generator.rb
            │  │     │  │  │  ├─ pods_project_generator
            │  │     │  │  │  │  ├─ aggregate_target_dependency_installer.rb
            │  │     │  │  │  │  ├─ aggregate_target_installer.rb
            │  │     │  │  │  │  ├─ app_host_installer.rb
            │  │     │  │  │  │  ├─ file_references_installer.rb
            │  │     │  │  │  │  ├─ pod_target_dependency_installer.rb
            │  │     │  │  │  │  ├─ pod_target_installer.rb
            │  │     │  │  │  │  ├─ pod_target_integrator.rb
            │  │     │  │  │  │  ├─ pods_project_writer.rb
            │  │     │  │  │  │  ├─ project_generator.rb
            │  │     │  │  │  │  ├─ target_installation_result.rb
            │  │     │  │  │  │  ├─ target_installer.rb
            │  │     │  │  │  │  └─ target_installer_helper.rb
            │  │     │  │  │  ├─ pods_project_generator.rb
            │  │     │  │  │  ├─ pods_project_generator_result.rb
            │  │     │  │  │  ├─ single_pods_project_generator.rb
            │  │     │  │  │  └─ target_validator.rb
            │  │     │  │  └─ xcode.rb
            │  │     │  ├─ installer.rb
            │  │     │  ├─ native_target_extension.rb
            │  │     │  ├─ open-uri.rb
            │  │     │  ├─ podfile.rb
            │  │     │  ├─ project.rb
            │  │     │  ├─ resolver
            │  │     │  │  ├─ lazy_specification.rb
            │  │     │  │  └─ resolver_specification.rb
            │  │     │  ├─ resolver.rb
            │  │     │  ├─ sandbox
            │  │     │  │  ├─ file_accessor.rb
            │  │     │  │  ├─ headers_store.rb
            │  │     │  │  ├─ path_list.rb
            │  │     │  │  ├─ pod_dir_cleaner.rb
            │  │     │  │  └─ podspec_finder.rb
            │  │     │  ├─ sandbox.rb
            │  │     │  ├─ sources_manager.rb
            │  │     │  ├─ target
            │  │     │  │  ├─ aggregate_target.rb
            │  │     │  │  ├─ build_settings.rb
            │  │     │  │  └─ pod_target.rb
            │  │     │  ├─ target.rb
            │  │     │  ├─ user_interface
            │  │     │  │  ├─ error_report.rb
            │  │     │  │  └─ inspector_reporter.rb
            │  │     │  ├─ user_interface.rb
            │  │     │  ├─ validator.rb
            │  │     │  ├─ version_metadata.rb
            │  │     │  ├─ xcode
            │  │     │  │  ├─ framework_paths.rb
            │  │     │  │  ├─ linkage_analyzer.rb
            │  │     │  │  ├─ xcframework
            │  │     │  │  │  └─ xcframework_slice.rb
            │  │     │  │  └─ xcframework.rb
            │  │     │  └─ xcode.rb
            │  │     └─ cocoapods.rb
            │  ├─ cocoapods-core-1.15.2
            │  │  ├─ LICENSE
            │  │  ├─ README.md
            │  │  └─ lib
            │  │     ├─ cocoapods-core
            │  │     │  ├─ build_type.rb
            │  │     │  ├─ cdn_source.rb
            │  │     │  ├─ core_ui.rb
            │  │     │  ├─ dependency.rb
            │  │     │  ├─ gem_version.rb
            │  │     │  ├─ github.rb
            │  │     │  ├─ http.rb
            │  │     │  ├─ lockfile.rb
            │  │     │  ├─ metrics.rb
            │  │     │  ├─ platform.rb
            │  │     │  ├─ podfile
            │  │     │  │  ├─ dsl.rb
            │  │     │  │  └─ target_definition.rb
            │  │     │  ├─ podfile.rb
            │  │     │  ├─ requirement.rb
            │  │     │  ├─ source
            │  │     │  │  ├─ acceptor.rb
            │  │     │  │  ├─ aggregate.rb
            │  │     │  │  ├─ health_reporter.rb
            │  │     │  │  ├─ manager.rb
            │  │     │  │  └─ metadata.rb
            │  │     │  ├─ source.rb
            │  │     │  ├─ specification
            │  │     │  │  ├─ consumer.rb
            │  │     │  │  ├─ dsl
            │  │     │  │  │  ├─ attribute.rb
            │  │     │  │  │  ├─ attribute_support.rb
            │  │     │  │  │  ├─ deprecations.rb
            │  │     │  │  │  └─ platform_proxy.rb
            │  │     │  │  ├─ dsl.rb
            │  │     │  │  ├─ json.rb
            │  │     │  │  ├─ linter
            │  │     │  │  │  ├─ analyzer.rb
            │  │     │  │  │  └─ result.rb
            │  │     │  │  ├─ linter.rb
            │  │     │  │  ├─ root_attribute_accessors.rb
            │  │     │  │  ├─ set
            │  │     │  │  │  └─ presenter.rb
            │  │     │  │  └─ set.rb
            │  │     │  ├─ specification.rb
            │  │     │  ├─ standard_error.rb
            │  │     │  ├─ trunk_source.rb
            │  │     │  ├─ vendor
            │  │     │  │  ├─ requirement.rb
            │  │     │  │  └─ version.rb
            │  │     │  ├─ vendor.rb
            │  │     │  ├─ version.rb
            │  │     │  └─ yaml_helper.rb
            │  │     └─ cocoapods-core.rb
            │  ├─ cocoapods-deintegrate-1.0.5
            │  │  ├─ LICENSE
            │  │  ├─ README.md
            │  │  └─ lib
            │  │     ├─ cocoapods
            │  │     │  ├─ command
            │  │     │  │  └─ deintegrate.rb
            │  │     │  ├─ deintegrate
            │  │     │  │  └─ gem_version.rb
            │  │     │  └─ deintegrator.rb
            │  │     ├─ cocoapods_deintegrate.rb
            │  │     └─ cocoapods_plugin.rb
            │  ├─ cocoapods-downloader-2.1
            │  │  ├─ LICENSE
            │  │  ├─ README.markdown
            │  │  └─ lib
            │  │     ├─ cocoapods-downloader
            │  │     │  ├─ api.rb
            │  │     │  ├─ api_exposable.rb
            │  │     │  ├─ base.rb
            │  │     │  ├─ gem_version.rb
            │  │     │  ├─ git.rb
            │  │     │  ├─ http.rb
            │  │     │  ├─ mercurial.rb
            │  │     │  ├─ remote_file.rb
            │  │     │  ├─ scp.rb
            │  │     │  └─ subversion.rb
            │  │     └─ cocoapods-downloader.rb
            │  ├─ cocoapods-plugins-1.0.0
            │  │  ├─ .rubocop.yml
            │  │  ├─ .rubocop_cocoapods.yml
            │  │  ├─ .travis.yml
            │  │  ├─ CHANGELOG.md
            │  │  ├─ Gemfile
            │  │  ├─ Gemfile.lock
            │  │  ├─ LICENSE
            │  │  ├─ README.md
            │  │  ├─ Rakefile
            │  │  ├─ cocoapods-plugins.gemspec
            │  │  ├─ lib
            │  │  │  ├─ cocoapods_plugin.rb
            │  │  │  ├─ cocoapods_plugins.rb
            │  │  │  └─ pod
            │  │  │     └─ command
            │  │  │        ├─ gem_helper.rb
            │  │  │        ├─ gem_index_cache.rb
            │  │  │        ├─ plugins
            │  │  │        │  ├─ create.rb
            │  │  │        │  ├─ installed.rb
            │  │  │        │  ├─ list.rb
            │  │  │        │  ├─ publish.rb
            │  │  │        │  └─ search.rb
            │  │  │        ├─ plugins.rb
            │  │  │        └─ plugins_helper.rb
            │  │  ├─ plugins.json
            │  │  └─ spec
            │  │     ├─ command
            │  │     │  ├─ gem_helper_spec.rb
            │  │     │  ├─ gem_index_cache_spec.rb
            │  │     │  ├─ plugins
            │  │     │  │  ├─ create_spec.rb
            │  │     │  │  ├─ installed_spec.rb
            │  │     │  │  ├─ list_spec.rb
            │  │     │  │  ├─ publish_spec.rb
            │  │     │  │  └─ search_spec.rb
            │  │     │  ├─ plugins_helper_spec.rb
            │  │     │  └─ plugins_spec.rb
            │  │     ├─ fixtures
            │  │     │  ├─ cocoapods-foo1.gemspec
            │  │     │  ├─ cocoapods-foo2.gemspec
            │  │     │  ├─ plugins.json
            │  │     │  └─ unprefixed.gemspec
            │  │     └─ spec_helper.rb
            │  ├─ cocoapods-search-1.0.1
            │  │  ├─ CHANGELOG.md
            │  │  ├─ Gemfile
            │  │  ├─ Gemfile.lock
            │  │  ├─ LICENSE.txt
            │  │  ├─ README.md
            │  │  ├─ Rakefile
            │  │  ├─ cocoapods-search.gemspec
            │  │  ├─ lib
            │  │  │  ├─ cocoapods-search
            │  │  │  │  ├─ command
            │  │  │  │  │  └─ search.rb
            │  │  │  │  ├─ command.rb
            │  │  │  │  └─ gem_version.rb
            │  │  │  ├─ cocoapods-search.rb
            │  │  │  └─ cocoapods_plugin.rb
            │  │  └─ spec
            │  │     ├─ command
            │  │     │  └─ search_spec.rb
            │  │     ├─ fixtures
            │  │     │  └─ spec-repos
            │  │     │     └─ test_repo
            │  │     │        ├─ BananaLib
            │  │     │        │  └─ 1.0
            │  │     │        │     └─ BananaLib.podspec
            │  │     │        ├─ JSONKit
            │  │     │        │  ├─ 1.4
            │  │     │        │  │  └─ JSONKit.podspec
            │  │     │        │  └─ 999.999.999
            │  │     │        │     └─ JSONKit.podspec
            │  │     │        ├─ OrangeFramework
            │  │     │        │  └─ 0.1.0
            │  │     │        │     └─ OrangeFramework.podspec
            │  │     │        ├─ Pod+With+Plus+Signs
            │  │     │        │  └─ 1.0
            │  │     │        │     └─ Pod+With+Plus+Signs.podspec
            │  │     │        ├─ Realm
            │  │     │        │  └─ 0.94
            │  │     │        │     └─ Realm.podspec
            │  │     │        └─ monkey
            │  │     │           └─ 1.0.2
            │  │     │              └─ monkey.podspec
            │  │     ├─ spec_helper
            │  │     │  ├─ command.rb
            │  │     │  ├─ fixture.rb
            │  │     │  ├─ pre_flight.rb
            │  │     │  ├─ temporary_repos.rb
            │  │     │  └─ user_interface.rb
            │  │     └─ spec_helper.rb
            │  ├─ cocoapods-trunk-1.6.0
            │  │  ├─ .kick
            │  │  ├─ .rubocop.yml
            │  │  ├─ .rubocop_cocoapods.yml
            │  │  ├─ .rubocop_todo.yml
            │  │  ├─ CHANGELOG.md
            │  │  ├─ Gemfile
            │  │  ├─ Gemfile.lock
            │  │  ├─ LICENSE.txt
            │  │  ├─ README.md
            │  │  ├─ Rakefile
            │  │  ├─ cocoapods-trunk.gemspec
            │  │  ├─ lib
            │  │  │  ├─ cocoapods_plugin.rb
            │  │  │  ├─ cocoapods_trunk.rb
            │  │  │  └─ pod
            │  │  │     └─ command
            │  │  │        ├─ trunk
            │  │  │        │  ├─ add_owner.rb
            │  │  │        │  ├─ delete.rb
            │  │  │        │  ├─ deprecate.rb
            │  │  │        │  ├─ info.rb
            │  │  │        │  ├─ me.rb
            │  │  │        │  ├─ push.rb
            │  │  │        │  ├─ register.rb
            │  │  │        │  └─ remove_owner.rb
            │  │  │        └─ trunk.rb
            │  │  └─ spec
            │  │     ├─ command
            │  │     │  ├─ trunk
            │  │     │  │  ├─ addowner_spec.rb
            │  │     │  │  ├─ delete_spec.rb
            │  │     │  │  ├─ deprecate_spec.rb
            │  │     │  │  ├─ info_spec.rb
            │  │     │  │  ├─ me_spec.rb
            │  │     │  │  ├─ push_spec.rb
            │  │     │  │  ├─ register_spec.rb
            │  │     │  │  └─ remove_owner_spec.rb
            │  │     │  └─ trunk_spec.rb
            │  │     ├─ fixtures
            │  │     │  └─ BananaLib.podspec
            │  │     └─ spec_helper.rb
            │  ├─ cocoapods-try-1.2.0
            │  │  ├─ .rubocop.yml
            │  │  ├─ .rubocop_cocoapods.yml
            │  │  ├─ .rubocop_todo.yml
            │  │  ├─ .travis.yml
            │  │  ├─ CHANGELOG.md
            │  │  ├─ Gemfile
            │  │  ├─ Gemfile.lock
            │  │  ├─ LICENSE
            │  │  ├─ README.md
            │  │  ├─ Rakefile
            │  │  ├─ cocoapods-try.gemspec
            │  │  ├─ lib
            │  │  │  ├─ cocoapods_plugin.rb
            │  │  │  ├─ cocoapods_try.rb
            │  │  │  └─ pod
            │  │  │     ├─ command
            │  │  │     │  └─ try.rb
            │  │  │     └─ try_settings.rb
            │  │  └─ spec
            │  │     ├─ command
            │  │     │  ├─ try_settings_spec.rb
            │  │     │  └─ try_spec.rb
            │  │     └─ spec_helper.rb
            │  ├─ colored2-3.1.2
            │  │  ├─ LICENSE
            │  │  ├─ README.md
            │  │  ├─ Rakefile
            │  │  ├─ lib
            │  │  │  ├─ colored2
            │  │  │  │  ├─ ascii_decorator.rb
            │  │  │  │  ├─ codes.rb
            │  │  │  │  ├─ numbers.rb
            │  │  │  │  ├─ object.rb
            │  │  │  │  ├─ strings.rb
            │  │  │  │  └─ version.rb
            │  │  │  └─ colored2.rb
            │  │  └─ spec
            │  │     ├─ colored2
            │  │     │  ├─ numbers_spec.rb
            │  │     │  ├─ object_spec.rb
            │  │     │  └─ strings_spec.rb
            │  │     ├─ colored2_spec.rb
            │  │     └─ spec_helper.rb
            │  ├─ concurrent-ruby-1.3.3
            │  │  ├─ CHANGELOG.md
            │  │  ├─ Gemfile
            │  │  ├─ LICENSE.txt
            │  │  ├─ README.md
            │  │  ├─ Rakefile
            │  │  ├─ ext
            │  │  │  └─ concurrent-ruby
            │  │  │     ├─ ConcurrentRubyService.java
            │  │  │     └─ com
            │  │  │        └─ concurrent_ruby
            │  │  │           └─ ext
            │  │  │              ├─ AtomicReferenceLibrary.java
            │  │  │              ├─ JRubyMapBackendLibrary.java
            │  │  │              ├─ JavaAtomicBooleanLibrary.java
            │  │  │              ├─ JavaAtomicFixnumLibrary.java
            │  │  │              ├─ JavaSemaphoreLibrary.java
            │  │  │              ├─ SynchronizationLibrary.java
            │  │  │              ├─ jsr166e
            │  │  │              │  ├─ ConcurrentHashMap.java
            │  │  │              │  ├─ ConcurrentHashMapV8.java
            │  │  │              │  ├─ LongAdder.java
            │  │  │              │  ├─ Striped64.java
            │  │  │              │  └─ nounsafe
            │  │  │              │     ├─ ConcurrentHashMapV8.java
            │  │  │              │     ├─ LongAdder.java
            │  │  │              │     └─ Striped64.java
            │  │  │              └─ jsr166y
            │  │  │                 └─ ThreadLocalRandom.java
            │  │  └─ lib
            │  │     └─ concurrent-ruby
            │  │        ├─ concurrent
            │  │        │  ├─ agent.rb
            │  │        │  ├─ array.rb
            │  │        │  ├─ async.rb
            │  │        │  ├─ atom.rb
            │  │        │  ├─ atomic
            │  │        │  │  ├─ atomic_boolean.rb
            │  │        │  │  ├─ atomic_fixnum.rb
            │  │        │  │  ├─ atomic_markable_reference.rb
            │  │        │  │  ├─ atomic_reference.rb
            │  │        │  │  ├─ count_down_latch.rb
            │  │        │  │  ├─ cyclic_barrier.rb
            │  │        │  │  ├─ event.rb
            │  │        │  │  ├─ fiber_local_var.rb
            │  │        │  │  ├─ java_count_down_latch.rb
            │  │        │  │  ├─ locals.rb
            │  │        │  │  ├─ lock_local_var.rb
            │  │        │  │  ├─ mutex_atomic_boolean.rb
            │  │        │  │  ├─ mutex_atomic_fixnum.rb
            │  │        │  │  ├─ mutex_count_down_latch.rb
            │  │        │  │  ├─ mutex_semaphore.rb
            │  │        │  │  ├─ read_write_lock.rb
            │  │        │  │  ├─ reentrant_read_write_lock.rb
            │  │        │  │  ├─ semaphore.rb
            │  │        │  │  └─ thread_local_var.rb
            │  │        │  ├─ atomic_reference
            │  │        │  │  ├─ atomic_direct_update.rb
            │  │        │  │  ├─ mutex_atomic.rb
            │  │        │  │  └─ numeric_cas_wrapper.rb
            │  │        │  ├─ atomics.rb
            │  │        │  ├─ collection
            │  │        │  │  ├─ copy_on_notify_observer_set.rb
            │  │        │  │  ├─ copy_on_write_observer_set.rb
            │  │        │  │  ├─ java_non_concurrent_priority_queue.rb
            │  │        │  │  ├─ lock_free_stack.rb
            │  │        │  │  ├─ map
            │  │        │  │  │  ├─ mri_map_backend.rb
            │  │        │  │  │  ├─ non_concurrent_map_backend.rb
            │  │        │  │  │  ├─ synchronized_map_backend.rb
            │  │        │  │  │  └─ truffleruby_map_backend.rb
            │  │        │  │  ├─ non_concurrent_priority_queue.rb
            │  │        │  │  └─ ruby_non_concurrent_priority_queue.rb
            │  │        │  ├─ concern
            │  │        │  │  ├─ deprecation.rb
            │  │        │  │  ├─ dereferenceable.rb
            │  │        │  │  ├─ logging.rb
            │  │        │  │  ├─ obligation.rb
            │  │        │  │  └─ observable.rb
            │  │        │  ├─ concurrent_ruby.jar
            │  │        │  ├─ configuration.rb
            │  │        │  ├─ constants.rb
            │  │        │  ├─ dataflow.rb
            │  │        │  ├─ delay.rb
            │  │        │  ├─ errors.rb
            │  │        │  ├─ exchanger.rb
            │  │        │  ├─ executor
            │  │        │  │  ├─ abstract_executor_service.rb
            │  │        │  │  ├─ cached_thread_pool.rb
            │  │        │  │  ├─ executor_service.rb
            │  │        │  │  ├─ fixed_thread_pool.rb
            │  │        │  │  ├─ immediate_executor.rb
            │  │        │  │  ├─ indirect_immediate_executor.rb
            │  │        │  │  ├─ java_executor_service.rb
            │  │        │  │  ├─ java_single_thread_executor.rb
            │  │        │  │  ├─ java_thread_pool_executor.rb
            │  │        │  │  ├─ ruby_executor_service.rb
            │  │        │  │  ├─ ruby_single_thread_executor.rb
            │  │        │  │  ├─ ruby_thread_pool_executor.rb
            │  │        │  │  ├─ safe_task_executor.rb
            │  │        │  │  ├─ serial_executor_service.rb
            │  │        │  │  ├─ serialized_execution.rb
            │  │        │  │  ├─ serialized_execution_delegator.rb
            │  │        │  │  ├─ simple_executor_service.rb
            │  │        │  │  ├─ single_thread_executor.rb
            │  │        │  │  ├─ thread_pool_executor.rb
            │  │        │  │  └─ timer_set.rb
            │  │        │  ├─ executors.rb
            │  │        │  ├─ future.rb
            │  │        │  ├─ hash.rb
            │  │        │  ├─ immutable_struct.rb
            │  │        │  ├─ ivar.rb
            │  │        │  ├─ map.rb
            │  │        │  ├─ maybe.rb
            │  │        │  ├─ mutable_struct.rb
            │  │        │  ├─ mvar.rb
            │  │        │  ├─ options.rb
            │  │        │  ├─ promise.rb
            │  │        │  ├─ promises.rb
            │  │        │  ├─ re_include.rb
            │  │        │  ├─ scheduled_task.rb
            │  │        │  ├─ set.rb
            │  │        │  ├─ settable_struct.rb
            │  │        │  ├─ synchronization
            │  │        │  │  ├─ abstract_lockable_object.rb
            │  │        │  │  ├─ abstract_object.rb
            │  │        │  │  ├─ abstract_struct.rb
            │  │        │  │  ├─ condition.rb
            │  │        │  │  ├─ full_memory_barrier.rb
            │  │        │  │  ├─ jruby_lockable_object.rb
            │  │        │  │  ├─ lock.rb
            │  │        │  │  ├─ lockable_object.rb
            │  │        │  │  ├─ mutex_lockable_object.rb
            │  │        │  │  ├─ object.rb
            │  │        │  │  ├─ safe_initialization.rb
            │  │        │  │  └─ volatile.rb
            │  │        │  ├─ synchronization.rb
            │  │        │  ├─ thread_safe
            │  │        │  │  ├─ synchronized_delegator.rb
            │  │        │  │  ├─ util
            │  │        │  │  │  ├─ adder.rb
            │  │        │  │  │  ├─ data_structures.rb
            │  │        │  │  │  ├─ power_of_two_tuple.rb
            │  │        │  │  │  ├─ striped64.rb
            │  │        │  │  │  ├─ volatile.rb
            │  │        │  │  │  └─ xor_shift_random.rb
            │  │        │  │  └─ util.rb
            │  │        │  ├─ timer_task.rb
            │  │        │  ├─ tuple.rb
            │  │        │  ├─ tvar.rb
            │  │        │  ├─ utility
            │  │        │  │  ├─ engine.rb
            │  │        │  │  ├─ monotonic_time.rb
            │  │        │  │  ├─ native_extension_loader.rb
            │  │        │  │  ├─ native_integer.rb
            │  │        │  │  └─ processor_counter.rb
            │  │        │  └─ version.rb
            │  │        ├─ concurrent-ruby.rb
            │  │        └─ concurrent.rb
            │  ├─ escape-0.0.4
            │  │  ├─ Readme
            │  │  ├─ doc_include
            │  │  │  └─ template
            │  │  │     └─ qualitysmith.rb
            │  │  └─ lib
            │  │     └─ escape.rb
            │  ├─ ethon-0.16.0
            │  │  ├─ .rspec
            │  │  ├─ CHANGELOG.md
            │  │  ├─ Gemfile
            │  │  ├─ Guardfile
            │  │  ├─ LICENSE
            │  │  ├─ README.md
            │  │  ├─ Rakefile
            │  │  ├─ ethon.gemspec
            │  │  ├─ lib
            │  │  │  ├─ ethon
            │  │  │  │  ├─ curl.rb
            │  │  │  │  ├─ curls
            │  │  │  │  │  ├─ classes.rb
            │  │  │  │  │  ├─ codes.rb
            │  │  │  │  │  ├─ constants.rb
            │  │  │  │  │  ├─ form_options.rb
            │  │  │  │  │  ├─ functions.rb
            │  │  │  │  │  ├─ infos.rb
            │  │  │  │  │  ├─ messages.rb
            │  │  │  │  │  ├─ options.rb
            │  │  │  │  │  └─ settings.rb
            │  │  │  │  ├─ easy
            │  │  │  │  │  ├─ callbacks.rb
            │  │  │  │  │  ├─ debug_info.rb
            │  │  │  │  │  ├─ features.rb
            │  │  │  │  │  ├─ form.rb
            │  │  │  │  │  ├─ header.rb
            │  │  │  │  │  ├─ http
            │  │  │  │  │  │  ├─ actionable.rb
            │  │  │  │  │  │  ├─ custom.rb
            │  │  │  │  │  │  ├─ delete.rb
            │  │  │  │  │  │  ├─ get.rb
            │  │  │  │  │  │  ├─ head.rb
            │  │  │  │  │  │  ├─ options.rb
            │  │  │  │  │  │  ├─ patch.rb
            │  │  │  │  │  │  ├─ post.rb
            │  │  │  │  │  │  ├─ postable.rb
            │  │  │  │  │  │  ├─ put.rb
            │  │  │  │  │  │  └─ putable.rb
            │  │  │  │  │  ├─ http.rb
            │  │  │  │  │  ├─ informations.rb
            │  │  │  │  │  ├─ mirror.rb
            │  │  │  │  │  ├─ operations.rb
            │  │  │  │  │  ├─ options.rb
            │  │  │  │  │  ├─ params.rb
            │  │  │  │  │  ├─ queryable.rb
            │  │  │  │  │  ├─ response_callbacks.rb
            │  │  │  │  │  └─ util.rb
            │  │  │  │  ├─ easy.rb
            │  │  │  │  ├─ errors
            │  │  │  │  │  ├─ ethon_error.rb
            │  │  │  │  │  ├─ global_init.rb
            │  │  │  │  │  ├─ invalid_option.rb
            │  │  │  │  │  ├─ invalid_value.rb
            │  │  │  │  │  ├─ multi_add.rb
            │  │  │  │  │  ├─ multi_fdset.rb
            │  │  │  │  │  ├─ multi_remove.rb
            │  │  │  │  │  ├─ multi_timeout.rb
            │  │  │  │  │  └─ select.rb
            │  │  │  │  ├─ errors.rb
            │  │  │  │  ├─ libc.rb
            │  │  │  │  ├─ loggable.rb
            │  │  │  │  ├─ multi
            │  │  │  │  │  ├─ operations.rb
            │  │  │  │  │  ├─ options.rb
            │  │  │  │  │  └─ stack.rb
            │  │  │  │  ├─ multi.rb
            │  │  │  │  └─ version.rb
            │  │  │  └─ ethon.rb
            │  │  ├─ profile
            │  │  │  ├─ benchmarks.rb
            │  │  │  ├─ memory_leaks.rb
            │  │  │  ├─ perf_spec_helper.rb
            │  │  │  └─ support
            │  │  │     ├─ memory_test_helpers.rb
            │  │  │     ├─ os_memory_leak_tracker.rb
            │  │  │     └─ ruby_object_leak_tracker.rb
            │  │  └─ spec
            │  │     ├─ ethon
            │  │     │  ├─ curl_spec.rb
            │  │     │  ├─ easy
            │  │     │  │  ├─ callbacks_spec.rb
            │  │     │  │  ├─ debug_info_spec.rb
            │  │     │  │  ├─ features_spec.rb
            │  │     │  │  ├─ form_spec.rb
            │  │     │  │  ├─ header_spec.rb
            │  │     │  │  ├─ http
            │  │     │  │  │  ├─ custom_spec.rb
            │  │     │  │  │  ├─ delete_spec.rb
            │  │     │  │  │  ├─ get_spec.rb
            │  │     │  │  │  ├─ head_spec.rb
            │  │     │  │  │  ├─ options_spec.rb
            │  │     │  │  │  ├─ patch_spec.rb
            │  │     │  │  │  ├─ post_spec.rb
            │  │     │  │  │  └─ put_spec.rb
            │  │     │  │  ├─ http_spec.rb
            │  │     │  │  ├─ informations_spec.rb
            │  │     │  │  ├─ mirror_spec.rb
            │  │     │  │  ├─ operations_spec.rb
            │  │     │  │  ├─ options_spec.rb
            │  │     │  │  ├─ queryable_spec.rb
            │  │     │  │  ├─ response_callbacks_spec.rb
            │  │     │  │  └─ util_spec.rb
            │  │     │  ├─ easy_spec.rb
            │  │     │  ├─ libc_spec.rb
            │  │     │  ├─ loggable_spec.rb
            │  │     │  ├─ multi
            │  │     │  │  ├─ operations_spec.rb
            │  │     │  │  ├─ options_spec.rb
            │  │     │  │  └─ stack_spec.rb
            │  │     │  └─ multi_spec.rb
            │  │     ├─ spec_helper.rb
            │  │     └─ support
            │  │        ├─ localhost_server.rb
            │  │        └─ server.rb
            │  ├─ ffi-1.17.2
            │  │  ├─ CHANGELOG.md
            │  │  ├─ COPYING
            │  │  ├─ Gemfile
            │  │  ├─ LICENSE
            │  │  ├─ LICENSE.SPECS
            │  │  ├─ README.md
            │  │  ├─ Rakefile
            │  │  ├─ ext
            │  │  │  └─ ffi_c
            │  │  │     ├─ .sitearchdir.time
            │  │  │     ├─ AbstractMemory.c
            │  │  │     ├─ AbstractMemory.h
            │  │  │     ├─ AbstractMemory.o
            │  │  │     ├─ ArrayType.c
            │  │  │     ├─ ArrayType.h
            │  │  │     ├─ ArrayType.o
            │  │  │     ├─ Buffer.c
            │  │  │     ├─ Buffer.o
            │  │  │     ├─ Call.c
            │  │  │     ├─ Call.h
            │  │  │     ├─ Call.o
            │  │  │     ├─ ClosurePool.c
            │  │  │     ├─ ClosurePool.h
            │  │  │     ├─ ClosurePool.o
            │  │  │     ├─ DynamicLibrary.c
            │  │  │     ├─ DynamicLibrary.h
            │  │  │     ├─ DynamicLibrary.o
            │  │  │     ├─ Function.c
            │  │  │     ├─ Function.h
            │  │  │     ├─ Function.o
            │  │  │     ├─ FunctionInfo.c
            │  │  │     ├─ FunctionInfo.o
            │  │  │     ├─ LastError.c
            │  │  │     ├─ LastError.h
            │  │  │     ├─ LastError.o
            │  │  │     ├─ LongDouble.c
            │  │  │     ├─ LongDouble.h
            │  │  │     ├─ LongDouble.o
            │  │  │     ├─ Makefile
            │  │  │     ├─ MappedType.c
            │  │  │     ├─ MappedType.h
            │  │  │     ├─ MappedType.o
            │  │  │     ├─ MemoryPointer.c
            │  │  │     ├─ MemoryPointer.h
            │  │  │     ├─ MemoryPointer.o
            │  │  │     ├─ MethodHandle.c
            │  │  │     ├─ MethodHandle.h
            │  │  │     ├─ MethodHandle.o
            │  │  │     ├─ Platform.c
            │  │  │     ├─ Platform.h
            │  │  │     ├─ Platform.o
            │  │  │     ├─ Pointer.c
            │  │  │     ├─ Pointer.h
            │  │  │     ├─ Pointer.o
            │  │  │     ├─ Struct.c
            │  │  │     ├─ Struct.h
            │  │  │     ├─ Struct.o
            │  │  │     ├─ StructByValue.c
            │  │  │     ├─ StructByValue.h
            │  │  │     ├─ StructByValue.o
            │  │  │     ├─ StructLayout.c
            │  │  │     ├─ StructLayout.o
            │  │  │     ├─ Thread.c
            │  │  │     ├─ Thread.h
            │  │  │     ├─ Thread.o
            │  │  │     ├─ Type.c
            │  │  │     ├─ Type.h
            │  │  │     ├─ Type.o
            │  │  │     ├─ Types.c
            │  │  │     ├─ Types.h
            │  │  │     ├─ Types.o
            │  │  │     ├─ Variadic.c
            │  │  │     ├─ Variadic.o
            │  │  │     ├─ compat.h
            │  │  │     ├─ extconf.h
            │  │  │     ├─ extconf.rb
            │  │  │     ├─ ffi.c
            │  │  │     ├─ ffi.o
            │  │  │     ├─ ffi_c.bundle
            │  │  │     ├─ libffi
            │  │  │     │  ├─ .allow-ai-service
            │  │  │     │  ├─ .appveyor
            │  │  │     │  │  ├─ site.exp
            │  │  │     │  │  └─ unix-noexec.exp
            │  │  │     │  ├─ .appveyor.yml
            │  │  │     │  ├─ .ci
            │  │  │     │  │  ├─ ar-lib
            │  │  │     │  │  ├─ bfin-sim.exp
            │  │  │     │  │  ├─ build-cross-in-container.sh
            │  │  │     │  │  ├─ build-in-container.sh
            │  │  │     │  │  ├─ build.sh
            │  │  │     │  │  ├─ compile
            │  │  │     │  │  ├─ install.sh
            │  │  │     │  │  ├─ m32r-sim.exp
            │  │  │     │  │  ├─ moxie-sim.exp
            │  │  │     │  │  ├─ msvs-detect
            │  │  │     │  │  ├─ or1k-sim.exp
            │  │  │     │  │  ├─ powerpc-eabisim.exp
            │  │  │     │  │  ├─ site.exp
            │  │  │     │  │  └─ wine-sim.exp
            │  │  │     │  ├─ ChangeLog.old
            │  │  │     │  ├─ LICENSE
            │  │  │     │  ├─ LICENSE-BUILDTOOLS
            │  │  │     │  ├─ Makefile.am
            │  │  │     │  ├─ Makefile.in
            │  │  │     │  ├─ README.md
            │  │  │     │  ├─ acinclude.m4
            │  │  │     │  ├─ autogen.sh
            │  │  │     │  ├─ compile
            │  │  │     │  ├─ config.guess
            │  │  │     │  ├─ config.sub
            │  │  │     │  ├─ configure
            │  │  │     │  ├─ configure.ac
            │  │  │     │  ├─ configure.host
            │  │  │     │  ├─ doc
            │  │  │     │  │  ├─ Makefile.am
            │  │  │     │  │  ├─ Makefile.in
            │  │  │     │  │  ├─ libffi.texi
            │  │  │     │  │  └─ version.texi
            │  │  │     │  ├─ fficonfig.h.in
            │  │  │     │  ├─ generate-darwin-source-and-headers.py
            │  │  │     │  ├─ include
            │  │  │     │  │  ├─ Makefile.am
            │  │  │     │  │  ├─ Makefile.in
            │  │  │     │  │  ├─ ffi.h.in
            │  │  │     │  │  ├─ ffi_cfi.h
            │  │  │     │  │  ├─ ffi_common.h
            │  │  │     │  │  └─ tramp.h
            │  │  │     │  ├─ install-sh
            │  │  │     │  ├─ libffi.map.in
            │  │  │     │  ├─ libffi.pc.in
            │  │  │     │  ├─ libffi.xcodeproj
            │  │  │     │  │  └─ project.pbxproj
            │  │  │     │  ├─ libtool-ldflags
            │  │  │     │  ├─ libtool-version
            │  │  │     │  ├─ ltmain.sh
            │  │  │     │  ├─ m4
            │  │  │     │  │  ├─ asmcfi.m4
            │  │  │     │  │  ├─ ax_append_flag.m4
            │  │  │     │  │  ├─ ax_cc_maxopt.m4
            │  │  │     │  │  ├─ ax_cflags_warn_all.m4
            │  │  │     │  │  ├─ ax_check_compile_flag.m4
            │  │  │     │  │  ├─ ax_compiler_vendor.m4
            │  │  │     │  │  ├─ ax_configure_args.m4
            │  │  │     │  │  ├─ ax_enable_builddir.m4
            │  │  │     │  │  ├─ ax_gcc_archflag.m4
            │  │  │     │  │  ├─ ax_gcc_x86_cpuid.m4
            │  │  │     │  │  ├─ ax_prepend_flag.m4
            │  │  │     │  │  └─ ax_require_defined.m4
            │  │  │     │  ├─ make_sunver.pl
            │  │  │     │  ├─ man
            │  │  │     │  │  ├─ Makefile.am
            │  │  │     │  │  ├─ Makefile.in
            │  │  │     │  │  ├─ ffi.3
            │  │  │     │  │  ├─ ffi_call.3
            │  │  │     │  │  ├─ ffi_prep_cif.3
            │  │  │     │  │  └─ ffi_prep_cif_var.3
            │  │  │     │  ├─ missing
            │  │  │     │  ├─ msvcc.sh
            │  │  │     │  ├─ src
            │  │  │     │  │  ├─ aarch64
            │  │  │     │  │  │  ├─ ffi.c
            │  │  │     │  │  │  ├─ ffitarget.h
            │  │  │     │  │  │  ├─ internal.h
            │  │  │     │  │  │  ├─ sysv.S
            │  │  │     │  │  │  └─ win64_armasm.S
            │  │  │     │  │  ├─ alpha
            │  │  │     │  │  │  ├─ ffi.c
            │  │  │     │  │  │  ├─ ffitarget.h
            │  │  │     │  │  │  ├─ internal.h
            │  │  │     │  │  │  └─ osf.S
            │  │  │     │  │  ├─ arc
            │  │  │     │  │  │  ├─ arcompact.S
            │  │  │     │  │  │  ├─ ffi.c
            │  │  │     │  │  │  └─ ffitarget.h
            │  │  │     │  │  ├─ arm
            │  │  │     │  │  │  ├─ ffi.c
            │  │  │     │  │  │  ├─ ffitarget.h
            │  │  │     │  │  │  ├─ internal.h
            │  │  │     │  │  │  ├─ sysv.S
            │  │  │     │  │  │  └─ sysv_msvc_arm32.S
            │  │  │     │  │  ├─ avr32
            │  │  │     │  │  │  ├─ ffi.c
            │  │  │     │  │  │  ├─ ffitarget.h
            │  │  │     │  │  │  └─ sysv.S
            │  │  │     │  │  ├─ bfin
            │  │  │     │  │  │  ├─ ffi.c
            │  │  │     │  │  │  ├─ ffitarget.h
            │  │  │     │  │  │  └─ sysv.S
            │  │  │     │  │  ├─ closures.c
            │  │  │     │  │  ├─ cris
            │  │  │     │  │  │  ├─ ffi.c
            │  │  │     │  │  │  ├─ ffitarget.h
            │  │  │     │  │  │  └─ sysv.S
            │  │  │     │  │  ├─ csky
            │  │  │     │  │  │  ├─ ffi.c
            │  │  │     │  │  │  ├─ ffitarget.h
            │  │  │     │  │  │  └─ sysv.S
            │  │  │     │  │  ├─ debug.c
            │  │  │     │  │  ├─ dlmalloc.c
            │  │  │     │  │  ├─ frv
            │  │  │     │  │  │  ├─ eabi.S
            │  │  │     │  │  │  ├─ ffi.c
            │  │  │     │  │  │  └─ ffitarget.h
            │  │  │     │  │  ├─ ia64
            │  │  │     │  │  │  ├─ ffi.c
            │  │  │     │  │  │  ├─ ffitarget.h
            │  │  │     │  │  │  ├─ ia64_flags.h
            │  │  │     │  │  │  └─ unix.S
            │  │  │     │  │  ├─ java_raw_api.c
            │  │  │     │  │  ├─ kvx
            │  │  │     │  │  │  ├─ asm.h
            │  │  │     │  │  │  ├─ ffi.c
            │  │  │     │  │  │  ├─ ffitarget.h
            │  │  │     │  │  │  └─ sysv.S
            │  │  │     │  │  ├─ loongarch64
            │  │  │     │  │  │  ├─ ffi.c
            │  │  │     │  │  │  ├─ ffitarget.h
            │  │  │     │  │  │  └─ sysv.S
            │  │  │     │  │  ├─ m32r
            │  │  │     │  │  │  ├─ ffi.c
            │  │  │     │  │  │  ├─ ffitarget.h
            │  │  │     │  │  │  └─ sysv.S
            │  │  │     │  │  ├─ m68k
            │  │  │     │  │  │  ├─ ffi.c
            │  │  │     │  │  │  ├─ ffitarget.h
            │  │  │     │  │  │  └─ sysv.S
            │  │  │     │  │  ├─ m88k
            │  │  │     │  │  │  ├─ ffi.c
            │  │  │     │  │  │  ├─ ffitarget.h
            │  │  │     │  │  │  └─ obsd.S
            │  │  │     │  │  ├─ metag
            │  │  │     │  │  │  ├─ ffi.c
            │  │  │     │  │  │  ├─ ffitarget.h
            │  │  │     │  │  │  └─ sysv.S
            │  │  │     │  │  ├─ microblaze
            │  │  │     │  │  │  ├─ ffi.c
            │  │  │     │  │  │  ├─ ffitarget.h
            │  │  │     │  │  │  └─ sysv.S
            │  │  │     │  │  ├─ mips
            │  │  │     │  │  │  ├─ ffi.c
            │  │  │     │  │  │  ├─ ffitarget.h
            │  │  │     │  │  │  ├─ n32.S
            │  │  │     │  │  │  └─ o32.S
            │  │  │     │  │  ├─ moxie
            │  │  │     │  │  │  ├─ eabi.S
            │  │  │     │  │  │  ├─ ffi.c
            │  │  │     │  │  │  └─ ffitarget.h
            │  │  │     │  │  ├─ or1k
            │  │  │     │  │  │  ├─ ffi.c
            │  │  │     │  │  │  ├─ ffitarget.h
            │  │  │     │  │  │  └─ sysv.S
            │  │  │     │  │  ├─ pa
            │  │  │     │  │  │  ├─ ffi.c
            │  │  │     │  │  │  ├─ ffi64.c
            │  │  │     │  │  │  ├─ ffitarget.h
            │  │  │     │  │  │  ├─ hpux32.S
            │  │  │     │  │  │  ├─ hpux64.S
            │  │  │     │  │  │  └─ linux.S
            │  │  │     │  │  ├─ powerpc
            │  │  │     │  │  │  ├─ aix.S
            │  │  │     │  │  │  ├─ aix_closure.S
            │  │  │     │  │  │  ├─ asm.h
            │  │  │     │  │  │  ├─ darwin.S
            │  │  │     │  │  │  ├─ darwin_closure.S
            │  │  │     │  │  │  ├─ ffi.c
            │  │  │     │  │  │  ├─ ffi_darwin.c
            │  │  │     │  │  │  ├─ ffi_linux64.c
            │  │  │     │  │  │  ├─ ffi_powerpc.h
            │  │  │     │  │  │  ├─ ffi_sysv.c
            │  │  │     │  │  │  ├─ ffitarget.h
            │  │  │     │  │  │  ├─ internal.h
            │  │  │     │  │  │  ├─ linux64.S
            │  │  │     │  │  │  ├─ linux64_closure.S
            │  │  │     │  │  │  ├─ ppc_closure.S
            │  │  │     │  │  │  ├─ sysv.S
            │  │  │     │  │  │  └─ t-aix
            │  │  │     │  │  ├─ prep_cif.c
            │  │  │     │  │  ├─ raw_api.c
            │  │  │     │  │  ├─ riscv
            │  │  │     │  │  │  ├─ ffi.c
            │  │  │     │  │  │  ├─ ffitarget.h
            │  │  │     │  │  │  └─ sysv.S
            │  │  │     │  │  ├─ s390
            │  │  │     │  │  │  ├─ ffi.c
            │  │  │     │  │  │  ├─ ffitarget.h
            │  │  │     │  │  │  ├─ internal.h
            │  │  │     │  │  │  └─ sysv.S
            │  │  │     │  │  ├─ sh
            │  │  │     │  │  │  ├─ ffi.c
            │  │  │     │  │  │  ├─ ffitarget.h
            │  │  │     │  │  │  └─ sysv.S
            │  │  │     │  │  ├─ sh64
            │  │  │     │  │  │  ├─ ffi.c
            │  │  │     │  │  │  ├─ ffitarget.h
            │  │  │     │  │  │  └─ sysv.S
            │  │  │     │  │  ├─ sparc
            │  │  │     │  │  │  ├─ ffi.c
            │  │  │     │  │  │  ├─ ffi64.c
            │  │  │     │  │  │  ├─ ffitarget.h
            │  │  │     │  │  │  ├─ internal.h
            │  │  │     │  │  │  ├─ v8.S
            │  │  │     │  │  │  └─ v9.S
            │  │  │     │  │  ├─ tile
            │  │  │     │  │  │  ├─ ffi.c
            │  │  │     │  │  │  ├─ ffitarget.h
            │  │  │     │  │  │  └─ tile.S
            │  │  │     │  │  ├─ tramp.c
            │  │  │     │  │  ├─ types.c
            │  │  │     │  │  ├─ vax
            │  │  │     │  │  │  ├─ elfbsd.S
            │  │  │     │  │  │  ├─ ffi.c
            │  │  │     │  │  │  └─ ffitarget.h
            │  │  │     │  │  ├─ wasm32
            │  │  │     │  │  │  ├─ ffi.c
            │  │  │     │  │  │  └─ ffitarget.h
            │  │  │     │  │  ├─ x86
            │  │  │     │  │  │  ├─ asmnames.h
            │  │  │     │  │  │  ├─ ffi.c
            │  │  │     │  │  │  ├─ ffi64.c
            │  │  │     │  │  │  ├─ ffitarget.h
            │  │  │     │  │  │  ├─ ffiw64.c
            │  │  │     │  │  │  ├─ internal.h
            │  │  │     │  │  │  ├─ internal64.h
            │  │  │     │  │  │  ├─ sysv.S
            │  │  │     │  │  │  ├─ sysv_intel.S
            │  │  │     │  │  │  ├─ unix64.S
            │  │  │     │  │  │  ├─ win64.S
            │  │  │     │  │  │  └─ win64_intel.S
            │  │  │     │  │  └─ xtensa
            │  │  │     │  │     ├─ ffi.c
            │  │  │     │  │     ├─ ffitarget.h
            │  │  │     │  │     └─ sysv.S
            │  │  │     │  ├─ stamp-h.in
            │  │  │     │  └─ testsuite
            │  │  │     │     ├─ Makefile.am
            │  │  │     │     ├─ Makefile.in
            │  │  │     │     ├─ config
            │  │  │     │     │  └─ default.exp
            │  │  │     │     ├─ emscripten
            │  │  │     │     │  ├─ build-tests.sh
            │  │  │     │     │  ├─ build.sh
            │  │  │     │     │  ├─ conftest.py
            │  │  │     │     │  ├─ node-tests.sh
            │  │  │     │     │  ├─ test.html
            │  │  │     │     │  └─ test_libffi.py
            │  │  │     │     ├─ lib
            │  │  │     │     │  ├─ libffi.exp
            │  │  │     │     │  ├─ target-libpath.exp
            │  │  │     │     │  └─ wrapper.exp
            │  │  │     │     ├─ libffi.bhaible
            │  │  │     │     │  ├─ Makefile
            │  │  │     │     │  ├─ README
            │  │  │     │     │  ├─ alignof.h
            │  │  │     │     │  ├─ bhaible.exp
            │  │  │     │     │  ├─ test-call.c
            │  │  │     │     │  ├─ test-callback.c
            │  │  │     │     │  └─ testcases.c
            │  │  │     │     ├─ libffi.call
            │  │  │     │     │  ├─ align_mixed.c
            │  │  │     │     │  ├─ align_stdcall.c
            │  │  │     │     │  ├─ bpo_38748.c
            │  │  │     │     │  ├─ call.exp
            │  │  │     │     │  ├─ callback.c
            │  │  │     │     │  ├─ callback2.c
            │  │  │     │     │  ├─ callback3.c
            │  │  │     │     │  ├─ callback4.c
            │  │  │     │     │  ├─ err_bad_typedef.c
            │  │  │     │     │  ├─ ffitest.h
            │  │  │     │     │  ├─ float.c
            │  │  │     │     │  ├─ float1.c
            │  │  │     │     │  ├─ float2.c
            │  │  │     │     │  ├─ float3.c
            │  │  │     │     │  ├─ float4.c
            │  │  │     │     │  ├─ float_va.c
            │  │  │     │     │  ├─ many.c
            │  │  │     │     │  ├─ many2.c
            │  │  │     │     │  ├─ many_double.c
            │  │  │     │     │  ├─ many_mixed.c
            │  │  │     │     │  ├─ negint.c
            │  │  │     │     │  ├─ offsets.c
            │  │  │     │     │  ├─ overread.c
            │  │  │     │     │  ├─ pr1172638.c
            │  │  │     │     │  ├─ promotion.c
            │  │  │     │     │  ├─ pyobjc_tc.c
            │  │  │     │     │  ├─ return_dbl.c
            │  │  │     │     │  ├─ return_dbl1.c
            │  │  │     │     │  ├─ return_dbl2.c
            │  │  │     │     │  ├─ return_fl.c
            │  │  │     │     │  ├─ return_fl1.c
            │  │  │     │     │  ├─ return_fl2.c
            │  │  │     │     │  ├─ return_fl3.c
            │  │  │     │     │  ├─ return_ldl.c
            │  │  │     │     │  ├─ return_ll.c
            │  │  │     │     │  ├─ return_ll1.c
            │  │  │     │     │  ├─ return_sc.c
            │  │  │     │     │  ├─ return_sl.c
            │  │  │     │     │  ├─ return_uc.c
            │  │  │     │     │  ├─ return_ul.c
            │  │  │     │     │  ├─ s55.c
            │  │  │     │     │  ├─ strlen.c
            │  │  │     │     │  ├─ strlen2.c
            │  │  │     │     │  ├─ strlen3.c
            │  │  │     │     │  ├─ strlen4.c
            │  │  │     │     │  ├─ struct1.c
            │  │  │     │     │  ├─ struct10.c
            │  │  │     │     │  ├─ struct2.c
            │  │  │     │     │  ├─ struct3.c
            │  │  │     │     │  ├─ struct4.c
            │  │  │     │     │  ├─ struct5.c
            │  │  │     │     │  ├─ struct6.c
            │  │  │     │     │  ├─ struct7.c
            │  │  │     │     │  ├─ struct8.c
            │  │  │     │     │  ├─ struct9.c
            │  │  │     │     │  ├─ struct_by_value_2.c
            │  │  │     │     │  ├─ struct_by_value_3.c
            │  │  │     │     │  ├─ struct_by_value_3f.c
            │  │  │     │     │  ├─ struct_by_value_4.c
            │  │  │     │     │  ├─ struct_by_value_4f.c
            │  │  │     │     │  ├─ struct_by_value_big.c
            │  │  │     │     │  ├─ struct_by_value_small.c
            │  │  │     │     │  ├─ struct_int_float.c
            │  │  │     │     │  ├─ struct_return_2H.c
            │  │  │     │     │  ├─ struct_return_8H.c
            │  │  │     │     │  ├─ uninitialized.c
            │  │  │     │     │  ├─ va_1.c
            │  │  │     │     │  ├─ va_2.c
            │  │  │     │     │  ├─ va_3.c
            │  │  │     │     │  ├─ va_struct1.c
            │  │  │     │     │  ├─ va_struct2.c
            │  │  │     │     │  ├─ va_struct3.c
            │  │  │     │     │  └─ x32.c
            │  │  │     │     ├─ libffi.closures
            │  │  │     │     │  ├─ closure.exp
            │  │  │     │     │  ├─ closure_fn0.c
            │  │  │     │     │  ├─ closure_fn1.c
            │  │  │     │     │  ├─ closure_fn2.c
            │  │  │     │     │  ├─ closure_fn3.c
            │  │  │     │     │  ├─ closure_fn4.c
            │  │  │     │     │  ├─ closure_fn5.c
            │  │  │     │     │  ├─ closure_fn6.c
            │  │  │     │     │  ├─ closure_loc_fn0.c
            │  │  │     │     │  ├─ closure_simple.c
            │  │  │     │     │  ├─ cls_12byte.c
            │  │  │     │     │  ├─ cls_16byte.c
            │  │  │     │     │  ├─ cls_18byte.c
            │  │  │     │     │  ├─ cls_19byte.c
            │  │  │     │     │  ├─ cls_1_1byte.c
            │  │  │     │     │  ├─ cls_20byte.c
            │  │  │     │     │  ├─ cls_20byte1.c
            │  │  │     │     │  ├─ cls_24byte.c
            │  │  │     │     │  ├─ cls_2byte.c
            │  │  │     │     │  ├─ cls_3_1byte.c
            │  │  │     │     │  ├─ cls_3byte1.c
            │  │  │     │     │  ├─ cls_3byte2.c
            │  │  │     │     │  ├─ cls_3float.c
            │  │  │     │     │  ├─ cls_4_1byte.c
            │  │  │     │     │  ├─ cls_4byte.c
            │  │  │     │     │  ├─ cls_5_1_byte.c
            │  │  │     │     │  ├─ cls_5byte.c
            │  │  │     │     │  ├─ cls_64byte.c
            │  │  │     │     │  ├─ cls_6_1_byte.c
            │  │  │     │     │  ├─ cls_6byte.c
            │  │  │     │     │  ├─ cls_7_1_byte.c
            │  │  │     │     │  ├─ cls_7byte.c
            │  │  │     │     │  ├─ cls_8byte.c
            │  │  │     │     │  ├─ cls_9byte1.c
            │  │  │     │     │  ├─ cls_9byte2.c
            │  │  │     │     │  ├─ cls_align_double.c
            │  │  │     │     │  ├─ cls_align_float.c
            │  │  │     │     │  ├─ cls_align_longdouble.c
            │  │  │     │     │  ├─ cls_align_longdouble_split.c
            │  │  │     │     │  ├─ cls_align_longdouble_split2.c
            │  │  │     │     │  ├─ cls_align_pointer.c
            │  │  │     │     │  ├─ cls_align_sint16.c
            │  │  │     │     │  ├─ cls_align_sint32.c
            │  │  │     │     │  ├─ cls_align_sint64.c
            │  │  │     │     │  ├─ cls_align_uint16.c
            │  │  │     │     │  ├─ cls_align_uint32.c
            │  │  │     │     │  ├─ cls_align_uint64.c
            │  │  │     │     │  ├─ cls_dbls_struct.c
            │  │  │     │     │  ├─ cls_double.c
            │  │  │     │     │  ├─ cls_double_va.c
            │  │  │     │     │  ├─ cls_float.c
            │  │  │     │     │  ├─ cls_longdouble.c
            │  │  │     │     │  ├─ cls_longdouble_va.c
            │  │  │     │     │  ├─ cls_many_mixed_args.c
            │  │  │     │     │  ├─ cls_many_mixed_float_double.c
            │  │  │     │     │  ├─ cls_multi_schar.c
            │  │  │     │     │  ├─ cls_multi_sshort.c
            │  │  │     │     │  ├─ cls_multi_sshortchar.c
            │  │  │     │     │  ├─ cls_multi_uchar.c
            │  │  │     │     │  ├─ cls_multi_ushort.c
            │  │  │     │     │  ├─ cls_multi_ushortchar.c
            │  │  │     │     │  ├─ cls_pointer.c
            │  │  │     │     │  ├─ cls_pointer_stack.c
            │  │  │     │     │  ├─ cls_schar.c
            │  │  │     │     │  ├─ cls_sint.c
            │  │  │     │     │  ├─ cls_sshort.c
            │  │  │     │     │  ├─ cls_struct_va1.c
            │  │  │     │     │  ├─ cls_uchar.c
            │  │  │     │     │  ├─ cls_uint.c
            │  │  │     │     │  ├─ cls_uint_va.c
            │  │  │     │     │  ├─ cls_ulong_va.c
            │  │  │     │     │  ├─ cls_ulonglong.c
            │  │  │     │     │  ├─ cls_ushort.c
            │  │  │     │     │  ├─ err_bad_abi.c
            │  │  │     │     │  ├─ ffitest.h
            │  │  │     │     │  ├─ huge_struct.c
            │  │  │     │     │  ├─ nested_struct.c
            │  │  │     │     │  ├─ nested_struct1.c
            │  │  │     │     │  ├─ nested_struct10.c
            │  │  │     │     │  ├─ nested_struct11.c
            │  │  │     │     │  ├─ nested_struct12.c
            │  │  │     │     │  ├─ nested_struct13.c
            │  │  │     │     │  ├─ nested_struct2.c
            │  │  │     │     │  ├─ nested_struct3.c
            │  │  │     │     │  ├─ nested_struct4.c
            │  │  │     │     │  ├─ nested_struct5.c
            │  │  │     │     │  ├─ nested_struct6.c
            │  │  │     │     │  ├─ nested_struct7.c
            │  │  │     │     │  ├─ nested_struct8.c
            │  │  │     │     │  ├─ nested_struct9.c
            │  │  │     │     │  ├─ problem1.c
            │  │  │     │     │  ├─ single_entry_structs1.c
            │  │  │     │     │  ├─ single_entry_structs2.c
            │  │  │     │     │  ├─ single_entry_structs3.c
            │  │  │     │     │  ├─ stret_large.c
            │  │  │     │     │  ├─ stret_large2.c
            │  │  │     │     │  ├─ stret_medium.c
            │  │  │     │     │  ├─ stret_medium2.c
            │  │  │     │     │  ├─ testclosure.c
            │  │  │     │     │  ├─ unwindtest.cc
            │  │  │     │     │  └─ unwindtest_ffi_call.cc
            │  │  │     │     ├─ libffi.complex
            │  │  │     │     │  ├─ cls_align_complex.inc
            │  │  │     │     │  ├─ cls_align_complex_double.c
            │  │  │     │     │  ├─ cls_align_complex_float.c
            │  │  │     │     │  ├─ cls_align_complex_longdouble.c
            │  │  │     │     │  ├─ cls_complex.inc
            │  │  │     │     │  ├─ cls_complex_double.c
            │  │  │     │     │  ├─ cls_complex_float.c
            │  │  │     │     │  ├─ cls_complex_longdouble.c
            │  │  │     │     │  ├─ cls_complex_struct.inc
            │  │  │     │     │  ├─ cls_complex_struct_double.c
            │  │  │     │     │  ├─ cls_complex_struct_float.c
            │  │  │     │     │  ├─ cls_complex_struct_longdouble.c
            │  │  │     │     │  ├─ cls_complex_va.inc
            │  │  │     │     │  ├─ cls_complex_va_double.c
            │  │  │     │     │  ├─ cls_complex_va_float.c
            │  │  │     │     │  ├─ cls_complex_va_longdouble.c
            │  │  │     │     │  ├─ complex.exp
            │  │  │     │     │  ├─ complex.inc
            │  │  │     │     │  ├─ complex_defs_double.inc
            │  │  │     │     │  ├─ complex_defs_float.inc
            │  │  │     │     │  ├─ complex_defs_longdouble.inc
            │  │  │     │     │  ├─ complex_double.c
            │  │  │     │     │  ├─ complex_float.c
            │  │  │     │     │  ├─ complex_int.c
            │  │  │     │     │  ├─ complex_longdouble.c
            │  │  │     │     │  ├─ ffitest.h
            │  │  │     │     │  ├─ many_complex.inc
            │  │  │     │     │  ├─ many_complex_double.c
            │  │  │     │     │  ├─ many_complex_float.c
            │  │  │     │     │  ├─ many_complex_longdouble.c
            │  │  │     │     │  ├─ return_complex.inc
            │  │  │     │     │  ├─ return_complex1.inc
            │  │  │     │     │  ├─ return_complex1_double.c
            │  │  │     │     │  ├─ return_complex1_float.c
            │  │  │     │     │  ├─ return_complex1_longdouble.c
            │  │  │     │     │  ├─ return_complex2.inc
            │  │  │     │     │  ├─ return_complex2_double.c
            │  │  │     │     │  ├─ return_complex2_float.c
            │  │  │     │     │  ├─ return_complex2_longdouble.c
            │  │  │     │     │  ├─ return_complex_double.c
            │  │  │     │     │  ├─ return_complex_float.c
            │  │  │     │     │  └─ return_complex_longdouble.c
            │  │  │     │     └─ libffi.go
            │  │  │     │        ├─ aa-direct.c
            │  │  │     │        ├─ closure1.c
            │  │  │     │        ├─ ffitest.h
            │  │  │     │        ├─ go.exp
            │  │  │     │        └─ static-chain.h
            │  │  │     ├─ libffi.bsd.mk
            │  │  │     ├─ libffi.darwin.mk
            │  │  │     ├─ libffi.gnu.mk
            │  │  │     ├─ libffi.mk
            │  │  │     ├─ libffi.vc.mk
            │  │  │     ├─ libffi.vc64.mk
            │  │  │     ├─ rbffi.h
            │  │  │     └─ rbffi_endian.h
            │  │  ├─ ffi.gemspec
            │  │  ├─ lib
            │  │  │  ├─ ffi
            │  │  │  │  ├─ abstract_memory.rb
            │  │  │  │  ├─ autopointer.rb
            │  │  │  │  ├─ buffer.rb
            │  │  │  │  ├─ callback.rb
            │  │  │  │  ├─ compat.rb
            │  │  │  │  ├─ data_converter.rb
            │  │  │  │  ├─ dynamic_library.rb
            │  │  │  │  ├─ enum.rb
            │  │  │  │  ├─ errno.rb
            │  │  │  │  ├─ ffi.rb
            │  │  │  │  ├─ function.rb
            │  │  │  │  ├─ io.rb
            │  │  │  │  ├─ library.rb
            │  │  │  │  ├─ library_path.rb
            │  │  │  │  ├─ managedstruct.rb
            │  │  │  │  ├─ memorypointer.rb
            │  │  │  │  ├─ platform
            │  │  │  │  │  ├─ aarch64-darwin
            │  │  │  │  │  │  └─ types.conf
            │  │  │  │  │  ├─ aarch64-freebsd
            │  │  │  │  │  │  └─ types.conf
            │  │  │  │  │  ├─ aarch64-freebsd12
            │  │  │  │  │  │  └─ types.conf
            │  │  │  │  │  ├─ aarch64-linux
            │  │  │  │  │  │  └─ types.conf
            │  │  │  │  │  ├─ aarch64-openbsd
            │  │  │  │  │  │  └─ types.conf
            │  │  │  │  │  ├─ aarch64-windows
            │  │  │  │  │  │  └─ types.conf
            │  │  │  │  │  ├─ arm-freebsd
            │  │  │  │  │  │  └─ types.conf
            │  │  │  │  │  ├─ arm-freebsd12
            │  │  │  │  │  │  └─ types.conf
            │  │  │  │  │  ├─ arm-linux
            │  │  │  │  │  │  └─ types.conf
            │  │  │  │  │  ├─ hppa1.1-linux
            │  │  │  │  │  │  └─ types.conf
            │  │  │  │  │  ├─ hppa2.0-linux
            │  │  │  │  │  │  └─ types.conf
            │  │  │  │  │  ├─ i386-cygwin
            │  │  │  │  │  │  └─ types.conf
            │  │  │  │  │  ├─ i386-darwin
            │  │  │  │  │  │  └─ types.conf
            │  │  │  │  │  ├─ i386-freebsd
            │  │  │  │  │  │  └─ types.conf
            │  │  │  │  │  ├─ i386-freebsd12
            │  │  │  │  │  │  └─ types.conf
            │  │  │  │  │  ├─ i386-gnu
            │  │  │  │  │  │  └─ types.conf
            │  │  │  │  │  ├─ i386-linux
            │  │  │  │  │  │  └─ types.conf
            │  │  │  │  │  ├─ i386-netbsd
            │  │  │  │  │  │  └─ types.conf
            │  │  │  │  │  ├─ i386-openbsd
            │  │  │  │  │  │  └─ types.conf
            │  │  │  │  │  ├─ i386-solaris
            │  │  │  │  │  │  └─ types.conf
            │  │  │  │  │  ├─ i386-windows
            │  │  │  │  │  │  └─ types.conf
            │  │  │  │  │  ├─ ia64-linux
            │  │  │  │  │  │  └─ types.conf
            │  │  │  │  │  ├─ loongarch64-linux
            │  │  │  │  │  │  └─ types.conf
            │  │  │  │  │  ├─ mips-linux
            │  │  │  │  │  │  └─ types.conf
            │  │  │  │  │  ├─ mips64-linux
            │  │  │  │  │  │  └─ types.conf
            │  │  │  │  │  ├─ mips64el-linux
            │  │  │  │  │  │  └─ types.conf
            │  │  │  │  │  ├─ mipsel-linux
            │  │  │  │  │  │  └─ types.conf
            │  │  │  │  │  ├─ mipsisa32r6-linux
            │  │  │  │  │  │  └─ types.conf
            │  │  │  │  │  ├─ mipsisa32r6el-linux
            │  │  │  │  │  │  └─ types.conf
            │  │  │  │  │  ├─ mipsisa64r6-linux
            │  │  │  │  │  │  └─ types.conf
            │  │  │  │  │  ├─ mipsisa64r6el-linux
            │  │  │  │  │  │  └─ types.conf
            │  │  │  │  │  ├─ powerpc-aix
            │  │  │  │  │  │  └─ types.conf
            │  │  │  │  │  ├─ powerpc-darwin
            │  │  │  │  │  │  └─ types.conf
            │  │  │  │  │  ├─ powerpc-linux
            │  │  │  │  │  │  └─ types.conf
            │  │  │  │  │  ├─ powerpc-openbsd
            │  │  │  │  │  │  └─ types.conf
            │  │  │  │  │  ├─ powerpc64-linux
            │  │  │  │  │  │  └─ types.conf
            │  │  │  │  │  ├─ powerpc64le-linux
            │  │  │  │  │  │  └─ types.conf
            │  │  │  │  │  ├─ riscv64-linux
            │  │  │  │  │  │  └─ types.conf
            │  │  │  │  │  ├─ s390-linux
            │  │  │  │  │  │  └─ types.conf
            │  │  │  │  │  ├─ s390x-linux
            │  │  │  │  │  │  └─ types.conf
            │  │  │  │  │  ├─ sparc-linux
            │  │  │  │  │  │  └─ types.conf
            │  │  │  │  │  ├─ sparc-solaris
            │  │  │  │  │  │  └─ types.conf
            │  │  │  │  │  ├─ sparcv9-linux
            │  │  │  │  │  │  └─ types.conf
            │  │  │  │  │  ├─ sparcv9-openbsd
            │  │  │  │  │  │  └─ types.conf
            │  │  │  │  │  ├─ sparcv9-solaris
            │  │  │  │  │  │  └─ types.conf
            │  │  │  │  │  ├─ sw_64-linux
            │  │  │  │  │  │  └─ types.conf
            │  │  │  │  │  ├─ x86_64-cygwin
            │  │  │  │  │  │  └─ types.conf
            │  │  │  │  │  ├─ x86_64-darwin
            │  │  │  │  │  │  └─ types.conf
            │  │  │  │  │  ├─ x86_64-dragonflybsd
            │  │  │  │  │  │  └─ types.conf
            │  │  │  │  │  ├─ x86_64-freebsd
            │  │  │  │  │  │  └─ types.conf
            │  │  │  │  │  ├─ x86_64-freebsd12
            │  │  │  │  │  │  └─ types.conf
            │  │  │  │  │  ├─ x86_64-haiku
            │  │  │  │  │  │  └─ types.conf
            │  │  │  │  │  ├─ x86_64-linux
            │  │  │  │  │  │  └─ types.conf
            │  │  │  │  │  ├─ x86_64-msys
            │  │  │  │  │  │  └─ types.conf
            │  │  │  │  │  ├─ x86_64-netbsd
            │  │  │  │  │  │  └─ types.conf
            │  │  │  │  │  ├─ x86_64-openbsd
            │  │  │  │  │  │  └─ types.conf
            │  │  │  │  │  ├─ x86_64-solaris
            │  │  │  │  │  │  └─ types.conf
            │  │  │  │  │  └─ x86_64-windows
            │  │  │  │  │     └─ types.conf
            │  │  │  │  ├─ platform.rb
            │  │  │  │  ├─ pointer.rb
            │  │  │  │  ├─ struct.rb
            │  │  │  │  ├─ struct_by_reference.rb
            │  │  │  │  ├─ struct_layout.rb
            │  │  │  │  ├─ struct_layout_builder.rb
            │  │  │  │  ├─ tools
            │  │  │  │  │  ├─ const_generator.rb
            │  │  │  │  │  ├─ generator.rb
            │  │  │  │  │  ├─ generator_task.rb
            │  │  │  │  │  ├─ struct_generator.rb
            │  │  │  │  │  └─ types_generator.rb
            │  │  │  │  ├─ types.rb
            │  │  │  │  ├─ union.rb
            │  │  │  │  ├─ variadic.rb
            │  │  │  │  └─ version.rb
            │  │  │  ├─ ffi.rb
            │  │  │  └─ ffi_c.bundle
            │  │  ├─ rakelib
            │  │  │  └─ ffi_gem_helper.rb
            │  │  ├─ samples
            │  │  │  ├─ getlogin.rb
            │  │  │  ├─ getpid.rb
            │  │  │  ├─ gettimeofday.rb
            │  │  │  ├─ hello.rb
            │  │  │  ├─ hello_ractor.rb
            │  │  │  ├─ inotify.rb
            │  │  │  ├─ pty.rb
            │  │  │  ├─ qsort.rb
            │  │  │  └─ qsort_ractor.rb
            │  │  └─ sig
            │  │     ├─ ffi
            │  │     │  ├─ abstract_memory.rbs
            │  │     │  ├─ auto_pointer.rbs
            │  │     │  ├─ buffer.rbs
            │  │     │  ├─ data_converter.rbs
            │  │     │  ├─ dynamic_library.rbs
            │  │     │  ├─ enum.rbs
            │  │     │  ├─ function.rbs
            │  │     │  ├─ library.rbs
            │  │     │  ├─ native_type.rbs
            │  │     │  ├─ pointer.rbs
            │  │     │  ├─ struct.rbs
            │  │     │  ├─ struct_by_reference.rbs
            │  │     │  ├─ struct_by_value.rbs
            │  │     │  ├─ struct_layout.rbs
            │  │     │  ├─ struct_layout_builder.rbs
            │  │     │  └─ type.rbs
            │  │     └─ ffi.rbs
            │  ├─ fourflusher-2.3.1
            │  │  ├─ .rubocop.yml
            │  │  ├─ .travis.yml
            │  │  ├─ CHANGELOG.md
            │  │  ├─ Gemfile
            │  │  ├─ Gemfile.lock
            │  │  ├─ LICENSE.txt
            │  │  ├─ README.md
            │  │  ├─ Rakefile
            │  │  ├─ bin
            │  │  │  ├─ console
            │  │  │  └─ setup
            │  │  ├─ fourflusher.gemspec
            │  │  └─ lib
            │  │     ├─ fourflusher
            │  │     │  ├─ compat.rb
            │  │     │  ├─ executable.rb
            │  │     │  ├─ find.rb
            │  │     │  ├─ simctl.rb
            │  │     │  ├─ version.rb
            │  │     │  └─ xcodebuild.rb
            │  │     └─ fourflusher.rb
            │  ├─ fuzzy_match-2.0.4
            │  │  ├─ .rspec
            │  │  ├─ CHANGELOG
            │  │  ├─ Gemfile
            │  │  ├─ LICENSE
            │  │  ├─ README.markdown
            │  │  ├─ Rakefile
            │  │  ├─ THANKS-WILLIAM-JAMES.rb
            │  │  ├─ benchmark
            │  │  │  ├─ before-with-free.txt
            │  │  │  ├─ before-without-last-result.txt
            │  │  │  ├─ before.txt
            │  │  │  └─ memory.rb
            │  │  ├─ bin
            │  │  │  └─ fuzzy_match
            │  │  ├─ fuzzy_match.gemspec
            │  │  ├─ groupings-screenshot.png
            │  │  ├─ highlevel.graffle
            │  │  ├─ highlevel.png
            │  │  ├─ lib
            │  │  │  ├─ fuzzy_match
            │  │  │  │  ├─ cached_result.rb
            │  │  │  │  ├─ record.rb
            │  │  │  │  ├─ result.rb
            │  │  │  │  ├─ rule
            │  │  │  │  │  ├─ grouping.rb
            │  │  │  │  │  └─ identity.rb
            │  │  │  │  ├─ rule.rb
            │  │  │  │  ├─ score
            │  │  │  │  │  ├─ amatch.rb
            │  │  │  │  │  └─ pure_ruby.rb
            │  │  │  │  ├─ score.rb
            │  │  │  │  ├─ similarity.rb
            │  │  │  │  └─ version.rb
            │  │  │  └─ fuzzy_match.rb
            │  │  └─ spec
            │  │     ├─ amatch_spec.rb
            │  │     ├─ cache_spec.rb
            │  │     ├─ foo.rb
            │  │     ├─ fuzzy_match_spec.rb
            │  │     ├─ grouping_spec.rb
            │  │     ├─ identity_spec.rb
            │  │     ├─ record_spec.rb
            │  │     └─ spec_helper.rb
            │  ├─ gh_inspector-1.1.3
            │  │  ├─ .rspec
            │  │  ├─ .rubocop.yml
            │  │  ├─ .travis.yml
            │  │  ├─ CHANGELOG.md
            │  │  ├─ Gemfile
            │  │  ├─ LICENSE
            │  │  ├─ README.md
            │  │  ├─ Rakefile
            │  │  ├─ bin
            │  │  │  ├─ console
            │  │  │  └─ setup
            │  │  ├─ gh_inspector.gemspec
            │  │  └─ lib
            │  │     ├─ gh_inspector
            │  │     │  ├─ evidence.rb
            │  │     │  ├─ exception_hound.rb
            │  │     │  ├─ inspector.rb
            │  │     │  ├─ sidekick.rb
            │  │     │  └─ version.rb
            │  │     └─ gh_inspector.rb
            │  ├─ httpclient-2.9.0
            │  │  ├─ README.md
            │  │  ├─ bin
            │  │  │  ├─ httpclient
            │  │  │  └─ jsonclient
            │  │  ├─ lib
            │  │  │  ├─ hexdump.rb
            │  │  │  ├─ http-access2
            │  │  │  │  ├─ cookie.rb
            │  │  │  │  └─ http.rb
            │  │  │  ├─ http-access2.rb
            │  │  │  ├─ httpclient
            │  │  │  │  ├─ auth.rb
            │  │  │  │  ├─ cacert.pem
            │  │  │  │  ├─ cacert1024.pem
            │  │  │  │  ├─ connection.rb
            │  │  │  │  ├─ cookie.rb
            │  │  │  │  ├─ http.rb
            │  │  │  │  ├─ include_client.rb
            │  │  │  │  ├─ jruby_ssl_socket.rb
            │  │  │  │  ├─ session.rb
            │  │  │  │  ├─ ssl_config.rb
            │  │  │  │  ├─ ssl_socket.rb
            │  │  │  │  ├─ timeout.rb
            │  │  │  │  ├─ util.rb
            │  │  │  │  ├─ version.rb
            │  │  │  │  └─ webagent-cookie.rb
            │  │  │  ├─ httpclient.rb
            │  │  │  ├─ jsonclient.rb
            │  │  │  └─ oauthclient.rb
            │  │  ├─ sample
            │  │  │  ├─ async.rb
            │  │  │  ├─ auth.rb
            │  │  │  ├─ cookie.rb
            │  │  │  ├─ dav.rb
            │  │  │  ├─ generate_test_keys.rb
            │  │  │  ├─ howto.rb
            │  │  │  ├─ jsonclient.rb
            │  │  │  ├─ oauth_buzz.rb
            │  │  │  ├─ oauth_friendfeed.rb
            │  │  │  ├─ oauth_twitter.rb
            │  │  │  ├─ ssl
            │  │  │  │  ├─ 0cert.pem
            │  │  │  │  ├─ 0key.pem
            │  │  │  │  ├─ 1000cert.pem
            │  │  │  │  ├─ 1000key.pem
            │  │  │  │  ├─ htdocs
            │  │  │  │  │  └─ index.html
            │  │  │  │  ├─ ssl_client.rb
            │  │  │  │  └─ webrick_httpsd.rb
            │  │  │  ├─ stream.rb
            │  │  │  ├─ thread.rb
            │  │  │  └─ wcat.rb
            │  │  └─ test
            │  │     ├─ ca-chain.pem
            │  │     ├─ ca.cert
            │  │     ├─ ca.key
            │  │     ├─ ca.srl
            │  │     ├─ client-pass.key
            │  │     ├─ client.cert
            │  │     ├─ client.key
            │  │     ├─ fixtures
            │  │     │  ├─ verify.alt.cert
            │  │     │  ├─ verify.foo.cert
            │  │     │  ├─ verify.key
            │  │     │  └─ verify.localhost.cert
            │  │     ├─ helper.rb
            │  │     ├─ htdigest
            │  │     ├─ htpasswd
            │  │     ├─ jruby_ssl_socket
            │  │     │  └─ test_pemutils.rb
            │  │     ├─ runner.rb
            │  │     ├─ server.cert
            │  │     ├─ server.key
            │  │     ├─ sslsvr.rb
            │  │     ├─ subca.cert
            │  │     ├─ subca.key
            │  │     ├─ subca.srl
            │  │     ├─ test_auth.rb
            │  │     ├─ test_cookie.rb
            │  │     ├─ test_hexdump.rb
            │  │     ├─ test_http-access2.rb
            │  │     ├─ test_httpclient.rb
            │  │     ├─ test_include_client.rb
            │  │     ├─ test_jsonclient.rb
            │  │     ├─ test_ssl.rb
            │  │     └─ test_webagent-cookie.rb
            │  ├─ i18n-1.14.7
            │  │  ├─ MIT-LICENSE
            │  │  ├─ README.md
            │  │  └─ lib
            │  │     ├─ i18n
            │  │     │  ├─ backend
            │  │     │  │  ├─ base.rb
            │  │     │  │  ├─ cache.rb
            │  │     │  │  ├─ cache_file.rb
            │  │     │  │  ├─ cascade.rb
            │  │     │  │  ├─ chain.rb
            │  │     │  │  ├─ fallbacks.rb
            │  │     │  │  ├─ flatten.rb
            │  │     │  │  ├─ gettext.rb
            │  │     │  │  ├─ interpolation_compiler.rb
            │  │     │  │  ├─ key_value.rb
            │  │     │  │  ├─ lazy_loadable.rb
            │  │     │  │  ├─ memoize.rb
            │  │     │  │  ├─ metadata.rb
            │  │     │  │  ├─ pluralization.rb
            │  │     │  │  ├─ simple.rb
            │  │     │  │  └─ transliterator.rb
            │  │     │  ├─ backend.rb
            │  │     │  ├─ config.rb
            │  │     │  ├─ exceptions.rb
            │  │     │  ├─ gettext
            │  │     │  │  ├─ helpers.rb
            │  │     │  │  └─ po_parser.rb
            │  │     │  ├─ gettext.rb
            │  │     │  ├─ interpolate
            │  │     │  │  └─ ruby.rb
            │  │     │  ├─ locale
            │  │     │  │  ├─ fallbacks.rb
            │  │     │  │  ├─ tag
            │  │     │  │  │  ├─ parents.rb
            │  │     │  │  │  ├─ rfc4646.rb
            │  │     │  │  │  └─ simple.rb
            │  │     │  │  └─ tag.rb
            │  │     │  ├─ locale.rb
            │  │     │  ├─ middleware.rb
            │  │     │  ├─ tests
            │  │     │  │  ├─ basics.rb
            │  │     │  │  ├─ defaults.rb
            │  │     │  │  ├─ interpolation.rb
            │  │     │  │  ├─ link.rb
            │  │     │  │  ├─ localization
            │  │     │  │  │  ├─ date.rb
            │  │     │  │  │  ├─ date_time.rb
            │  │     │  │  │  ├─ procs.rb
            │  │     │  │  │  └─ time.rb
            │  │     │  │  ├─ localization.rb
            │  │     │  │  ├─ lookup.rb
            │  │     │  │  ├─ pluralization.rb
            │  │     │  │  └─ procs.rb
            │  │     │  ├─ tests.rb
            │  │     │  ├─ utils.rb
            │  │     │  └─ version.rb
            │  │     └─ i18n.rb
            │  ├─ json-2.7.6
            │  │  ├─ BSDL
            │  │  ├─ CHANGES.md
            │  │  ├─ COPYING
            │  │  ├─ LEGAL
            │  │  ├─ README.md
            │  │  ├─ ext
            │  │  │  └─ json
            │  │  │     └─ ext
            │  │  │        ├─ fbuffer
            │  │  │        │  └─ fbuffer.h
            │  │  │        ├─ generator
            │  │  │        │  ├─ .sitearchdir.-.json.-.ext.time
            │  │  │        │  ├─ Makefile
            │  │  │        │  ├─ extconf.rb
            │  │  │        │  ├─ generator.bundle
            │  │  │        │  ├─ generator.c
            │  │  │        │  ├─ generator.h
            │  │  │        │  └─ generator.o
            │  │  │        └─ parser
            │  │  │           ├─ .sitearchdir.-.json.-.ext.time
            │  │  │           ├─ Makefile
            │  │  │           ├─ extconf.rb
            │  │  │           ├─ parser.bundle
            │  │  │           ├─ parser.c
            │  │  │           ├─ parser.h
            │  │  │           ├─ parser.o
            │  │  │           └─ parser.rl
            │  │  ├─ json.gemspec
            │  │  └─ lib
            │  │     ├─ json
            │  │     │  ├─ add
            │  │     │  │  ├─ bigdecimal.rb
            │  │     │  │  ├─ complex.rb
            │  │     │  │  ├─ core.rb
            │  │     │  │  ├─ date.rb
            │  │     │  │  ├─ date_time.rb
            │  │     │  │  ├─ exception.rb
            │  │     │  │  ├─ ostruct.rb
            │  │     │  │  ├─ range.rb
            │  │     │  │  ├─ rational.rb
            │  │     │  │  ├─ regexp.rb
            │  │     │  │  ├─ set.rb
            │  │     │  │  ├─ struct.rb
            │  │     │  │  ├─ symbol.rb
            │  │     │  │  └─ time.rb
            │  │     │  ├─ common.rb
            │  │     │  ├─ ext
            │  │     │  │  ├─ generator
            │  │     │  │  │  └─ state.rb
            │  │     │  │  ├─ generator.bundle
            │  │     │  │  └─ parser.bundle
            │  │     │  ├─ ext.rb
            │  │     │  ├─ generic_object.rb
            │  │     │  ├─ pure
            │  │     │  │  ├─ generator.rb
            │  │     │  │  └─ parser.rb
            │  │     │  ├─ pure.rb
            │  │     │  └─ version.rb
            │  │     └─ json.rb
            │  ├─ logger-1.7.0
            │  │  ├─ .document
            │  │  ├─ .rdoc_options
            │  │  ├─ BSDL
            │  │  ├─ COPYING
            │  │  ├─ README.md
            │  │  └─ lib
            │  │     ├─ logger
            │  │     │  ├─ errors.rb
            │  │     │  ├─ formatter.rb
            │  │     │  ├─ log_device.rb
            │  │     │  ├─ period.rb
            │  │     │  ├─ severity.rb
            │  │     │  └─ version.rb
            │  │     └─ logger.rb
            │  ├─ minitest-5.25.4
            │  │  ├─ .autotest
            │  │  ├─ History.rdoc
            │  │  ├─ Manifest.txt
            │  │  ├─ README.rdoc
            │  │  ├─ Rakefile
            │  │  ├─ design_rationale.rb
            │  │  ├─ lib
            │  │  │  ├─ hoe
            │  │  │  │  └─ minitest.rb
            │  │  │  ├─ minitest
            │  │  │  │  ├─ assertions.rb
            │  │  │  │  ├─ autorun.rb
            │  │  │  │  ├─ benchmark.rb
            │  │  │  │  ├─ compress.rb
            │  │  │  │  ├─ error_on_warning.rb
            │  │  │  │  ├─ expectations.rb
            │  │  │  │  ├─ hell.rb
            │  │  │  │  ├─ manual_plugins.rb
            │  │  │  │  ├─ mock.rb
            │  │  │  │  ├─ parallel.rb
            │  │  │  │  ├─ pride.rb
            │  │  │  │  ├─ pride_plugin.rb
            │  │  │  │  ├─ spec.rb
            │  │  │  │  ├─ test.rb
            │  │  │  │  ├─ test_task.rb
            │  │  │  │  └─ unit.rb
            │  │  │  └─ minitest.rb
            │  │  └─ test
            │  │     └─ minitest
            │  │        ├─ metametameta.rb
            │  │        ├─ test_minitest_assertions.rb
            │  │        ├─ test_minitest_benchmark.rb
            │  │        ├─ test_minitest_mock.rb
            │  │        ├─ test_minitest_reporter.rb
            │  │        ├─ test_minitest_spec.rb
            │  │        ├─ test_minitest_test.rb
            │  │        └─ test_minitest_test_task.rb
            │  ├─ molinillo-0.8.0
            │  │  ├─ ARCHITECTURE.md
            │  │  ├─ CHANGELOG.md
            │  │  ├─ LICENSE
            │  │  ├─ README.md
            │  │  └─ lib
            │  │     ├─ molinillo
            │  │     │  ├─ delegates
            │  │     │  │  ├─ resolution_state.rb
            │  │     │  │  └─ specification_provider.rb
            │  │     │  ├─ dependency_graph
            │  │     │  │  ├─ action.rb
            │  │     │  │  ├─ add_edge_no_circular.rb
            │  │     │  │  ├─ add_vertex.rb
            │  │     │  │  ├─ delete_edge.rb
            │  │     │  │  ├─ detach_vertex_named.rb
            │  │     │  │  ├─ log.rb
            │  │     │  │  ├─ set_payload.rb
            │  │     │  │  ├─ tag.rb
            │  │     │  │  └─ vertex.rb
            │  │     │  ├─ dependency_graph.rb
            │  │     │  ├─ errors.rb
            │  │     │  ├─ gem_metadata.rb
            │  │     │  ├─ modules
            │  │     │  │  ├─ specification_provider.rb
            │  │     │  │  └─ ui.rb
            │  │     │  ├─ resolution.rb
            │  │     │  ├─ resolver.rb
            │  │     │  └─ state.rb
            │  │     └─ molinillo.rb
            │  ├─ mutex_m-0.3.0
            │  │  ├─ BSDL
            │  │  ├─ COPYING
            │  │  ├─ README.md
            │  │  ├─ lib
            │  │  │  └─ mutex_m.rb
            │  │  └─ sig
            │  │     └─ mutex_m.rbs
            │  ├─ nanaimo-0.3.0
            │  │  ├─ .rspec
            │  │  ├─ .rubocop.yml
            │  │  ├─ .rubocop_todo.yml
            │  │  ├─ .travis.yml
            │  │  ├─ CHANGELOG.md
            │  │  ├─ CODE_OF_CONDUCT.md
            │  │  ├─ Gemfile
            │  │  ├─ Gemfile.lock
            │  │  ├─ LICENSE.txt
            │  │  ├─ README.md
            │  │  ├─ Rakefile
            │  │  ├─ bin
            │  │  │  ├─ console
            │  │  │  └─ setup
            │  │  ├─ lib
            │  │  │  ├─ nanaimo
            │  │  │  │  ├─ object.rb
            │  │  │  │  ├─ plist.rb
            │  │  │  │  ├─ reader.rb
            │  │  │  │  ├─ unicode
            │  │  │  │  │  ├─ next_step_mapping.rb
            │  │  │  │  │  └─ quote_maps.rb
            │  │  │  │  ├─ unicode.rb
            │  │  │  │  ├─ version.rb
            │  │  │  │  ├─ writer
            │  │  │  │  │  ├─ pbxproj.rb
            │  │  │  │  │  └─ xml.rb
            │  │  │  │  └─ writer.rb
            │  │  │  └─ nanaimo.rb
            │  │  └─ nanaimo.gemspec
            │  ├─ nap-1.1.0
            │  │  ├─ LICENSE
            │  │  ├─ README.md
            │  │  ├─ lib
            │  │  │  ├─ rest
            │  │  │  │  ├─ error.rb
            │  │  │  │  ├─ request.rb
            │  │  │  │  └─ response.rb
            │  │  │  └─ rest.rb
            │  │  └─ support
            │  │     └─ cacert.pem
            │  ├─ netrc-0.11.0
            │  │  ├─ LICENSE.md
            │  │  ├─ Readme.md
            │  │  ├─ changelog.txt
            │  │  ├─ data
            │  │  │  ├─ default_only.netrc
            │  │  │  ├─ login.netrc
            │  │  │  ├─ newlineless.netrc
            │  │  │  ├─ password.netrc
            │  │  │  ├─ permissive.netrc
            │  │  │  ├─ sample.netrc
            │  │  │  ├─ sample_multi.netrc
            │  │  │  ├─ sample_multi_with_default.netrc
            │  │  │  └─ sample_with_default.netrc
            │  │  ├─ lib
            │  │  │  └─ netrc.rb
            │  │  └─ test
            │  │     ├─ test_lex.rb
            │  │     ├─ test_netrc.rb
            │  │     └─ test_parse.rb
            │  ├─ nkf-0.2.0
            │  │  ├─ Gemfile
            │  │  ├─ LICENSE.txt
            │  │  ├─ README.md
            │  │  ├─ Rakefile
            │  │  ├─ bin
            │  │  │  ├─ console
            │  │  │  └─ setup
            │  │  ├─ ext
            │  │  │  ├─ java
            │  │  │  │  └─ org
            │  │  │  │     └─ jruby
            │  │  │  │        └─ ext
            │  │  │  │           └─ nkf
            │  │  │  │              ├─ Command.java
            │  │  │  │              ├─ CommandParser.java
            │  │  │  │              ├─ NKFLibrary.java
            │  │  │  │              ├─ Option.java
            │  │  │  │              ├─ Options.java
            │  │  │  │              └─ RubyNKF.java
            │  │  │  └─ nkf
            │  │  │     ├─ .sitearchdir.time
            │  │  │     ├─ Makefile
            │  │  │     ├─ extconf.rb
            │  │  │     ├─ nkf-utf8
            │  │  │     │  ├─ config.h
            │  │  │     │  ├─ nkf.c
            │  │  │     │  ├─ nkf.h
            │  │  │     │  ├─ utf8tbl.c
            │  │  │     │  └─ utf8tbl.h
            │  │  │     ├─ nkf.bundle
            │  │  │     ├─ nkf.c
            │  │  │     └─ nkf.o
            │  │  ├─ lib
            │  │  │  ├─ kconv.rb
            │  │  │  ├─ nkf.bundle
            │  │  │  └─ nkf.rb
            │  │  └─ nkf.gemspec
            │  ├─ public_suffix-4.0.7
            │  │  ├─ .rubocop.yml
            │  │  ├─ .rubocop_opinionated.yml
            │  │  ├─ .yardopts
            │  │  ├─ 2.0-Upgrade.md
            │  │  ├─ CHANGELOG.md
            │  │  ├─ Gemfile
            │  │  ├─ LICENSE.txt
            │  │  ├─ README.md
            │  │  ├─ Rakefile
            │  │  ├─ SECURITY.md
            │  │  ├─ bin
            │  │  │  └─ console
            │  │  ├─ data
            │  │  │  └─ list.txt
            │  │  ├─ lib
            │  │  │  ├─ public_suffix
            │  │  │  │  ├─ domain.rb
            │  │  │  │  ├─ errors.rb
            │  │  │  │  ├─ list.rb
            │  │  │  │  ├─ rule.rb
            │  │  │  │  └─ version.rb
            │  │  │  └─ public_suffix.rb
            │  │  ├─ public_suffix.gemspec
            │  │  └─ test
            │  │     ├─ .empty
            │  │     ├─ acceptance_test.rb
            │  │     ├─ benchmarks
            │  │     │  ├─ bm_find.rb
            │  │     │  ├─ bm_find_all.rb
            │  │     │  ├─ bm_names.rb
            │  │     │  ├─ bm_select.rb
            │  │     │  ├─ bm_select_incremental.rb
            │  │     │  └─ bm_valid.rb
            │  │     ├─ profilers
            │  │     │  ├─ domain_profiler.rb
            │  │     │  ├─ find_profiler.rb
            │  │     │  ├─ find_profiler_jp.rb
            │  │     │  ├─ initialization_profiler.rb
            │  │     │  ├─ list_profsize.rb
            │  │     │  └─ object_binsize.rb
            │  │     ├─ psl_test.rb
            │  │     ├─ test_helper.rb
            │  │     ├─ tests.txt
            │  │     └─ unit
            │  │        ├─ domain_test.rb
            │  │        ├─ errors_test.rb
            │  │        ├─ list_test.rb
            │  │        ├─ public_suffix_test.rb
            │  │        └─ rule_test.rb
            │  ├─ rexml-3.4.1
            │  │  ├─ LICENSE.txt
            │  │  ├─ NEWS.md
            │  │  ├─ README.md
            │  │  ├─ doc
            │  │  │  └─ rexml
            │  │  │     ├─ context.rdoc
            │  │  │     ├─ tasks
            │  │  │     │  ├─ rdoc
            │  │  │     │  │  ├─ child.rdoc
            │  │  │     │  │  ├─ document.rdoc
            │  │  │     │  │  ├─ element.rdoc
            │  │  │     │  │  ├─ node.rdoc
            │  │  │     │  │  └─ parent.rdoc
            │  │  │     │  └─ tocs
            │  │  │     │     ├─ child_toc.rdoc
            │  │  │     │     ├─ document_toc.rdoc
            │  │  │     │     ├─ element_toc.rdoc
            │  │  │     │     ├─ master_toc.rdoc
            │  │  │     │     ├─ node_toc.rdoc
            │  │  │     │     └─ parent_toc.rdoc
            │  │  │     └─ tutorial.rdoc
            │  │  └─ lib
            │  │     ├─ rexml
            │  │     │  ├─ attlistdecl.rb
            │  │     │  ├─ attribute.rb
            │  │     │  ├─ cdata.rb
            │  │     │  ├─ child.rb
            │  │     │  ├─ comment.rb
            │  │     │  ├─ doctype.rb
            │  │     │  ├─ document.rb
            │  │     │  ├─ dtd
            │  │     │  │  ├─ attlistdecl.rb
            │  │     │  │  ├─ dtd.rb
            │  │     │  │  ├─ elementdecl.rb
            │  │     │  │  ├─ entitydecl.rb
            │  │     │  │  └─ notationdecl.rb
            │  │     │  ├─ element.rb
            │  │     │  ├─ encoding.rb
            │  │     │  ├─ entity.rb
            │  │     │  ├─ formatters
            │  │     │  │  ├─ default.rb
            │  │     │  │  ├─ pretty.rb
            │  │     │  │  └─ transitive.rb
            │  │     │  ├─ functions.rb
            │  │     │  ├─ instruction.rb
            │  │     │  ├─ light
            │  │     │  │  └─ node.rb
            │  │     │  ├─ namespace.rb
            │  │     │  ├─ node.rb
            │  │     │  ├─ output.rb
            │  │     │  ├─ parent.rb
            │  │     │  ├─ parseexception.rb
            │  │     │  ├─ parsers
            │  │     │  │  ├─ baseparser.rb
            │  │     │  │  ├─ lightparser.rb
            │  │     │  │  ├─ pullparser.rb
            │  │     │  │  ├─ sax2parser.rb
            │  │     │  │  ├─ streamparser.rb
            │  │     │  │  ├─ treeparser.rb
            │  │     │  │  ├─ ultralightparser.rb
            │  │     │  │  └─ xpathparser.rb
            │  │     │  ├─ quickpath.rb
            │  │     │  ├─ rexml.rb
            │  │     │  ├─ sax2listener.rb
            │  │     │  ├─ security.rb
            │  │     │  ├─ source.rb
            │  │     │  ├─ streamlistener.rb
            │  │     │  ├─ text.rb
            │  │     │  ├─ undefinednamespaceexception.rb
            │  │     │  ├─ validation
            │  │     │  │  ├─ relaxng.rb
            │  │     │  │  ├─ validation.rb
            │  │     │  │  └─ validationexception.rb
            │  │     │  ├─ xmldecl.rb
            │  │     │  ├─ xmltokens.rb
            │  │     │  ├─ xpath.rb
            │  │     │  └─ xpath_parser.rb
            │  │     └─ rexml.rb
            │  ├─ ruby-macho-2.5.1
            │  │  ├─ .yardopts
            │  │  ├─ LICENSE
            │  │  ├─ README.md
            │  │  └─ lib
            │  │     ├─ macho
            │  │     │  ├─ exceptions.rb
            │  │     │  ├─ fat_file.rb
            │  │     │  ├─ headers.rb
            │  │     │  ├─ load_commands.rb
            │  │     │  ├─ macho_file.rb
            │  │     │  ├─ sections.rb
            │  │     │  ├─ structure.rb
            │  │     │  ├─ tools.rb
            │  │     │  ├─ utils.rb
            │  │     │  └─ view.rb
            │  │     └─ macho.rb
            │  ├─ typhoeus-1.4.1
            │  │  ├─ .rspec
            │  │  ├─ CHANGELOG.md
            │  │  ├─ CONTRIBUTING.md
            │  │  ├─ Gemfile
            │  │  ├─ Guardfile
            │  │  ├─ LICENSE
            │  │  ├─ README.md
            │  │  ├─ Rakefile
            │  │  ├─ UPGRADE.md
            │  │  ├─ lib
            │  │  │  ├─ rack
            │  │  │  │  ├─ typhoeus
            │  │  │  │  │  └─ middleware
            │  │  │  │  │     ├─ params_decoder
            │  │  │  │  │     │  └─ helper.rb
            │  │  │  │  │     └─ params_decoder.rb
            │  │  │  │  └─ typhoeus.rb
            │  │  │  ├─ typhoeus
            │  │  │  │  ├─ adapters
            │  │  │  │  │  └─ faraday.rb
            │  │  │  │  ├─ cache
            │  │  │  │  │  ├─ dalli.rb
            │  │  │  │  │  ├─ rails.rb
            │  │  │  │  │  └─ redis.rb
            │  │  │  │  ├─ config.rb
            │  │  │  │  ├─ easy_factory.rb
            │  │  │  │  ├─ errors
            │  │  │  │  │  ├─ no_stub.rb
            │  │  │  │  │  └─ typhoeus_error.rb
            │  │  │  │  ├─ errors.rb
            │  │  │  │  ├─ expectation.rb
            │  │  │  │  ├─ hydra
            │  │  │  │  │  ├─ addable.rb
            │  │  │  │  │  ├─ before.rb
            │  │  │  │  │  ├─ block_connection.rb
            │  │  │  │  │  ├─ cacheable.rb
            │  │  │  │  │  ├─ memoizable.rb
            │  │  │  │  │  ├─ queueable.rb
            │  │  │  │  │  ├─ runnable.rb
            │  │  │  │  │  └─ stubbable.rb
            │  │  │  │  ├─ hydra.rb
            │  │  │  │  ├─ pool.rb
            │  │  │  │  ├─ railtie.rb
            │  │  │  │  ├─ request
            │  │  │  │  │  ├─ actions.rb
            │  │  │  │  │  ├─ before.rb
            │  │  │  │  │  ├─ block_connection.rb
            │  │  │  │  │  ├─ cacheable.rb
            │  │  │  │  │  ├─ callbacks.rb
            │  │  │  │  │  ├─ marshal.rb
            │  │  │  │  │  ├─ memoizable.rb
            │  │  │  │  │  ├─ operations.rb
            │  │  │  │  │  ├─ responseable.rb
            │  │  │  │  │  ├─ streamable.rb
            │  │  │  │  │  └─ stubbable.rb
            │  │  │  │  ├─ request.rb
            │  │  │  │  ├─ response
            │  │  │  │  │  ├─ cacheable.rb
            │  │  │  │  │  ├─ header.rb
            │  │  │  │  │  ├─ informations.rb
            │  │  │  │  │  └─ status.rb
            │  │  │  │  ├─ response.rb
            │  │  │  │  └─ version.rb
            │  │  │  └─ typhoeus.rb
            │  │  ├─ perf
            │  │  │  ├─ profile.rb
            │  │  │  └─ vs_nethttp.rb
            │  │  ├─ spec
            │  │  │  ├─ rack
            │  │  │  │  └─ typhoeus
            │  │  │  │     └─ middleware
            │  │  │  │        ├─ params_decoder
            │  │  │  │        │  └─ helper_spec.rb
            │  │  │  │        └─ params_decoder_spec.rb
            │  │  │  ├─ spec_helper.rb
            │  │  │  ├─ support
            │  │  │  │  ├─ localhost_server.rb
            │  │  │  │  ├─ memory_cache.rb
            │  │  │  │  └─ server.rb
            │  │  │  ├─ typhoeus
            │  │  │  │  ├─ adapters
            │  │  │  │  │  └─ faraday_spec.rb
            │  │  │  │  ├─ cache
            │  │  │  │  │  ├─ dalli_spec.rb
            │  │  │  │  │  └─ redis_spec.rb
            │  │  │  │  ├─ config_spec.rb
            │  │  │  │  ├─ easy_factory_spec.rb
            │  │  │  │  ├─ errors
            │  │  │  │  │  └─ no_stub_spec.rb
            │  │  │  │  ├─ expectation_spec.rb
            │  │  │  │  ├─ hydra
            │  │  │  │  │  ├─ addable_spec.rb
            │  │  │  │  │  ├─ before_spec.rb
            │  │  │  │  │  ├─ block_connection_spec.rb
            │  │  │  │  │  ├─ cacheable_spec.rb
            │  │  │  │  │  ├─ memoizable_spec.rb
            │  │  │  │  │  ├─ queueable_spec.rb
            │  │  │  │  │  ├─ runnable_spec.rb
            │  │  │  │  │  └─ stubbable_spec.rb
            │  │  │  │  ├─ hydra_spec.rb
            │  │  │  │  ├─ pool_spec.rb
            │  │  │  │  ├─ request
            │  │  │  │  │  ├─ actions_spec.rb
            │  │  │  │  │  ├─ before_spec.rb
            │  │  │  │  │  ├─ block_connection_spec.rb
            │  │  │  │  │  ├─ cacheable_spec.rb
            │  │  │  │  │  ├─ callbacks_spec.rb
            │  │  │  │  │  ├─ marshal_spec.rb
            │  │  │  │  │  ├─ memoizable_spec.rb
            │  │  │  │  │  ├─ operations_spec.rb
            │  │  │  │  │  ├─ responseable_spec.rb
            │  │  │  │  │  └─ stubbable_spec.rb
            │  │  │  │  ├─ request_spec.rb
            │  │  │  │  ├─ response
            │  │  │  │  │  ├─ header_spec.rb
            │  │  │  │  │  ├─ informations_spec.rb
            │  │  │  │  │  └─ status_spec.rb
            │  │  │  │  └─ response_spec.rb
            │  │  │  └─ typhoeus_spec.rb
            │  │  └─ typhoeus.gemspec
            │  ├─ tzinfo-2.0.6
            │  │  ├─ .yardopts
            │  │  ├─ CHANGES.md
            │  │  ├─ LICENSE
            │  │  ├─ README.md
            │  │  └─ lib
            │  │     ├─ tzinfo
            │  │     │  ├─ annual_rules.rb
            │  │     │  ├─ country.rb
            │  │     │  ├─ country_timezone.rb
            │  │     │  ├─ data_source.rb
            │  │     │  ├─ data_sources
            │  │     │  │  ├─ constant_offset_data_timezone_info.rb
            │  │     │  │  ├─ country_info.rb
            │  │     │  │  ├─ data_timezone_info.rb
            │  │     │  │  ├─ linked_timezone_info.rb
            │  │     │  │  ├─ posix_time_zone_parser.rb
            │  │     │  │  ├─ ruby_data_source.rb
            │  │     │  │  ├─ timezone_info.rb
            │  │     │  │  ├─ transitions_data_timezone_info.rb
            │  │     │  │  ├─ zoneinfo_data_source.rb
            │  │     │  │  └─ zoneinfo_reader.rb
            │  │     │  ├─ data_sources.rb
            │  │     │  ├─ data_timezone.rb
            │  │     │  ├─ datetime_with_offset.rb
            │  │     │  ├─ format1
            │  │     │  │  ├─ country_definer.rb
            │  │     │  │  ├─ country_index_definition.rb
            │  │     │  │  ├─ timezone_definer.rb
            │  │     │  │  ├─ timezone_definition.rb
            │  │     │  │  └─ timezone_index_definition.rb
            │  │     │  ├─ format1.rb
            │  │     │  ├─ format2
            │  │     │  │  ├─ country_definer.rb
            │  │     │  │  ├─ country_index_definer.rb
            │  │     │  │  ├─ country_index_definition.rb
            │  │     │  │  ├─ timezone_definer.rb
            │  │     │  │  ├─ timezone_definition.rb
            │  │     │  │  ├─ timezone_index_definer.rb
            │  │     │  │  └─ timezone_index_definition.rb
            │  │     │  ├─ format2.rb
            │  │     │  ├─ info_timezone.rb
            │  │     │  ├─ linked_timezone.rb
            │  │     │  ├─ offset_timezone_period.rb
            │  │     │  ├─ ruby_core_support.rb
            │  │     │  ├─ string_deduper.rb
            │  │     │  ├─ time_with_offset.rb
            │  │     │  ├─ timestamp.rb
            │  │     │  ├─ timestamp_with_offset.rb
            │  │     │  ├─ timezone.rb
            │  │     │  ├─ timezone_offset.rb
            │  │     │  ├─ timezone_period.rb
            │  │     │  ├─ timezone_proxy.rb
            │  │     │  ├─ timezone_transition.rb
            │  │     │  ├─ transition_rule.rb
            │  │     │  ├─ transitions_timezone_period.rb
            │  │     │  ├─ version.rb
            │  │     │  └─ with_offset.rb
            │  │     └─ tzinfo.rb
            │  ├─ xcodeproj-1.25.1
            │  │  ├─ LICENSE
            │  │  ├─ README.md
            │  │  ├─ bin
            │  │  │  └─ xcodeproj
            │  │  └─ lib
            │  │     ├─ xcodeproj
            │  │     │  ├─ command
            │  │     │  │  ├─ config_dump.rb
            │  │     │  │  ├─ project_diff.rb
            │  │     │  │  ├─ show.rb
            │  │     │  │  ├─ sort.rb
            │  │     │  │  └─ target_diff.rb
            │  │     │  ├─ command.rb
            │  │     │  ├─ config
            │  │     │  │  └─ other_linker_flags_parser.rb
            │  │     │  ├─ config.rb
            │  │     │  ├─ constants.rb
            │  │     │  ├─ differ.rb
            │  │     │  ├─ gem_version.rb
            │  │     │  ├─ helper.rb
            │  │     │  ├─ plist.rb
            │  │     │  ├─ project
            │  │     │  │  ├─ case_converter.rb
            │  │     │  │  ├─ object
            │  │     │  │  │  ├─ build_configuration.rb
            │  │     │  │  │  ├─ build_file.rb
            │  │     │  │  │  ├─ build_phase.rb
            │  │     │  │  │  ├─ build_rule.rb
            │  │     │  │  │  ├─ configuration_list.rb
            │  │     │  │  │  ├─ container_item_proxy.rb
            │  │     │  │  │  ├─ file_reference.rb
            │  │     │  │  │  ├─ group.rb
            │  │     │  │  │  ├─ helpers
            │  │     │  │  │  │  ├─ build_settings_array_settings_by_object_version.rb
            │  │     │  │  │  │  ├─ file_references_factory.rb
            │  │     │  │  │  │  └─ groupable_helper.rb
            │  │     │  │  │  ├─ native_target.rb
            │  │     │  │  │  ├─ reference_proxy.rb
            │  │     │  │  │  ├─ root_object.rb
            │  │     │  │  │  ├─ swift_package_local_reference.rb
            │  │     │  │  │  ├─ swift_package_product_dependency.rb
            │  │     │  │  │  ├─ swift_package_remote_reference.rb
            │  │     │  │  │  └─ target_dependency.rb
            │  │     │  │  ├─ object.rb
            │  │     │  │  ├─ object_attributes.rb
            │  │     │  │  ├─ object_dictionary.rb
            │  │     │  │  ├─ object_list.rb
            │  │     │  │  ├─ project_helper.rb
            │  │     │  │  └─ uuid_generator.rb
            │  │     │  ├─ project.rb
            │  │     │  ├─ scheme
            │  │     │  │  ├─ abstract_scheme_action.rb
            │  │     │  │  ├─ analyze_action.rb
            │  │     │  │  ├─ archive_action.rb
            │  │     │  │  ├─ build_action.rb
            │  │     │  │  ├─ buildable_product_runnable.rb
            │  │     │  │  ├─ buildable_reference.rb
            │  │     │  │  ├─ command_line_arguments.rb
            │  │     │  │  ├─ environment_variables.rb
            │  │     │  │  ├─ execution_action.rb
            │  │     │  │  ├─ launch_action.rb
            │  │     │  │  ├─ location_scenario_reference.rb
            │  │     │  │  ├─ macro_expansion.rb
            │  │     │  │  ├─ profile_action.rb
            │  │     │  │  ├─ remote_runnable.rb
            │  │     │  │  ├─ send_email_action_content.rb
            │  │     │  │  ├─ shell_script_action_content.rb
            │  │     │  │  ├─ test_action.rb
            │  │     │  │  └─ xml_element_wrapper.rb
            │  │     │  ├─ scheme.rb
            │  │     │  ├─ user_interface.rb
            │  │     │  ├─ workspace
            │  │     │  │  ├─ file_reference.rb
            │  │     │  │  ├─ group_reference.rb
            │  │     │  │  └─ reference.rb
            │  │     │  ├─ workspace.rb
            │  │     │  └─ xcodebuild_helper.rb
            │  │     └─ xcodeproj.rb
            │  └─ zeitwerk-2.6.18
            │     ├─ MIT-LICENSE
            │     ├─ README.md
            │     └─ lib
            │        ├─ zeitwerk
            │        │  ├─ cref.rb
            │        │  ├─ error.rb
            │        │  ├─ explicit_namespace.rb
            │        │  ├─ gem_inflector.rb
            │        │  ├─ gem_loader.rb
            │        │  ├─ inflector.rb
            │        │  ├─ internal.rb
            │        │  ├─ kernel.rb
            │        │  ├─ loader
            │        │  │  ├─ callbacks.rb
            │        │  │  ├─ config.rb
            │        │  │  ├─ eager_load.rb
            │        │  │  └─ helpers.rb
            │        │  ├─ loader.rb
            │        │  ├─ null_inflector.rb
            │        │  ├─ real_mod_name.rb
            │        │  ├─ registry.rb
            │        │  └─ version.rb
            │        └─ zeitwerk.rb
            └─ specifications
               ├─ CFPropertyList-3.0.7.gemspec
               ├─ activesupport-6.1.7.10.gemspec
               ├─ addressable-2.8.7.gemspec
               ├─ algoliasearch-1.27.5.gemspec
               ├─ atomos-0.1.3.gemspec
               ├─ base64-0.3.0.gemspec
               ├─ benchmark-0.4.1.gemspec
               ├─ bigdecimal-3.2.2.gemspec
               ├─ claide-1.1.0.gemspec
               ├─ cocoapods-1.15.2.gemspec
               ├─ cocoapods-core-1.15.2.gemspec
               ├─ cocoapods-deintegrate-1.0.5.gemspec
               ├─ cocoapods-downloader-2.1.gemspec
               ├─ cocoapods-plugins-1.0.0.gemspec
               ├─ cocoapods-search-1.0.1.gemspec
               ├─ cocoapods-trunk-1.6.0.gemspec
               ├─ cocoapods-try-1.2.0.gemspec
               ├─ colored2-3.1.2.gemspec
               ├─ concurrent-ruby-1.3.3.gemspec
               ├─ escape-0.0.4.gemspec
               ├─ ethon-0.16.0.gemspec
               ├─ ffi-1.17.2.gemspec
               ├─ fourflusher-2.3.1.gemspec
               ├─ fuzzy_match-2.0.4.gemspec
               ├─ gh_inspector-1.1.3.gemspec
               ├─ httpclient-2.9.0.gemspec
               ├─ i18n-1.14.7.gemspec
               ├─ json-2.7.6.gemspec
               ├─ logger-1.7.0.gemspec
               ├─ minitest-5.25.4.gemspec
               ├─ molinillo-0.8.0.gemspec
               ├─ mutex_m-0.3.0.gemspec
               ├─ nanaimo-0.3.0.gemspec
               ├─ nap-1.1.0.gemspec
               ├─ netrc-0.11.0.gemspec
               ├─ nkf-0.2.0.gemspec
               ├─ public_suffix-4.0.7.gemspec
               ├─ rexml-3.4.1.gemspec
               ├─ ruby-macho-2.5.1.gemspec
               ├─ typhoeus-1.4.1.gemspec
               ├─ tzinfo-2.0.6.gemspec
               ├─ xcodeproj-1.25.1.gemspec
               └─ zeitwerk-2.6.18.gemspec

```