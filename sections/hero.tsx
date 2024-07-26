+import { ImageWidget } from "apps/admin/widgets.ts";
+
 export default function Header() {
   return (
-    <header className="bg-gray-800 text-white">
-      <div className="container mx-auto flex justify-between items-center p-4">
-        <a href="/" className="logo">
-          <img
-            src="/logo.svg"
-            alt="Primordial Groove Logo"
-            className="h-8"
-          />
+    <header className="bg-black text-white">
+      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center p-8 md:p-16">
+        <div className="md:w-1/2">
+          <h1 className="text-4xl md:text-6xl font-bold mb-4">
+            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
+              Primordial Groove
+            </span>
+          </h1>
+          <p className="text-lg md:text-xl mb-8">
+            A web3 music collective exploring the fusion of ancient rhythms and cutting-edge technology.
+          </p>
+          <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-md hover:bg-gradient-to-l transition-colors duration-300">
+            Join the Collective
+          </button>
+        </div>
+        <div className="md:w-1/2 mt-8 md:mt-0">
+          <img
+            src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/ff6bb37e-0eab-40e1-a454-86856efc278e"
+            alt="Hero Image"
+            className="w-full h-auto"
+          />
+        </div>
+      </div>
+      <div className="bg-gradient-to-r from-purple-800 to-pink-900 text-white py-4">
+        <nav className="container mx-auto flex justify-center space-x-8">
+          <a href="#" className="hover:text-gray-300">
+            About
+          </a>
+          <a href="#" className="hover:text-gray-300">
+            Events
+          </a>
+          <a href="#" className="hover:text-gray-300">
+            Join Us
+          </a>
         </nav>
-        <nav className="hidden md:flex">
-          <ul className="flex space-x-4">
-            <li>
-              <a href="#" className="hover:text-gray-400">
-                About
-              </a>
-            </li>
-            <li>
-              <a href="#" className="hover:text-gray-400">
-                Events
-              </a>
-            </li>
-            <li>
-              <a href="#" className="hover:text-gray-400">
-                Join Us
-              </a>
-            </li>
-          </ul>
-        </nav>
-        <img
-          src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/ff6bb37e-0eab-40e1-a454-86856efc278e"
-          alt="Hero Image"
-          className="w-48 h-48"
-        />
       </div>
     </header>
   );
 }
+
+interface Props {
+  /**
+   * @description The hero image to be displayed on the landing page.
+   */
+  heroImage?: ImageWidget;
+}

```