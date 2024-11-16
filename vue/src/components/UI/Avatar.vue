<template>
  <div
    :class="avatarClasses"
    :style="computedStyle"
    class="inline-flex items-center justify-center overflow-hidden font-bold text-center aspect-square"
  >
    <span v-if="label" class="flex items-center justify-center w-full h-full"> {{ label }} </span>
    <v-icon v-if="icon" :name="icon" :scale="scale" class="text-current" />
    <img v-if="image" :src="image" :alt="label || 'Avatar Image'" class="object-cover w-full aspect-square" />
  </div>
</template>

<script>
export default {
  name: 'Avatar',
  props: {
    label: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
    image: {
      type: String,
      default: '',
    },
    scale: {
      type: [String, Number],
      default: '1',
    },
    size: {
      type: [String, Number],
      default: 'medium',
    },
    shape: {
      type: String,
      default: 'circle',
    },
    style: {
      type: Object,
      default: () => ({}), // For inline styles
    },
  },
  computed: {
    avatarClasses() {
      const sizeClass = this.sizeClasses[this.size] || (typeof this.size === 'number' ? `${this.size}` : '12');
      return {
        [`w-${sizeClass} h-${sizeClass}`]: true,  // Apply size as a Tailwind class
        'rounded-full': this.shape === 'circle', 
        'rounded-none': this.shape === 'square',
        'rounded': this.shape === 'squircle',
      };
    },
    computedStyle() {
      // const size = typeof this.size === 'number' ? `${this.size}rem` : undefined;
      const size = typeof this.size === 'number'
        ? `${this.size}rem`
        : this.sizeClasses[this.size]
        ? `${this.sizeClasses[this.size]}rem`
        : '2.25rem';
      return {
        ...this.style, 
        width: size,    
        height: size,  
      };
    },
    sizeClasses() {
      return {
        small: '1.75',   
        medium: '2.25', 
        large: '3',  
        xlarge: '4', 
      };
    },
  },
};
</script>
